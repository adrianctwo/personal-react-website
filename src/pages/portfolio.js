import React from 'react'
import MainSection from '../components/MainSection'
import styled from 'styled-components'


const AboutPage = () => (
    <div>
        <MainSection
            image={require('../images/background1.jpg')}
            title="My Portfolio"
            text="Here are a few design projects I've worked on recently. Email me."
        />
    </div>
)

export default AboutPage