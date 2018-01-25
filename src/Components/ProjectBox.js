import React from 'react'

const styles = {
  container: {
    width: '80%',
    boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '2%',
    paddingBottom: '5%',
    margin: '20px'
  },
  header: {
    color: 'rgb(44, 62, 80)',
    fontFamily: 'Raleway',
    fontSize: '8vh'
  },
  image: {
    maxWidth: '100%'
  },
  button: {
    padding: '10px',
    border: '1px solid rgb(44, 62, 80)',
    borderRadius: '10px',
    marginTop: '6vh',
    textDecoration: 'none',
    color: 'rgb(44, 62, 80)',
    fontFamily: 'Raleway',
    fontSize: '1.5vw',
    marginLeft: '3%',
  },
  description: {
    fontFamily: 'Raleway',
    fontWeight: '200',
    width: '80%'
  }
}
const ProjectBox = ({project}) => {
  console.log(project.image)
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{project.projectName}</h1>
      <a href={project.linkToProject} target='blank'><img src={project.img} style={styles.image}/></a>
      <p style={styles.description}>{project.projectDescription}</p>
      <a href={project.linkToProject} target='blank' style={styles.button}>Check it Out</a>
    </div>
  )
}

export default ProjectBox