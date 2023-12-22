//import the Birds component from the "birds.js" file
import { useEffect, useState } from "react";
import axios from "axios";
import Birds from "./birds";

//FUNCTIONAL COMPONENT
//definition of component BirdList
function BirdList() {
    const backgroundStyle = {
        backgroundColor: '#79d2a6',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    };

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
                        setData(response.data)
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

    // Function to reload data by making another GET request
    const ReloadData = (e) => {
        axios.get('http://localhost:4000/api/birds')
            .then(
                // Callback function to handle successful response
                (response) => {
                    // Update the state with the re-fetched data
                    setData(response.data)
                }
            )
            .catch(
                // Error handling for failed requests
                (error) => {
                    console.log(error);
                }
            );
    }

    return (
        // Render the component with the fetched data and reload function
        <div style={{ backgroundColor: '#006400', padding: '20px', color: 'white' }}>
            <h2>Here are all of your birds!</h2>
            {/*show the Birds component and pass the bird data as a prop named "myBirds"*/}
            <Birds myBirds={data} Reload={ReloadData}></Birds>
        </div>
    );
}
//export the BirdList component
export default BirdList;