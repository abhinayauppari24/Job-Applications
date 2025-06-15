import React from 'react';
import ApplicationsSection from './ApplicationSection'
import Companies from './Companies'
const Home = () => {
  return (
    <div className='bg-gradient-to-b from-sky-950 to-sky-600 min-h-screen'>
      <ApplicationsSection/>
      {/* <Companies/> */}
    </div>
  );
}

export default Home;
