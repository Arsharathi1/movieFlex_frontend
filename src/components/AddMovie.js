import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./AddMovie.css"


 const AddMovie = () => {
     const userNameRef=useRef();
     const movieNameRef=useRef();
     const movieRatingRef=useRef();

     const addMovieHandler=async(e)=>{
     e.preventDefault();

      const data={
      movieName: movieNameRef.current.value,
      userName: userNameRef.current.value,
      movieRating: movieRatingRef.current.value,
     };
     console.log(data);
     const response=await fetch("http://localhost:5000/api/v1/movies",{
      method:"GET",
      headers:{
       "Content-Type":"application/json"
      },
      body:JSON.stringify(data),
      })   
      const dataN= await response.json();
      console.log(dataN);
    };

  return (
    <div className="container mt-5 ">
    <h1>Rate Your Favourite Movie</h1>
    <p>Fill out the below form and rate your experience</p>
    <div className='mt-3'>
    <Form onSubmit={addMovieHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter username" ref={userNameRef}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Favourite Movie</Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" ref={movieNameRef}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Movie Rating</Form.Label>
        <Form.Select  ref={movieRatingRef}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
        </Form.Group>
      <Button variant="dark" type="submit">
        Add
      </Button>
    </Form>
    </div>
    </div>
  )
}

export default AddMovie