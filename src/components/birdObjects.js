//importing CardBody and Card from react-bootstrap
import { CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function BirdObjects(props) {

    return (
        <div>
            {/* Display a Card for each book */}
            <Card key={props.myBirds._id}>
                {/*displaying the bird's name*/}
                <Card.Header>{props.myBirds.name}</Card.Header>
                <CardBody>
                    {/*displaying the bird's image*/}
                    <img src={props.myBirds.picture}></img>
                    {/*displaying the first bird's habitat in a paragraph element*/}
                    <p>{props.myBirds.habitat}</p>
                </CardBody>
                {/* adding button Update */}
                <Link to={'/update/'+props.myBirds._id} className='btn btn-primary'>Update</Link>
                {/* Add button to delete the book */}
                <Button variant='danger' onClick={
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
            </Card>
        </div>
    );
}
//exporting the BirdObjects component for use in other parts of the application
export default BirdObjects;