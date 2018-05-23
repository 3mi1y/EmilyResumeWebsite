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
  @media screen and (min-width: 600px) {
    width: 50%;
  }
  @media screen and (min-width: 1000px) {
    width: calc(100% / 3);
  }
`
const Image = styled.img`
  display: block;
  max-width: 100%;
`

const MyProjects = () => {
  return (
    <Container>
      <Column>
        <Image src={diamondAnalysisVisualization} />
      </Column>
      <Column>
        <Image src={starbucksVisualization} />
      </Column>
      <Column>
        <Image src={d3Map} />
      </Column>
    </Container>
  )
}

export default MyProjects
