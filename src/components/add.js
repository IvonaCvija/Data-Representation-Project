//FUNCTIONAL COMPONENT
//imports
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

//definition of component Add
function Add() {
    // define variables using the useState hook, for name, picture and cover
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [picture, setPicture] = useState('');
    const [type, setType] = useState('');
    const [sighting, setSighting] = useState('');

    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();

    // define a function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Name: " + name +
            "Latin name: " + latinName +
            "Picture: " + picture +
            "Type: " + type +
            "Did I see this bird?: " + sighting);

        // Creating a bird object with form input values
        const bird = {
            name: name,
            latinName: latinName,
            picture: picture,
            type: type,
            sighting: sighting
        }

        // Making an HTTP POST request to the server with the bird data
        axios.post('http://localhost:4000/api/bird', bird)
            // Handling a successful response
            .then((res) => {
                navigate('/birdList');
            })
            // Handling an error response
            .catch();
    }

    return (
        <div style={{ backgroundColor: '#001f3f', padding: '20px', color: 'white' }}>
            <h4>Did you see yet another beautiful bird?!</h4>
            {/* form for adding a new bird, invoke onSubmit when button is clicked */}
            <form onSubmit={handleSubmit}>
                {/* taking user input for name */}
                <div className="form-group">
                    <label>Add bird's name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                {/* taking user input for latin name */}
                <div className="form-group">
                    <label>Add bird's latin name: </label>
                    <input type="text"
                        className="form-control"
                        value={latinName}
                        onChange={(e) => { setLatinName(e.target.value) }}
                    />
                </div>
                {/* taking user input for picture */}
                <div className="form-group">
                    <label>Add picture of the bird: </label>
                    <input type="text"
                        className="form-control"
                        value={picture}
                        onChange={(e) => { setPicture(e.target.value) }}
                    />
                </div>
                {/* taking user input for type */}
                <div className="form-group">
                    <label>Add type: terrestrial, aquatic, bird of prey, other </label>
                    <input type="text"
                        className="form-control"
                        value={type}
                        onChange={(e) => { setType(e.target.value) }}
                    />
                </div>
                {/* taking user input for sighting */}
                <div className="form-group">
                    <label>Did I see this bird? </label>
                    <input type="text"
                        className="form-control"
                        value={sighting}
                        onChange={(e) => { setSighting(e.target.value) }}
                    />
                </div>
                {/* Submit button for adding the bird */}
                <br></br>
                <Button variant="warning" type="submit" className="btn-sm rounded-pill">
                    ADD
                </Button>
            </form>
        </div>
    );
}
// Export the Add component for use in other parts of the application
export default Add;