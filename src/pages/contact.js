import React from 'react'
import MainSection from '../components/MainSection'
import styled from 'styled-components'

const BodyGroup = styled.div``
const SectionGroup = styled.div``
const SectionText = styled.p``

const ContactPage = () => (
    <div>
        <MainSection
            image={require('../images/background1.jpg')}
            title="Contact"
            text="Feel free to contact me for any questions or job opportunities"
        />

        <BodyGroup>
            <SectionGroup>
                <SectionText>
                    
                </SectionText>
            </SectionGroup>
        </BodyGroup>
    </div>
)

export default ContactPage
