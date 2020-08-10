import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Code and Design<br /> for Web Development</h1>
        <p>Hi, I'm Adrian. Nice to meet you! I'm very passionate about using technology to make lives easier. Natural strength in creativity and an eye for design.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#efefef">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0,256L288,160L576,224L864,256L1152,160L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z;

            M0,128L288,288L576,128L864,160L1152,64L1440,288L1440,320L1152,320L864,320L576,320L288,320L0,320Z;

            M0,160L288,0L576,96L864,160L1152,320L1440,224L1440,320L1152,320L864,320L576,320L288,320L0,320Z;

            M0,256L288,160L576,224L864,256L1152,160L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z
            "
            />
          </path>
        </svg>
      </div>
    </div>
  </div>
)

export default IndexPage