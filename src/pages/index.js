import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Code and Design<br /> for Web Development</h1>
        <p>Hi, I'm Adrian. Nice to meet you! I'm very passionate about using technology to make lives easier.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <div className="Logos">
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/Adobe-XD.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/Bootstrap-logo.png')} width="50" />
          <img src={require('../images/CSS.png')} width="50" />
          <img src={require('../images/JavaScript.png')} width="50" />
          <img src={require('../images/Gatsby-Monogram.svg')} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>My Portfolio for Web Development</h2>
      <div className="CardGroup">
        <Card
          title="React"
          text="..."
          image={require('../images/wallpaper1.jpg')}
        />
        <Card
          title="CSS"
          text="..."
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="BootStrap"
          text="..."
          image={require('../images/wallpaper3.jpg')}
        />
        <Card
          title="AdobeXD"
          text="..."
          image={require('../images/wallpaper4.jpg')}
        />
      </div>
    </div>
    <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Websites"
      text="Using React and efficient libraries to build websites. Using React components for reusability, Grid CSS, animation, interactions, dynamic data to deplay websites onto Netlify or Heroku."
    />
  </div>

)

export default IndexPage