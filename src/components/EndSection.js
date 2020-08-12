import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup = styled.div`
    background: url(${props => props.image});
    height: 720px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width: 640px) {
        height: 820px;
    }
`
const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -7px;
    transform: rotate(180deg);
`




const EndSection = props => (
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
    </SectionGroup>
)

export default EndSection