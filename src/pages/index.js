import React from 'react'
import Link from 'gatsby-link'

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
        <svg viewBox="0 60 1440 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="white">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0,160L240,256L480,192L720,192L960,160L1200,96L1440,224L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z;
            
            M0,224L240,256L480,96L720,224L960,224L1200,96L1440,64L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z;

            M0,192L240,160L480,64L720,256L960,192L1200,128L1440,128L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z;

            M0,160L240,256L480,192L720,192L960,160L1200,96L1440,224L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z"
            />
          </path>
        </svg>
      </div>
    </div>
  </div>
)

export default IndexPage