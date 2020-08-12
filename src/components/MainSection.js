import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup = styled.div`
    background: url(${props => props.image});
    height: 720px;
    background-size: cover;
    background-position: center;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width: 640px) {
        height: 820px;
        
    }
`

const SectionTitleGroup = styled.div`
    display: grid;
    margin: 0 auto auto;
    grid-gap: 20px;
    text-align: center;
    max-width: 700px;
    padding: 150px 50px;

    @media (max-width: 1024px)  {
        max-width: 600px;
    }
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-delay: 0.1s;
    /* setting the animation to forward so it doesn't change opacity to 0 */
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);

    @media (max-width: 720px) {
        font-size: 40px;
    }
`

const SectionText = styled.p`
    color: white;
    font-size: 30px;
    line-height: 1.2;
    animation: HeroAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1)
`
const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`
const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -7px;
    transform: rotate(180deg);
`


const MainSection = props => (
    <SectionGroup image={props.image}>
        <WaveBottom><Wave /></WaveBottom>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default MainSection