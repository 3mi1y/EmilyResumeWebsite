import React from 'react'
import styled from 'styled-components'
import FaTwitterSquare from 'react-icons/lib/fa/twitter'
import FaGithubSquare from 'react-icons/lib/fa/github'
import CodePenSquare from 'react-icons/lib/fa/codepen'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
  height: 90vh;
  background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
`
const Image = styled.img`
  max-width: 150px;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.30), 0 5px 6px rgba(0,0,0,0.22);
`
const HeaderOne = styled.h1`
  font-family: Lobster;
  color: rgba(255, 118, 117, .5);
  margin-bottom: 0px;
`
const HeaderTwo = styled.h3`
  font-family: Raleway;
  font-weight: 200;
  color: white;
  margin-top: 10px;
`
const IconContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2% 0% 2% 0%;

  @media screen and (max-width: 600px) {
    width: 60%;
  }

  @media screen and (min-width: 1000px) {
    width: 20%;
  }
`
const Icon = styled.span`
  color: white;
  font-size: 50px;

  &:hover {
    color: rgba(255, 118, 117, .5);
  }
`
const Button = styled.a`
  border: 2px solid white;
  color: white;
  font-family: Raleway;
  font-weight: 200;
  padding: 10px 15px 10px 15px;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    border: 2px solid rgba(255, 118, 117, .5);
    color: rgba(255, 118, 117, .5);
  }
`

const Home = () => {
  return (
    <Container>
      <Image src='https://pbs.twimg.com/profile_images/874739741547089921/tHTtxuZ3.jpg'/>
      <HeaderOne>Emily Cheroske</HeaderOne>
      <HeaderTwo>Software Developer</HeaderTwo>
      <IconContainer>
        <a href='https://twitter.com/echeroske' target='blank'><Icon><FaTwitterSquare /></Icon></a>
        <a href='https://github.com/3mi1y' target='blank'><Icon><FaGithubSquare /></Icon></a>
        <a href="#" taget='blank'><Icon><CodePenSquare /></Icon></a>
      </IconContainer>
      <Button href='https://docs.google.com/document/d/1_QOR4XqzpVgbC_Axvyqpd7bOzfU2rJLGPl3QRZrupWA/edit?usp=sharing' target='blank'>Printable Resume</Button>
    </Container>
  )
}

export default Home
