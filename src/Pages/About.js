import React from 'react'

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgb(250, 250, 250)'
  },
  header: {
    color: 'rgb(44, 62, 80)',
    fontFamily: 'Raleway',
    fontSize: '8vh'
  },
  paragraphText: {
    fontFamily: 'Raleway',
    lineHeight: '5vh'
  },
  thickText: {
    fontWeight: '400'
  },
  thinText: {
    fontWeight: '200'
  },
  textContainer: {
    width: '80%',

  }
}

const About = () => {
  return (
    <div style={styles.container} >
      <h1 style={styles.header}><span style={styles.thinText}>About Me</span></h1>
      <div style={styles.textContainer}>
        <p style={styles.paragraphText}>
          I'm currently pursuing my bachelors degree in Computer Science at the University of Montana. I'm intersted in full stack web development 
          and data visualization. When I'm not coding I'm usually either running, cooking, reading or playing Minecraft. I run for the track team at UM 
          and my specialty is the 800. 
        </p>
        <p style={styles.paragraphText}>
          My ultimate goal when I code is to create something beatiful, not just visually in the eyes of the end user, but to also write elegant, human-readable code.  
          I've invested a lot of my time learning as much as I can about full stack web development and I've worked with ASP.NET, a LAMP stack and most recently,
          I've had the opportunity to learn about full stack Javascript web development with NodeJS and React working together to create powerful applications. So far, I'm 
          really loving React and taking the time to learn Javascript has opened a lot of doors for me. While I love every aspect of web development; from ER-Diagraming and 
          working with the server-side code to styling and manipulating the look and feel of the website, I've found another passion in data visualization. Learning Javascript 
          enabled me to explore the D3 library, and I created several custom visualizations over the course of a semester using D3. I loved the library so much, I've continued 
          learning and creating visualizations for fun. 
        </p>
      </div>
    </div>
  )
}

export default About
