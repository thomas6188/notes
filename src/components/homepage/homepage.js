import React from 'react'
import { Link } from 'gatsby'

import Header from '../header/header'
import profilePic from '../../components/profile-pic.jpg??version=1.0'
import styles from './homepage.module.css'
import '../../assets/css/font-awesome.min.css'
import '../../assets/css/bootstrap.min.css'

import HomeContentBlock from '../cards/homecontent'

export default function Homepage() {
  return (
    <div className={styles.flexbox}>
      <Header></Header>
      <div className={styles.flexContainer}>
        <div>
          <div className={styles.textCenter}>
            <img src={profilePic} alt="Thomas Mathew" />
          </div>
          <div className={styles.textCenter}>
            <h1>Thomas Mathew</h1>
            <h2>Software Engineer</h2>

            <ul className={styles.socialRibbon}>
              <li><a target="_blank" title="Github" href="https://github.com/thomas6188"><i className="fa fa-2x fa-github"></i></a></li>
              <li><a target="_blank" title="Twitter" href="https://twitter.com/thomas6188"><i className="fa fa-2x fa-twitter"></i> </a></li>
              <li><a target="_blank" title="Linkedin" href="https://www.linkedin.com/in/thomas6188"><i className="fa fa-2x fa-linkedin"></i></a></li>
              <li><Link to={'/blog'} title="Blog"><i className="fa fa-2x fa-square"></i></Link></li>
            </ul>
            <hr />
          </div>
          <div className={styles.aboutMe}>
            <p>
              Hello! Welcome to my personal blog.</p>
            <p>
              I am a Software Engineer from Kerala, India. I am currently working as a Technology Lead with Infosys. I have 9+
              years of experience in Microsoft stack, with focus on cloud and related technologies -
              SharePoint Online, Office 365, Azure, SharePoint Server, C#, ASP.Net, and JavaScript.
              </p>

          </div>
          <div id="homeContent">
            <HomeContentBlock></HomeContentBlock>
          </div>
        </div>
      </div>
    </div>
  )
}
