import React from 'react'
import ProjectList from '../Components/ProjectList'
import starbucksVisualization from './images/starbucks_visualization.jpg'
import diamondAnalysisVisualization from './images/diamonds_visualization.png'
import d3Map from './images/d3map.png'

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(103, 128, 159, .8)',
    paddingBottom: '5%'
  },
  header: {
    color: 'rgb(44, 62, 80)',
    fontFamily: 'Raleway',
    fontSize: '8vh'
  },
  subHeader: {
    fontFamily: 'Raleway',
    color: '#333',
    fontSize: '2vw',
    fontWeight: '200'
  },
  thickText: {
    fontWeight: '400'
  },
  thinText: {
    fontWeight: '200'
  },
  textContainer: {
    width: '80%'
  },
  subheaderContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const myProjects = [
  {
    img: d3Map,
    linkToProject: 'https://github.com/3mi1y/FinalDataVizProject',
    projectName: 'D3 Map',
    projectDescription: 'I worked with a handful of grad students to create a tool for one of my professors to show companies across the US. A company is represented by a bubble and bubble size shows the number of tags associated with the company.'
  },
  {
    img: starbucksVisualization,
    linkToProject: 'https://codepen.io/eCheroske/full/WXrxxM',
    projectName: 'Starbucks Menu',
    projectDescription: 'This interactive visualization shows the entire Starbucks Menu. Each beverage on the Starbucks menu is plotted based on the amount of sugar and fat in the drink. Bubble size represents the calorie content of the drink. Hover over a bubble to see more nutrition information about the drink.'
  },
  {
    img: diamondAnalysisVisualization,
    linkToProject: 'https://codepen.io/eCheroske/full/KyXvME',
    projectName: 'D3 Diamond Analysis',
    projectDescription: 'This interactive data visualization analyzes a dataset of 300 diamonds to try and understand the factors that impact the price per carat. I implemented a clustered force layout that allows the user to categorize the diamonds based on cut, color and clarity. Bubble size represents the price/carat of the diamond. Hover over the bubble to see additional diamond information.'
  }
]

const MyProjects = () => {
  console.log(starbucksVisualization)
  return (
    <div style={styles.container}>
      <h1 style={styles.header}><span style={styles.thinText}>Some of My Projects</span></h1>
      <div style={styles.subheaderContainer}>
        <h2 style={styles.subHeader}>
          These are just a few data visualizations I've done, you can check out my
          github <a href='https://github.com/3mi1y' target='blank'>here</a> or my codepen account <a href='https://codepen.io/eCheroske/' target='blank'>here</a> to get a better idea of the range of projects I've worked on.
        </h2>
      </div>
      <ProjectList
        projects={myProjects}
      />
    </div>
  )
}

export default MyProjects
