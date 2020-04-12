import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', marginBottom: rhythm(1.5), }} >
        <img src={profilePic} alt={`Thomas Mathew`} style={{ marginRight: rhythm(1 / 2), marginBottom: 0, borderRadius: '50%', width: rhythm(2), height: rhythm(2), }} />
        <p> Personal blog by{' '}<a href="https://twitter.com/thomas6188" target="_blank">Thomas Mathew</a></p>
      </div>
    )
  }
}

export default Bio
