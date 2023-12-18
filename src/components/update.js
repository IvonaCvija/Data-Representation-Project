import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Edit(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array objects push() method
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    const [habitat, setHabitat] = useState("");
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
                    setPicture(response.data.picture);
                    setHabitat(response.data.habitat);
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
            picture: picture,
            habitat: habitat
        };
        //passing it up to server
        axios.put('http://localhost:4000/api/bird/' + id, newBird)
            .then((res) => {
                console.log(res.data);
                navigate('/read');
            });
    }
    return (
        <div>
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
                    <label>Add picture of a bird: </label>
                    <input type="text"
                        className="form-control"
                        value={picture}
                        onChange={(e) => setPicture(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add bird's habitat: </label>
                    <input type="text"
                        className="form-control"
                        value={habitat}
                        onChange={(e) => setHabitat(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Update Bird" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}