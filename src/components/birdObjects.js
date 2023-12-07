//importing CardBody and Card from react-bootstrap
import { CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function BirdObjects(props) {

    return (
        <div>
            {/*displaying the bird's name*/}
            <h3>{props.myBirds.name}</h3>
            {/*displaying the bird's image*/}
            <img src={props.myBirds.picture}></img>
            {/*displaying the first bird's habitat in a paragraph element*/}
            <p>{props.myBirds.habitat}</p>
        </div>
    );
}
//exporting the BirdObjects component for use in other parts of the application
export default BirdObjects;