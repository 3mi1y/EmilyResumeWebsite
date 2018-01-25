import React from 'react'
import ProjectList from '../Components/ProjectList'

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
    img: 'https://github.com/3mi1y/FinalDataVizProject/raw/emily/Screen%20Shot%202017-12-10%20at%202.31.58%20PM.png?raw=true',
    linkToProject: 'https://github.com/3mi1y/FinalDataVizProject',
    projectName: 'D3 Map',
    projectDescription: 'I worked with a handful of grad students to create a tool for one of my professors to show companies across the US. A company is represented by a bubble and bubble size shows the number of tags associated with the company.'
  },
  {
    img: 'https://photos-1.dropbox.com/t/2/AABJ4NTuHIskbaJ2UJJDPNO7QWoDbQeRkbIPcCepyxD9lg/12/39366090/png/32x32/1/_/1/2/Screen%20Shot%202018-01-09%20at%2012.01.41%20PM.png/EKrZgh4Y-PUBIAIoAg/a5LcjO3dHzA3RgyzvR6d8b6KbygFNIfxp_u5WzZ-7qE?preserve_transparency=1&size=1600x1200&size_mode=3',
    linkToProject: 'https://codepen.io/eCheroske/full/WXrxxM',
    projectName: 'Starbucks Menu',
    projectDescription: 'This interactive visualization shows the entire Starbucks Menu. Each beverage on the Starbucks menu is plotted based on the amount of sugar and fat in the drink. Bubble size represents the calorie content of the drink. Hover over a bubble to see more nutrition information about the drink.'
  },
  {
    img: 'https://photos-2.dropbox.com/t/2/AABq0FFw953VSMbuCC6VMS0RKhrKxNH48aWKpLAkeMUTPw/12/39366090/png/32x32/1/_/1/2/Screen%20Shot%202018-01-09%20at%2011.59.26%20AM.png/EKrZgh4Y9_UBIAIoAg/ZISK2QaiESzmhAi4I1IXH6iVdNUs6GMLaQRcz8Ll1F4?preserve_transparency=1&size=1600x1200&size_mode=3',
    linkToProject: 'https://codepen.io/eCheroske/full/KyXvME',
    projectName: 'D3 Diamond Analysis',
    projectDescription: 'This interactive data visualization analyzes a dataset of 300 diamonds to try and understand the factors that impact the price per carat. I implemented a clustered force layout that allows the user to categorize the diamonds based on cut, color and clarity. Bubble size represents the price/carat of the diamond. Hover over the bubble to see additional diamond information.'
  }
]

const MyProjects = () => {
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