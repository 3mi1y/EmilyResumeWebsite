import React from 'react'
import styled from 'styled-components'
import starbucksVisualization from './images/starbucks_visualization.jpg'
import diamondAnalysisVisualization from './images/diamonds_visualization.png'
import d3Map from './images/d3map.png'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;

  @media screen and (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`
const Column = styled.div`{
  position: relative;

  @media screen and (min-width: 600px) {
    width: 50%;
  }
  @media screen and (min-width: 1000px) {
    width: calc(100% / 3);
  }

  &:hover {
    opacity: .7;
  }
`
const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`
const Link = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
const Middle = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #333;

  &:hover {
    opacity: .7;
  }
`
const Text = styled.div`
  color: white;
  font-family: Raleway;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`

const MyProjects = () => {
  return (
    <Container>
      <Column>
        <Image src={diamondAnalysisVisualization} />
        <Middle>
          <Link href="https://codepen.io/eCheroske/full/KyXvME" target='blank'>
            <Text>Check it out >></Text>
          </Link>
        </Middle>
      </Column>
      <Column>
        <Image src={starbucksVisualization} />
        <Middle>
          <Link href="https://codepen.io/eCheroske/full/WXrxxM" target='blank'>
            <Text>Check it out >></Text>
          </Link>
        </Middle>
      </Column>
      <Column>
        <Image src={d3Map} />
        <Middle>
          <Link href="https://github.com/3mi1y/FinalDataVizProject" target='blank'>
            <Text>Check it out >></Text>
          </Link>
        </Middle>
      </Column>
    </Container>
  )
}

export default MyProjects
