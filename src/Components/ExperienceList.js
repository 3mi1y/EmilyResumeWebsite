import React from 'react'
import ExperienceBox from './ExperienceBox'

const styles = {
  container: {
    width: '100%',
    backgroundColor: 'rgba(103, 128, 159, .8)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '5%',
    paddingBottom: '5%'
  },
  header: {
    color: 'rgb(44, 62, 80)',
    fontFamily: 'Raleway',
    fontSize: '8vh',
    textAlign: 'center',
    fontWeight: '200'
  }
}

const ExperienceList = ({experiences}) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Work History</h1>
      {
        experiences.reverse().map(experience => {
          return <ExperienceBox experience={experience} />
        })
      }
    </div>
  )
}

export default ExperienceList
