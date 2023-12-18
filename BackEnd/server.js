const express = require('express')
const app = express()
const port = 4000;
const cors = require('cors');

// Enable CORS(Cross-Origin Resource Sharing) middleware
app.use(cors());
// Additional headers for CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Body parsing middleware to handle JSON and URL-encoded data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    // username:password
    await mongoose.connect('mongodb+srv://User:user2023@cluster0.aarrxqk.mongodb.net/');
}

// Bird schema definition
const birdSchema = new mongoose.Schema({
    name:String,
    picture:String,
    habitat:String
})
    
// Create a model based on the bird schema 
const birdModel = mongoose.model(`my_birds`, birdSchema)

// Updating existing data using id
app.put('/api/bird/:id', async (req,res)=>{

    console.log("Update: "+req.params.id);

    //await so it changes it only after finding the bird
    let bird = await birdModel.findByIdAndEdit(req.params.id, req.body, {new:true});
    res.send(bird);
})

// Create a new bird
app.post('/api/bird', (req, res) => {
    // Logging the received data to the console
    console.log(req.body);
    // Sending a response message
    // res.send("Data Received!");
    birdModel.create({
        name:req.body.name,
        picture:req.body.picture,
        habitat:req.body.habitat
    })
    .then(() =>{res.send("Bird created")})
    .catch(() =>{res.send("Bird not created")})
})

// Handling a GET request to the root path '/'
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get(`/api/bird/:id`, async (req, res)=>{
    console.log(req.params.id);

    let bird = await birdModel.findById({_id:req.params.id})
    res.send(bird);
})

// Handling a GET request to '/api/birds'
app.get('/api/birds', async (req, res) => {

    let birds = await birdModel.find({});
    res.json(birds);
    // Mock data for birds
    // const birds = [
    //     {
    //         "name": "Seagull",
    //         "picture":
    //             "https://th.bing.com/th/id/R.86b8daa7a9ae1262c9aca88f5945fe92?rik=hII5%2fX2ACisazA&riu=http%3a%2f%2fwww.southdublinbirds.com%2freports%2fassets18%2fgalway%2fgalway3_lg.jpg&ehk=k85ghdat%2fFYjDjf9iBHGYf%2bXa%2f%2b5Gf8FgLajf7%2bwX3o%3d&risl=&pid=ImgRaw&r=0",
    //         "habitat": "Europe",
    //         "migration": "No"
    //     },
    //     {
    //         "name": "Whooper Swan",
    //         "picture":
    //             "https://www.vdio.com/wp-content/uploads/2017/03/Whooper-swan-pics-1024x755.jpg",
    //         "habitat": "Europe",
    //         "migration": "Yes"
    //     },
    //     {
    //         "name": "Starling",
    //         "picture":
    //             "https://birdwatchireland.ie/app/uploads/2019/01/Starling-P08-Michael-Finn-600x400.jpg",
    //         "habitat": "Galway",
    //         "migration": "No"
    //     }
    // ]

    // Respond with JSON data
    // res.json({
    //     myBirds: birds,
    //     "Message": "Some Information",
    //     "Disclaimer": "Hello World"
    // })
})

// Start the Express app and listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})