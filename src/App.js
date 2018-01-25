import React, { Component } from 'react';
import Home from './Pages/Home'
import About from './Pages/About'
import MyProjects from './Pages/MyProjects'
import Skills from './Pages/Skills'
import WorkHistory from './Pages/WorkHistory'
import Contact from './Pages/Contact'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <MyProjects />
        <Skills />
        <WorkHistory />
        <Contact />
      </div>
    )
  }
}

export default App;
