import React from 'react'
import ProjectBox from './ProjectBox'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

const ProjectList = ({projects}) => {
  console.log(projects)
  return (
    <div style={styles.container}>
      {
        projects.map(project => {
          return <ProjectBox project={project} />
        })
      }
    </div>
  )
}

export default ProjectList
