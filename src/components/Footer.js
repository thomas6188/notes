import React from 'react'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer style={{ marginTop: rhythm(2.5), paddingTop: rhythm(1), }} >
        <div style={{ float: 'right' }}>
          <a href="https://twitter.com/thomas6188" target="_blank" rel="noopener noreferrer"> twitter</a>
        </div>
        <a href="https://github.com/thomas6188" target="_blank" rel="noopener noreferrer">github</a>
      </footer>
    )
  }
}

export default Footer
