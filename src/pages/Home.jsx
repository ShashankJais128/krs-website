import React from 'react'
import HomeFaculty from '../components/HomeFaculty';
import HomeMain from '../components/HomeMain';
import HomeTeam from '../components/HomeTeam';

function Home() {
  return (
    <div>
      <HomeMain />
      <HomeFaculty />
      <HomeTeam />
    </div>
  )
}

export default Home;