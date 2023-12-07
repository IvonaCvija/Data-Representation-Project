//import css files
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//imports components
import Contents from './components/contents';
import Create from './components/create';
import Delete from './components/delete';
import Read from './components/read';
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
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/update">Update</Nav.Link>
            <Nav.Link href="/delete">Delete</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    {/* defining routes for each element and linking them to different contents */}
      <Routes>
        <Route path='/' element ={<Contents></Contents>}></Route>
        <Route path='/create' element ={<Create></Create>}></Route>
        <Route path='/read' element ={<Read></Read>}></Route>
        <Route path='/update' element ={<Update></Update>}></Route>
        <Route path='/delete' element ={<Delete></Delete>}></Route>
      </Routes>

      {/* <Header></Header> 
      <Contents></Contents>
      <Footer></Footer> */}
    </div>
    </BrowserRouter>
  );
}

export default App;