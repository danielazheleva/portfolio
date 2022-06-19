// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import "../styles/homepage.css"
import profile_pic from '../assets/profile-pic.png'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="container">
        <div className="intro-box">
          <div className="image-box">
            <img src={profile_pic} alt="Daniela in an avocado" />
          </div>
          <div className="text-box">
            <div className="title">
              <h2>Hello, I'm Daniela!</h2>
            </div>
            <div className="tldr">
              <p>
                I'm a software engineer living in London, but originally from Bulgaria. 
                This is my first attempt at building an online portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage