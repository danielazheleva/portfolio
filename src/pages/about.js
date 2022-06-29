// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/about.css";
import bulgaria from "../assets/photos/bulgaria.jpg";
import tenerife from "../assets/photos/tenerife.jpg";
import cotswolds from "../assets/photos/cotswolds.jpg";

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
              <p className='text-body'>
               {  
                data.allMdx.nodes.map((node, index) => {
                  if(node.slug.includes('about')) {
                    if(node.frontmatter.tittle == 'Short') {
                      return (<p>{node.body}</p>)
                    }
                  }
                })
              }
                My path to becoming a software engineer was somewhat non-traditional. I studied chemistry at Imperial College London, graduating with a masters, a <a 
                href="https://www.pnas.org/doi/full/10.1073/pnas.1903500116" title="Building a synthetic mechanosensitive signaling pathway in compartmentalized artificial cells">
                publication</a>, and new found respect for anyone wanting to spend their career working full time in a science lab. I knew it wasn't the option for me,
                and so I looked elsewhere and landed a space on the Technology Graduate Program at Deutsche Bank. Not knowing much about either technology or Investment
                Banking, I jumped into it with lots of enthusiasm. 
                <br></br><br></br>
              </p>
            </div>
            : null }
          </div>
          <div class="flip-card-long">
          { showLong ? 
            <div>
              <h3 className="sub-heading" onClick={() => flipDivs()}>...the long version</h3>
              <p className='text-body'>
                My path to becoming a software engineer was somewhat non-traditional. I studied chemistry at Imperial College London, graduating with a masters, a <a 
                href="https://www.pnas.org/doi/full/10.1073/pnas.1903500116" title="Building a synthetic mechanosensitive signaling pathway in compartmentalized artificial cells">
                publication</a>, and new found respect for anyone wanting to spend their career working full time in a science lab. I knew it wasn't the option for me,
                and so I looked elsewhere and landed a space on the Technology Graduate Program at Deutsche Bank. Not knowing much about either technology or Investment
                Banking, I jumped into it with lots of enthusiasm. 
                <br></br><br></br>
                Half way through my second 6 month rotation however, I started second guessing my decisions. You see
                I had actually been hired as a Technical Business Analyst, a role which I never knew existed, and while <span>"being the bridge between the business and 
                the developers"</span> sounded interesting on paper, in reality I spent my days looking at gant charts, sitting in meetings, and emailing spreadsheets 
                around. The final push I needed came in the form of a 3 month stint in Group Audit. I knew I couldn't do this for the rest of my working life. 
                <br></br><br></br>
                It definitely wasn't all doom and gloom however. I met fantastic people and really talanted engineers, product owners and team leaders, as well as other 
                graduates from the cohort who have become great friends.  got to see the inner workings of a <strong>very large</strong> corporate (to the best of my
                knowledge there were ~10,000 engineers and ~80,000 total employees) and those 9 months helped me realise what I don't want to do, and ultimately led me
                to what I <span>do want</span> to do - Software Engineering.
                <br></br><br></br>
                I was fortunate that my personal realisation coincided with a wider movement in the bank to retain technical resources, and enrich their technical skills. 
                I was able to leave my Business Analayst role - and therefore the whole graduate scheme - 3 months early and transition into a new team, where my new role
                would be a <span>Junior Software Engineer.</span> To this day I am still amazed and grateful that I landed this position, because it was here that I laid 
                a foundation of knowledge which catapulted me in my journey. It was a combination of factors that made this experience so valuable:
                <ul>
                  <li>
                    A super technical manager, who dedicated some of his precious time to explain basic concepts like REST APIs, MVC architecture and Unit testing.
                    We would spend our 1-1's aroud a white board, and I would come with a list of questions from things I had read that week. No question was stupid,
                    and at no time did I feel uncomforatable for my severe lack of knowledge.
                  </li>
                  <li>A small team, meaning I touched all parts of the tech stack. I would go on to write backend logic, build new front end compoentns, set up the apps 
                    first automated build and deployment pipeline (I wouldn't go as far as calling it full CI/CD though!), run user sessions and helping prioritise sprints. 
                    Later on when a more senior developer joined the team, he would lead a full re-write of the front end in Angular, which I got to see first hand, and 
                    later contribute new features to.
                  </li>
                  <li>Perhaps what turned out to be most useful - when I joined the team was in a re-org phase, meaning it would be some time (it was a huge corporate 
                    after all!) until our priorities were set in stone. In the mean time I would be working on a legacy, internal application aimed at improving the DevEx
                    experience across the bank, that many people wanted, but no team had resources to rebuild or maintian.</li>
                </ul>
                By the time the team pivoted into its long-term objective (<span>which would be adopting cloud technology through the bank</span>) I had gained experience in a 
                ton of new tools - Java, SpringBoot, Angular, Jenkins, Kubernetes (on OpenShift), Helm, MariaDB, MySQL - as well as core concepts like Git, using the
                command line, Agile ceremonies and practices, doing demos and presentations, writing blog posts and building a community around a shared platform. 
                <br></br><br></br>
              </p>
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