import React from 'react'
import Form from 'react-bootstrap/Form';
import MoviesTable from './MoviesTable';

const Movielist = () => {
  return (
    <div className="container mt-5 ">
    <h1>Favourite Movies List</h1>
    <p>List of the favourite movies Chosen by the users</p>
    <div className="mt-3 row">
      <div className='col'>
        <Form.Control type="text" placeholder="Search" />
        </div>
    <div className='col'>
       <Form.Select >
          <option>1 Star</option>
          <option>2 Star</option>
          <option>3 Star</option>
          <option>4 Star</option>
          <option>5 Star</option>
        </Form.Select>
    </div>
    </div>
    <div className="mt-3">
    <MoviesTable />
    </div>
    </div>
  )
}

export default Movielist