//FUNCTIONAL COMPONENT
//imports
import { useState } from "react";
//definition of component Create
function Create() {
    // define variables using the useState hook, for name, picture and cover
    const [name, setName] = useState('');
    const [picture, setPictures] = useState('');
    const [habitat, setHabitat] = useState('');

    // define a function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Name: " + name +
            " Picture: " + picture +
            " Habitat: " + habitat);
    }

    return (
        <div>
            <h2>Hello from create component!</h2>
            {/* form for adding a new bird, invoke onSubmit when button is clicked */}
            <form onSubmit={handleSubmit}>
                {/* taking user input for name */}
                <div className="form-group">
                    <label>Add bird name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                {/* taking user input for picture */}
                <div className="form-group">
                    <label>Add picture of the bird: </label>
                    <input type="text"
                        className="form-control"
                        value={picture}
                        onChange={(e) => { setPictures(e.target.value) }}
                    />
                </div>
                {/* taking user input for habitat */}
                <div className="form-group">
                    <label>Add habitat: </label>
                    <input type="text"
                        className="form-control"
                        value={habitat}
                        onChange={(e) => { setHabitat(e.target.value) }}
                    />
                </div>
                {/* Submit button for adding the bird */}
                <div>
                    <input type="submit" value="ADD" />
                </div>
            </form>
        </div>
    );
}
// Export the Create component for use in other parts of the application
export default Create;