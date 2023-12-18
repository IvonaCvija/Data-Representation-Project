//importing the BirdObjects component from a file called "birdObjects"
import BirdObjects from "./birdObjects";

function Birds(props){

    return props.myBirds.map(
        (bird)=>{
            return <BirdObjects myBirds={bird}  key={bird._id}></BirdObjects>
            //show the BirdObjects component for each bird from "myBirds" array
            //pass the "bird" object as a prop to the BirdObjects component
            //use the "isbn" property of the BirdObjects component as the key
        }
    );
}
//exporting the Birds component
export default Birds;