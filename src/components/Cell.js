import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
`

const CellImage = styled.img`
`

const CellTitle =  styled.div`
`

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image}></CellImage>
        <CellTitle title={props.title}></CellTitle>
    </CellGroup>
)

export default Cell