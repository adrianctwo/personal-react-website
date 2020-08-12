import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #E8E8E8;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
    background-size: cover;
    @media (max-width: 1024px) {
        padding: 15px 0;
    }
`
const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #0072b1;
    max-width: 500px
    text-align: center;
    margin: 0 auto;

    @media (max-width: 1024px) {
        margin: 0;
        max-width: 100vw
        font-size: 20px;
    }
`
const Button = styled.a`
    background: linear-gradient(102deg, #0072B1 0%, #0019B1 100%);
    box-shadow: 0px 10px 20px rgba(161,222,255,0.5);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0,2, 1);

    &:hover {
        box-shadow: 0px 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
    }
`
const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    grid-gap: 10px;

    a {
        transition: 0.8s;
    }

    a:hover {
        color: black;
    }

    @media (max-width: 800px) {
        margin: 10px auto;
        grid-template-columns: repeat(1, 1fr);
        width: 100vw;
    }
`
const Copyright = styled.div`
    color: #0099CD;
    width: 500px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 1024px) {
        margin: 0;
        max-width: 100vw
        font-size: 20px;
        padding: 0 2px;
        text-align: center;
    }
`


const Footer = ({ data, children }) => (

    <FooterGroup>
        <Text>Feel free to connect with me on Linkedin</Text>
        <Button
            href="https://www.linkedin.com/in/adrian-situ/"
            target="_blank"
            rel="noopener"
        >Connect</Button>
        <LinkGroup>
            {data.allContentfulLink.edges.map(edge => (
                <a href={edge.node.url}>{edge.node.title}</a>
            ))}
        </LinkGroup>
        <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer