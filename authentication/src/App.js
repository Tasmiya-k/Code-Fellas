import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login"
import {Container,Row ,Col } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Signup from './components/Signup';

function App() {
  return (
    
    <Container>
      <Box>
      <Row>
        <Col>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        </Col>
      </Row>
      </Box>
    </Container>
  );
}

export default App;
