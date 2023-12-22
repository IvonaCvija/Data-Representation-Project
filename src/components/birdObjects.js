//importing CardBody and Card from react-bootstrap
import { CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
//https://react-bootstrap.netlify.app/docs/components/buttons

function BirdObjects(props) {
    return (
        <div>
            {/* Display a Card for each bird */}
            <Card key={props.myBirds._id} style={{ maxWidth: '800px', maxHeight: '800px', backgroundColor: '#F5F5Dd' }} className="mx-auto text-center">
                {/*displaying the bird's name and latin name*/}
                <Card.Header style={{ fontSize: '20px'}}>Name & latin name: <strong>{props.myBirds.name}, {props.myBirds.latinName}</strong></Card.Header>
                <CardBody className='text-right'>
                    {/*displaying the bird's image*/}
                    <img src={props.myBirds.picture} style={{ maxWidth: '700px', maxHeight: '600px' }}></img>
                    {/*displaying the first bird's type in a paragraph element*/}
                    <p>Type: <strong>{props.myBirds.type}</strong></p>
                    <p>Did you see this bird? {props.myBirds.sighting}</p>
                </CardBody>
                {/* adding button Update */}
                <Row className='align-items-center'>
                    <Col>
                        <Link to={'/update/' + props.myBirds._id}>
                            <Button variant="outline-info">Update</Button>
                        </Link>
                    </Col>
                    <Col>
                        {/* Add button to delete the book */}
                        <Button variant='outline-danger' onClick={
                            (e) => {
                                // Make a DELETE request to the server to delete the book
                                axios.delete('http://localhost:4000/api/bird/' + props.myBirds._id)
                                    .then((res) => {
                                        // Trigger a reload of books after successful deletion
                                        let reload = props.reload();
                                    })
                                    .catch();
                            }
                        }>Delete</Button>
                    </Col>
                </Row>
                <br></br>
            </Card>
            <br></br>
        </div>
    );
}
//exporting the BirdObjects component for use in other parts of the application
export default BirdObjects;