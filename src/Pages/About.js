import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2% 10% 2% 10%;
  background-color: white;
`
const Header = styled.h1`
  font-family: Lobster;
  color: rgba(51, 51, 51, .5);
`
const Paragraph = styled.p`
  font-family: Raleway;
  line-height: 2;
`

const About = () => {
  return (
    <Container>
      <Header>I create simple, elegant and functional designs.</Header>
      <Header>I like to explore and tell stories with data.</Header>
      <Header>I build interactive visualizations.</Header>
      <Header>Im passionate about building ecommerce solutions for small start ups and artists.</Header>
    </Container>
  )
}

export default About
