import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
<div
className="text-center">
<CardGroup>
      <Card>
        <Card.Img variant="top" src="alperen.png" />
        <Card.Body>
          <Card.Title>Alperen Güntekin</Card.Title>
          <Card.Text>
            Kurucu Ortak
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a 
        href="https://www.linkedin.com/in/alperenguntekin/"
        target="_blank">
        <img 
          style={{ width: "2rem" }}
          src="linkedin.png">
          </img>
          </a>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="busra.png" />
        <Card.Body>
          <Card.Title>Büşra Gök</Card.Title>
          <Card.Text>
          Kurucu Ortak
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a 
        href="https://www.linkedin.com/in/busragok/"
        target="_blank">
        <img 
          style={{ width: "2rem" }}
          src="linkedin.png">
          </img>
          </a>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="zafer.png" />
        <Card.Body>
          <Card.Title>Zafer Çalışkan</Card.Title>
          <Card.Text>
          Kurucu Ortak
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a 
        href="https://www.linkedin.com/in/caliskanzafer/"
        target="_blank">
        <img 
          style={{ width: "2rem" }}
          src="linkedin.png">
          </img>
          </a>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="gizem.png" />
        <Card.Body>
          <Card.Title>Gizem Hamamcıoğlu</Card.Title>
          <Card.Text>
          Kurucu Ortak
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a 
        href="https://www.linkedin.com/in/gizemhamamcioglu/"
        target="_blank">
        <img 
          style={{ width: "2rem" }}
          src="linkedin.png">
          </img>
          </a>
        </Card.Footer>
      </Card>
    </CardGroup>
</div>
  );
}

export default GroupExample;