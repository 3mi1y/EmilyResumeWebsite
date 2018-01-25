import React from 'react'
import FaTwitterSquare from 'react-icons/lib/fa/twitter'
import FaGithubSquare from 'react-icons/lib/fa/github'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin'

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  marble: {
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(https://photos-6.dropbox.com/t/2/AABWRNepb1akHF5I0sAUieZF5KwkXqYA4zHFThvz1wR0bg/12/39366090/jpeg/32x32/1/_/1/2/StockSnap_9NWHXMX7RE.jpg/EKrZgh4Y9vUBIAIoAg/cOxaR2c-bO4my9eF7ec0Z9Ok5YMa7MSwzXrm39ObKHg?size=1280x960&size_mode=3)',
    position: 'absolute',
    backgroundSize: 'cover'
  },
  colorSection: {
    width: '100%',
    height: '40vh',
    backgroundColor: 'rgb(224, 130, 131)',
    position: 'absolute',
    top: '60vh'
  },
  centerFrame: {
    width: '50%',
    height: '90vh',
    position: 'absolute',
    top: '5vh',
    backgroundColor: 'rgb(44, 62, 80)',
    boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  backgroundTitle: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgb(44, 62, 80)',
    color: 'rgba(103, 128, 159, .8)',
    fontFamily: 'Raleway',
    fontSize: '3.7vh'
  },
  thinText: {
    fontWeight: '200',
    marginLeft: '2%'
  },
  thickText: {
    fontWeight: '400'
  },
  image: {
    maxWidth: '25vh',
    borderRadius: '50%',
    boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    marginTop: '8vh',
    marginBottom: '4vh'
  },
  myName: {
    fontFamily: 'Raleway',
    color: 'rgba(103, 128, 159, .8)',
    fontSize: '5vw',
    marginTop: '2vh',
    marginBottom: '10px',
    padding: '0px'
  },
  myInfo: {
    fontFamily: 'Raleway',
    color: '#bdc3c7',
    fontSize: '2vw',
    margin: '0px',
    paddingBottom: '3px',
    marginBottom: '4vh',
    marginLeft: '3%',
    fontWeight: '200'
  },
  infoBox: {
    padding: '5px',
    marginLeft: '10%',
    marginRight: '10%'
  },
  socialMediaLinkContainer: {
    height: '10vh',
    width: '100%',
    backgroundColor: 'rgba(103, 128, 159, .8)',
    position: 'absolute',
    top: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconsContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '6vh'
  },
  icon: {
    color: '#cecece'
  },
  button: {
    padding: '10px',
    border: '1px solid #bdc3c7',
    borderRadius: '10px',
    marginTop: '6vh',
    textDecoration: 'none',
    color: '#bdc3c7',
    fontFamily: 'Raleway',
    fontSize: '1.5vw',
    marginLeft: '3%',
  }
}

const Home = () => {
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.marble}>
        </div>
        <div style={styles.colorSection}>
        </div>
        <div style={styles.centerFrame}>
          <img src='https://pbs.twimg.com/profile_images/874739741547089921/tHTtxuZ3.jpg' style={styles.image}/>
          <div style={styles.infoBox}>
            <h1 style={styles.myName}><span style={styles.thinText}>Emily</span> <span style={styles.thickText}>Cheroske</span></h1>
            <h3 style={styles.myInfo}>Full Stack Web Developer/Data Visualization Person</h3>
            <a href='https://docs.google.com/document/d/1_QOR4XqzpVgbC_Axvyqpd7bOzfU2rJLGPl3QRZrupWA/edit?usp=sharing' target='blank' style={styles.button}>Printable Resume</a>
          </div>
          <div style={styles.socialMediaLinkContainer}>
            <div style={styles.iconsContainer}>
              <a href='https://twitter.com/echeroske' target='blank' style={styles.icon}><FaTwitterSquare /></a>
              <a href='https://github.com/3mi1y' target='blank' style={styles.icon}><FaGithubSquare /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
