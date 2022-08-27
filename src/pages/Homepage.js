import React from 'react'
import AddMovie from '../components/AddMovie'
import Movieslist from '../components/MoviesList'

const Homepage = () => {
  return (
    <div>
        <AddMovie />
        <Movieslist />
    </div>
  )
}

export default Homepage