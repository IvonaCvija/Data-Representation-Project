//import the Birds component from the "birds.js" file
import { useEffect, useState } from "react";
import axios from "axios";
import Birds from "./birds";

//FUNCTIONAL COMPONENT
//definition of component Read
function Read() {
    //define an array of bird data
    // const data = [
        // {
        //     "name": "Seagull",
        //     "picture":
        //         "https://th.bing.com/th/id/R.86b8daa7a9ae1262c9aca88f5945fe92?rik=hII5%2fX2ACisazA&riu=http%3a%2f%2fwww.southdublinbirds.com%2freports%2fassets18%2fgalway%2fgalway3_lg.jpg&ehk=k85ghdat%2fFYjDjf9iBHGYf%2bXa%2f%2b5Gf8FgLajf7%2bwX3o%3d&risl=&pid=ImgRaw&r=0",
        //     "habitat": "Europe",
        //     "migration": "No"
        // },
        // {
        //     "name": "Whooper Swan",
        //     "picture":
        //         "https://www.vdio.com/wp-content/uploads/2017/03/Whooper-swan-pics-1024x755.jpg",
        //     "habitat": "Europe",
        //     "migration": "Yes"
        // },
        // {
        //     "name": "Seagull",
        //     "picture":
        //         "https://th.bing.com/th/id/R.86b8daa7a9ae1262c9aca88f5945fe92?rik=hII5%2fX2ACisazA&riu=http%3a%2f%2fwww.southdublinbirds.com%2freports%2fassets18%2fgalway%2fgalway3_lg.jpg&ehk=k85ghdat%2fFYjDjf9iBHGYf%2bXa%2f%2b5Gf8FgLajf7%2bwX3o%3d&risl=&pid=ImgRaw&r=0",
        //     "habitat": "MEAP",
        //     "migration": "No"
        // }
    // ];

    const [data, setData] = useState([]);

    // use the useEffect hook to perform asynchronous data fetching
    useEffect(
        () => {
            // Asynchronous operation using axios to fetch data from the server
            axios.get('http://localhost:4000/api/birds')
                .then(
                    // callback function to handle a successful response, get data(all data from the body), but here just from birds
                    (response) => {
                        // set the fetched data to the state
                        setData(response.data.myBirds)
                    }
                )
                //error message in case of a failed request
                .catch(
                    (error) => {
                        // log the error message to the console
                        console.log(error);
                    }
                );
        }, [] // the empty dependency array ensures that this effect runs once on component mount
    );
    return (
        // JSX rendering
        <div>
            <h2>Birds!</h2>
            {/*show the Birds component and pass the bird data as a prop named "myBirds"*/}
            <Birds myBirds={data}></Birds>
        </div>
    );
}
//export the Read component
export default Read;