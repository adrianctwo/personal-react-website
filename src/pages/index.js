import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Code and Design<br /> for Web Development</h1>
        <p>Hi, I'm Adrian. Nice to meet you! I'm very passionate about using technology to make lives easier. Natural strength in creativity and an eye for design.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
