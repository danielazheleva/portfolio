// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/about.css";
import { graphql } from 'gatsby'
import bulgaria from "../assets/photos/bulgaria.jpg";
import tenerife from "../assets/photos/tenerife.jpg";
import cotswolds from "../assets/photos/cotswolds.jpg";
import { MDXRenderer } from 'gatsby-plugin-mdx'
import AboutBody from "../components/about-body"


// Step 2: Define your component
const AboutPage = ({ data }) => {
  const [showShort, setShowShort] = React.useState(true)
  const [showLong, setShowLong] = React.useState(false)

  const images = [
    {
      id: 1,
      src: bulgaria,
      alt: "Image 1"
    },
    {
      id: 2,
      src: tenerife,
      alt: "Image 2 "
    },
    {
      id: 3,
      src: cotswolds,
      alt: "Image 3"
    }
  ];
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  let flipDivs = () => {
    setShowShort(!showShort)
    setShowLong(!showLong)
  }

  return (
    <Layout pageTitle="About Me">
      <div className='text-holder'>
        <h2>My Career Path...</h2>
        <div class="flip-card-short">
          {showShort ?
            <div>
              <h3 className="sub-heading" onClick={() => flipDivs()}>...the short version</h3>
              {
                data.allMdx.nodes.map((node, index) => {
                  return (<AboutBody node={node} expected="Short"> </AboutBody>)
                })
              }
            </div>
            : null}
        </div>
        <div class="flip-card-long">
          {showLong ?
            <div>
              <h3 className="sub-heading" onClick={() => flipDivs()}>...the long version</h3>
              {
                data.allMdx.nodes.map((node, index) => {
                  return (<AboutBody node={node} expected="Long"> </AboutBody>)
                })
              }
            </div>
            : null}
        </div>
      </div>
      <h2>On a Personal Side...</h2>
      <div className='image-holder'>
        <div className="imgslider">
          <Slider {...settings}>
            {images.map((item) => (
              <div key={item.id}>
                <img className='image' src={item.src} alt={item.alt} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className='text-holders'>
        {
          data.allMdx.nodes.map((node, index) => {
            return (<AboutBody node={node} expected="Personal"> </AboutBody>)
          })
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title,
        summary,
        image
      }
      id
      body
      slug
    }
  }
}
`

// Step 3: Export your component
export default AboutPage