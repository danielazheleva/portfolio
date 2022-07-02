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
            { showShort ? 
            <div>
              <h3 className="sub-heading" onClick={() => flipDivs()}>...the short version</h3>
               {  
                data.allMdx.nodes.map((node, index) => {
                  if(node.slug.includes('about')) {
                    if(node.frontmatter.title === 'Short') {
                      return (
                      <p className='text-body'>
                        <MDXRenderer>{node.body}</MDXRenderer>
                      </p>
                      )
                    }
                  }
                })
              }
            </div>
            : null }
          </div>
          <div class="flip-card-long">
          { showLong ? 
            <div>
              <h3 className="sub-heading" onClick={() => flipDivs()}>...the long version</h3>
                {  
                  data.allMdx.nodes.map((node, index) => {
                    if(node.slug.includes('about')) {
                      if(node.frontmatter.title === 'Long') {
                        return (
                          <p className='text-body'>
                            <MDXRenderer>{node.body}</MDXRenderer>
                          </p>
                        )
                      }
                    }
                  })
                }
            </div>
            : null }
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
    <div className='text-holder'>
      <p className='text-body'>
        Integer vel pellentesque nunc. Praesent tempus iaculis fermentum. Cras id tempus ipsum. Morbi nec consectetur ex. In arcu tellus, interdum nec 
        pellentesque vehicula, suscipit id dui. Fusce non feugiat erat. Suspendisse scelerisque varius pretium. Suspendisse potenti. Fusce auctor gravida 
        mauris, non vulputate risus volutpat molestie. Maecenas ut dictum purus. Integer placerat vestibulum nulla, nec dapibus urna aliquam sed. Etiam orci 
        libero, lobortis nec luctus in, feugiat eget dui. Sed fringilla nunc sed ex pharetra, at blandit nibh consectetur. Vivamus gravida interdum mi, at 
        porttitor erat imperdiet eu. Aenean et orci diam. Pellentesque placerat semper nunc, feugiat facilisis est interdum eu.
        <br></br><br></br><br></br>
        Aliquam ante dolor, lobortis lobortis erat non, mollis congue orci. Nullam eu ultricies orci, quis fringilla enim. In hac habitasse platea dictumst. 
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed malesuada purus in sapien dapibus, eu interdum tortor 
        iaculis. Aliquam vel nisi tempor, ullamcorper tortor nec, malesuada nisl. Etiam ut malesuada mi, sed consequat velit. Ut quis nibh nec mauris tempus 
        pretium in ac nisi. Nunc sed varius orci. Suspendisse sollicitudin bibendum orci sed pellentesque. Proin vitae est non turpis cursus fermentum ac at 
        erat. In consequat sagittis molestie.
        <br></br><br></br>
        Phasellus at dolor volutpat, scelerisque nisi a, pretium lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
        In et vestibulum metus, a dignissim elit. Aliquam nec mi vitae nulla egestas commodo. Suspendisse ac sem imperdiet leo dapibus gravida id quis nulla. 
        Quisque quis diam a justo rhoncus consequat. Integer placerat lectus viverra maximus luctus. Vivamus gravida bibendum nunc in tristique. Praesent vehicula 
        lectus a felis pulvinar, eu iaculis purus elementum. Maecenas pretium fringilla libero eu blandit.
      </p>
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