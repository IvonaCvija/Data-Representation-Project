import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

export default function Edit(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    const [name, setName] = useState("");
    const [latinName, setLatinName] = useState("");
    const [picture, setPicture] = useState("");
    const [type, setType] = useState("");
    const [sighting, setSighting] = useState("");

    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();

    //useEffect Hook is similar componentDidMount
    useEffect(
        () => {
            //axios is a promised based web client
            //make a HTTP Request with GET method and pass as part of the
            //url.
            axios.get('http://localhost:4000/api/bird/' + id)
                .then((response) => {
                    // Assign Response data to the arrays using useState.
                    setName(response.data.name);
                    setLatinName(response.data.latinName);
                    setPicture(response.data.picture);
                    setType(response.data.type);
                    setSighting(response.data.sighting)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }, []);
    const handleSubmit = (event) => {
        //limits one click to one action
        event.preventDefault();
        const newBird = {
            id: id,
            name: name,
            latinName: latinName,
            picture: picture,
            type: type,
            sighting: sighting

        };
        //passing it up to server
        axios.put('http://localhost:4000/api/bird/' + id, newBird)
            .then((res) => {
                console.log(res.data);
                navigate('/birdList');
            });
    }
    return (
        <div style={{ backgroundColor: '#001f3f', padding: '20px', color: 'white' }}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add bird's name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add bird's latin name: </label>
                    <input type="text"
                        className="form-control"
                        value={latinName}
                        onChange={(e) => setLatinName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add picture of a bird: </label>
                    <input type="text"
                        className="form-control"
                        value={picture}
                        onChange={(e) => setPicture(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add bird's type: </label>
                    <input type="text"
                        className="form-control"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Did you see the bird now? </label>
                    <input type="text"
                        className="form-control"
                        value={sighting}
                        onChange={(e) => setSighting(e.target.value)}
                    />
                </div>
                <br></br>
                <div className="form-group">
                    <Button variant="warning" type="submit" className="btn-sm rounded-pill">
                        Update Bird
                    </Button>
                </div>
            </form>
        </div>
    );
}