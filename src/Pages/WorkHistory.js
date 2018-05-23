import React from 'react'
import ExperienceList from '../Components/ExperienceList'

const experiences = [
  {
    title: 'Social Media Internship',
    where: 'Montana Code School',
    date: 'Spring 2016',
    img: 'https://montanacodeschool.com/wp-content/uploads/2016/08/MCS_LOGO_v2_noshadow.png',
    learned: 'As a freshman in the Computer Science program, I took this internship as an opportunity to get involved in the tech world' +  
    ' without having any coding experience. I learned a lot about leveraging the power of social media to promote small start ups.'
  },
  {
    title: 'Marketing Internship',
    where: 'Montana Code Girls',
    date: 'Summer 2016',
    img: 'https://montanacodeschool.com/wp-content/uploads/2016/08/MCS_LOGO_v2_noshadow.png',
    learned: 'I got to build a Wordpress Website and help market a new startup called the Montana Code Girls. It was a lot of fun to work to ' +
    'get more women involved in tech.'
  },
  {
    title: 'Programmer',
    where: 'Spectral Fusion Designs',
    date: 'Fall 2016 - Spring 2017',
    learned: 'My primary responsibility was to maintain existing websites for the office. This involved debugging SQL databases and maintaining Linux servers. ' + 
    'I also got to build a ticket management app for an IT shop on campus using a LAMP stack.'
  },
  {
    title: 'Internship',
    where: 'Big Sky Code Academy',
    date: 'Summer 2017 - September 2017',
    learned: 'I got to be a TA in an online programming bootcamp teaching fullstack javascript web development. In the process, I got to learn another stack and become more ' +
    'familiar with React, Vue, NodeJS and MongoDB'
  },
  {
    title: 'Instructor',
    where: 'Big Sky Code Academy',
    date: 'September 2017 - March 2017',
    learned: 'I helped teach a part-time online bootcamp that focused on full stack web development.'
  }
]

const WorkHistory = () => {
  return (
    <div>
      <ExperienceList 
        experiences={experiences}
      />
    </div>
  )
}

export default WorkHistory