import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'

const SectionCaption =styled.p`
  font-weight: 600;
  font-size: 18;
  text-transform: uppercase;
  color: #F5349F;
  text-align: center
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

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
      <h2>Web Development Portfolio</h2>
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

    <SectionCaption> My Web Development Skills </SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell
          title={cell.title}
          image={cell.image} />
      ))}
    </SectionCellGroup>
  </div>

)

export default IndexPage