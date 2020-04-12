import React from 'react'
import { Card } from 'react-bootstrap'
import styles from './homecontent.module.css'

const HomeContentBlock = () => (
  <div className="container">
    <div class="row">
      <Card className={styles.cardStyle}>
        <Card.Body>
          <Card.Title>Work</Card.Title>
          <Card.Text>
            <p>Aspiring Architect.</p>
            <p>Tech Lead @Infosys.</p>
            <p>SharePoint, Office 365, and Azure.</p>
          </Card.Text>
          <Card.Link href={'blog/work'}>Read More</Card.Link>
        </Card.Body>
      </Card>
      <Card className={styles.cardStyle}>
        <Card.Body>
          <Card.Title>Leisure</Card.Title>
          <Card.Text>
            <p>Science and Technology.</p>
            <p>Food and Travel.</p>
            <p>Books, Movies, and TV Shows.</p>
          </Card.Text>
          <Card.Link href={'blog/leisure/'}>Read More</Card.Link>
        </Card.Body>
      </Card>
      <Card className={styles.cardStyle}>
        <Card.Body>
          <Card.Title>Life</Card.Title>
          <Card.Text>
            <p>Family above everything else.</p>
            <p>Live and let live.</p>
            <p>Laughter is the best medicine.</p>
          </Card.Text>
          <Card.Link href={'blog/life/'}>Read More</Card.Link>
        </Card.Body>
      </Card>
    </div>
  </div>
)

export default HomeContentBlock