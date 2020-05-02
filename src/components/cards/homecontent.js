import React from 'react'
import { Card } from 'react-bootstrap'
import styles from './homecontent.module.css?version=1.1'

const HomeContentBlock = () => (
  <div className="container">
    <div class="row">
      <Card className={styles.cardStyle}>
        <Card.Body>
          <Card.Title>💼 Work</Card.Title>
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
          <Card.Title>🎉 Leisure</Card.Title>
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
          <Card.Title>🏠 Life</Card.Title>
          <Card.Text>
          <p>Early to bed, early to rise.</p>
            <p>Optimistic and Goal oriented.</p>         
            <p>Live and let live.</p>
          </Card.Text>
          <Card.Link href={'#'}>Read More</Card.Link>
        </Card.Body>
      </Card>
      
      
    </div>
  </div>
)

export default HomeContentBlock