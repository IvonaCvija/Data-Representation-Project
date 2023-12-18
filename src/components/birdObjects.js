//importing CardBody and Card from react-bootstrap
import { CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function BirdObjects(props) {

    return (
        <div>
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
            </Card>
        </div>
    );
}
//exporting the BirdObjects component for use in other parts of the application
export default BirdObjects;