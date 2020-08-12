import React from 'react'
import MainSection from '../components/MainSection'
import EndSection from '../components/EndSection'
import styled from 'styled-components'


const SectionCaption = styled.h2`
    font-weight: 600;
    font-size: 40px;
    text-transform: uppercase;
    color: #F5349F;
    text-align: center
    margin-bottom: 50px;
`

const BodyGroup = styled.div`
    margin: 0 20px;

    @media (max-width: 800px){
        margin: 0 5px;
    }
`

const SectionBodyGroup = styled.div`
    max-width: 1000px;
    display: grid;
    grid-template-columns: 300px auto;
    grid-gap: 0px;
    margin: 0 auto;
    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`
const SectionContainer = styled.div`
    border-bottom: 1px solid rgba(0,0,0, 0.1);

`
const SectionTitle = styled.p`
    font-size: 25px;
    margin: 0;
    font-weight: 600;
    line-height: 1.2;
    color: #8A34F5;
    justify-self: center;
    align-self: center;
    

    @media (max-width: 720px) {
        margin-bottom: 10px;
        text-align: center
    }
`

const SectionText = styled.p`
    font-size: 18px;
    line-height: 1.2;
    font-weight: 600;
    color: rbga(0,0,0, 0.8);
    align-content: center;
`



const AboutPage = () => (
    <div>
        <MainSection
            image={require('../images/background1.jpg')}
            title="About Me"
            text="Graduated from University of Washington certificate in Full Stack Web Development. Passionate about using technology to make lives easier. Natural strength in creativity and an eye for design."
        />
        <BodyGroup>
            <SectionCaption> Web Designer and Developer </SectionCaption>
            <SectionBodyGroup>
                <SectionTitle>
                    Web Development
                    </SectionTitle>
                <SectionText>
                    I have worked on multiple of web based projects for my educational school projects and personal projects. I have built multiple web sites using: HTML, CSS, React, Javascript, JQuery, AJAX, JSON, Gatsby,Bootstrap, MongoBD, MySQL, and Contentful. I studied as a full-stack developer, and therefore have a good understanding on web development.
                    </SectionText>
                <SectionTitle>
                    Web Design
                    </SectionTitle>
                <SectionText>
                    I haved used Figma and AdobeXD for UI and website mockups. Futhermore, I have also used Photoshop and Illustrator for background design and icons design. I studied as a psychology major for my undergraduate degree and therefore have a good understanding on how design influence human bahvior and interactions.
                    </SectionText>
                <SectionTitle>
                    Education
                    </SectionTitle>
                <SectionText>
                    2019 - Graduated from University of Washington Full-Stack Developer Bootcamp. Learned: HTML5, CSS3, JavaScript, jQuery, Java, Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command Line, Git, and more.<br /><br />
                    2016 - Graduated from University of California, Irvine with a Pscyhology Bachelor Degree.
                    </SectionText>
            </SectionBodyGroup>
        </BodyGroup>
        <EndSection
            image={require('../images/background1.jpg')}
        />
    </div>
)

export default AboutPage