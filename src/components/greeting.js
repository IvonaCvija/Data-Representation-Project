import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
//https://www.w3schools.com/css/css_colors_rgb.asp -colors of buttons and transparency
//https://www.w3schools.com/jsref/event_onclick.asp

const backgroundImage = "https://images4.alphacoders.com/131/1316179.jpeg";
//FUNCTIONAL COMPONENT
//definition of component Greeting
function Greeting() {

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    };

    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();

    const clickAddButton = () => {
        navigate('/add');
    };

    const clickListButton = () => {
        navigate('/birdList');
    };

    return (
        <div style={backgroundStyle}>
            <div>
                <h1>Hello you bird lover!</h1>
                {/* showing current time */}
                <h2>It is currently {new Date().toLocaleTimeString()}.</h2>
                <br></br>
                <h5>Hope you are looking for new birds...</h5>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <Button style={{ backgroundColor: 'rgba(255, 165, 0, 0.5)' }}
                    className="btn-lg"
                    onClick={clickAddButton}
                >Add a new bird</Button>
            </div>

            <br></br>
            <div>
                <Button style={{ backgroundColor: 'rgba(255, 165, 0, 0.5)' }}
                className="btn-lg"
                onClick={clickListButton}>See all of your birds</Button>
            </div>
        </div>

    )

}
//exporting the Greeting
export default Greeting;