import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
      <div className="container d-flex justify-content-center align-items-center flex-column">

      <h1 className='text-center'>Welcome to the Home Page. <br />Organise Your <br />Work and Life Now.</h1>

      <p>This is the landing page for this applicaton. Become Focused, Organised and Calm with <br />Note App. The World to task manager app. </p>
      <button className='home-btn p-2'> Make Note List</button>
    </div>
    </div>
  );
};

export default Home
