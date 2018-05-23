import React from 'react'

const styles = {
  container: {
    width: '50%',
    backgroundColor: 'white',
    boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    marginTop: '10px',
    marginBottom: '10px',
    padding: '3%',
    fontFamily: 'Raleway'
  },
  header: {
    color: 'rgb(44, 62, 80)',
    fontFamily: 'Lobster',
    fontSize: '3vw',
    marginBottom: '10px'
  },
  subHeader: {
    fontFamily: 'Raleway',
    color: '#333',
    fontSize: '2vw',
    fontWeight: '200',
    marginBottom: '10px'
  },
  date: {
    color: 'rgb(224, 130, 131)',
    fontSize: '2vw',
    fontWeight: '200',
    marginTop: '0px'
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

const ExperienceBox = ({experience}) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{experience.title}</h1>
      <h2 style={styles.subHeader}>{experience.where}</h2>
      <h3 style={styles.date}>{experience.date}</h3>
      <p>{experience.learned}</p>
    </div>
  )
}

export default ExperienceBox