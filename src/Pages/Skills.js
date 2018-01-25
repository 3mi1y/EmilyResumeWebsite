import React from 'react'

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgb(250, 250, 250)',
    paddingBottom: '5%'
  },
  header: {
    color: 'rgb(44, 62, 80)',
    fontFamily: 'Raleway',
    fontSize: '8vh',
    textAlign: 'center',
    fontWeight: '200'
  },
  subheader: {
    paddingBottom: '0px',
    marginBottom: '5px',
    borderBottom: '1px solid rgba(44, 62, 80, .5)',
    color: 'rgb(44, 62, 80)',
    fontWeight: '200'
  },
  list: {
    listStyle: 'none',
    fontFamily: 'Raleway'
  }
}

const Skills = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Skills</h1>
      <ul style={styles.list}>
        <h2 style={styles.subheader}>Web Development Skills</h2>
          <li>HTML</li>
          <li>CSS</li>
          <li>PHP</li>
          <li>Javascript</li>
          <li>React</li>
          <li>A little bit of Vue</li>
        <h2 style={styles.subheader}>Database and Server Side Skills</h2>
          <li>SQL</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Pretty comfortable working my way around a LAMP server</li>
          <li>NodeJS</li>
          <li>ER-Diagraming and Relational Schemas</li>
        <h2 style={styles.subheader}>Other things I've done a lot</h2>
          <li>Object Oriented Programming</li>
          <li>Java</li>
          <li>Python</li>
        <h2 style={styles.subheader}>Data Visualization Skills</h2>
          <li>Data parsing with Python</li>
          <li>D3.js Library</li>
          <li>SVG and Canvas</li>
        <h2 style={styles.subheader}>Icing on the cake</h2>
          <li>Gihub/Version Control</li>
          <li>Photoshop</li>
          <li>Microsoft Products</li>
          <li>Really prefer to work on a Mac</li>
      </ul>
    </div>
  )
}

export default Skills
