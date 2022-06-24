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
const AboutPage = () => {

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
  return (
    <Layout pageTitle="About Me"> 
    <div className='text-holder'>
      <p className='text-body'>
        Lorem ipsum dolor sit amet, ut vix ullum tamquam expetendis. Ei mazim munere his. 
        Conceptam philosophia vim ex, mentitum nominavi tincidunt ei qui. Oratio graecis te ius, ea eum liber mollis noluisse, 
        vis atomorum antiopam periculis ut. Cum affert accusamus ne, at est errem tantas equidem. Cibo exerci pro ad. Eripuit deleniti eu vel, 
        accusata similique vis cu, has eu dolor dolorem. Ne mea erat facilisi, ex atqui expetenda reprimique pri, te dolore consul iriure mei. 
        Menandri disputando pro in, cu nam quis congue sententiae. 
        <br></br><br></br>
        <ul>
          <li>Duis enim nibh, mollis vel sapien et, euismod pulvinar mi. Duis vitae eleifend diam.</li>
          <li>Praesent convallis mattis ligula sit amet lacinia. Sed vitae malesuada diam, nec facilisis metus.</li>
          <li>Maecenas ut dictum purus. Integer placerat vestibulum nulla, nec dapibus urna aliquam sed. Etiam orci libero, lobortis nec luctus in, feugiat eget du.</li>
        </ul>
        Mei autem fugit percipitur eu, eos quot liber definiebas ex. Ei pri graeco democritum. Ex nullam efficiantur vim, ius viris affert 
        mandamus ea, eum vivendo iracundia cu. Ne qui velit dolor soleat. Diam timeam delenit vel ad, eu eum exerci assueverit, dolorem maiestatis 
        eloquentiam cum ei. Sea iudico invenire at. Tation utamur disputationi cu ius, id reque graece graeco duo, assum verear ea ius. Sonet 
        omittantur appellantur per no, an eum ubique gloriatur rationibus, eloquentiam neglegentur at vel. Per odio sapientem concludaturque in, 
        suas mundi aliquip duo ea, mea no munere conclusionemque. Nec modo eloquentiam et, maiorum hendrerit cu mea. Est invidunt definitionem eu, 
        ut consul noluisse vim. Utamur alienum pertinacia vim no. Ut eam minim indoctum. 
      </p>
    </div>
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

// Step 3: Export your component
export default AboutPage