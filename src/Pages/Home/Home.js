import React from 'react'
import TotalStudent from '../components/TotalStudent'
import LoadStudent from './LoadStudent'

const Home = (props) => {
  return (
    <div>
      {/* ttps://stormy-sands-12716.herokuapp.com/ */}
      <LoadStudent />
      <TotalStudent />
    </div>
  )
}

export default Home
