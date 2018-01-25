import React from 'react'

const styles = {
  container: {
    width: '100%',
    backgroundColor: 'rgb(224, 130, 131)',
    fontFamily: 'Raleway',
    margin: '0px',
    padding: '2%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    fontWeight: '200',
    color: 'rgb(44, 62, 80)'
  },
  header: {
    margin: '0px',
    padding: '0px'
  },
  additionalLinks: {
    width: '30%',
    borderRight: '1px dotted #333'
  },
  contactInfo: {
    width: '60%'
  },
  infoHeader: {
    paddingRight: '8px',
    color: '#333'
  },
  link: {
    color: 'rgb(44, 62, 80)',
    textDecoration: 'none'
  }
}

const Contact = () => {
  return (
    <div style={styles.container}>
      <div style={styles.additionalLinks}>
        <h2>Additional Links</h2>
        <p><a style={styles.link} href='https://docs.google.com/document/d/1_QOR4XqzpVgbC_Axvyqpd7bOzfU2rJLGPl3QRZrupWA/edit?usp=sharing' target='blank'>Printable Resume</a></p>
        <p><a style={styles.link} href='https://github.com/3mi1y' target='blank'>Github Profile</a></p>
        <p><a style={styles.link} href='https://codepen.io/eCheroske/' target='blank'>CodePen Profile</a></p>
      </div>
      <div style={styles.contactInfo}>
        <h2>Contact Info</h2>
        <p><span style={styles.infoHeader}>email:</span>emily@portal.org</p>
        <p><span style={styles.infoHeader}>cell phone:</span><a style={styles.link} href="tel://1-406-890-9117">(406) 890-9117</a></p>
      </div>
    </div>
  )
}

export default Contact
