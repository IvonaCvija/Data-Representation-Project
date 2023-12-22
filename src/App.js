//import css files
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//imports components
import Greeting from './components/greeting';
import Add from './components/add';
import BirdList from './components/birdList';
import Update from './components/update';

//imports for navigation bar
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//imports for routing
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
    {/* /Navigation bar */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        {/* creating navigation bar with buttons */}
          <Navbar.Brand href="/"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
            <Nav.Link href="/birdList">Birds</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    {/* defining routes for each element and linking them to different contents */}
      <Routes>
        <Route path='/' element = {<Greeting></Greeting>}></Route>
        <Route path='/add' element ={<Add></Add>}></Route>
        <Route path='/birdList' element ={<BirdList></BirdList>}></Route>
        <Route path='/update/:id' element ={<Update></Update>}></Route>
      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;