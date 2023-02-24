import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/LibraryTable';
import { Button, Form, InputGroup } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Library Management</h1>
      <br></br>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search by ISBN"
          aria-label="Search by ISBN"
          aria-describedby="search"
        />
        <Button variant="outline-primary" id="search">
          Search
        </Button>
      </InputGroup>
      <br></br>
      <Table />
    </div>
  );
}

export default App;
