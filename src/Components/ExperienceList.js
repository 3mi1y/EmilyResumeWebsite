import React from 'react'
import ExperienceBox from './ExperienceBox'

const styles = {
  container: {
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '5%',
    paddingBottom: '5%'
  },
  header: {
    color: '#93a5cf',
    fontFamily: 'Lobster',
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
