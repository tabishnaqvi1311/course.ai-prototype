import React from 'react'
import { Navbar } from '../../components'
import styles from '../../App.css'
import '../../App.css'
// import FeatureCards from './components/FeatureCards'

const Home = () => {
  return (
    <>
    <p className='topText'>
        <div className='first'>Limitless Learning.</div><div className='sec'>Redefined.</div>
    </p>
    <p className='bottomText'>Knowlegde At Your Fingertips</p>
    <div className='flexContainer'>
      <input className='mainInput' placeholder='Explore...' name='homeSearch'/>
      <div className='vertical'></div>
    </div>
    <div className='courses'>

      <div className='courses-top'>
        Courses
      </div>
      <div className='courses-bottom'>
        Choose from over 1,000 courses in topics ranging from computer science to finance gnerated by AI
      </div>
      <div className='card-flex'>
        <div className='card'>
          <div className='cardContent'>lorem</div>
        </div>
        <div className='card'>
          <div className='cardContent'>lorem</div>
        </div>
        <div className='card'>
          <div className='cardContent'>lorem</div>
        </div>
        <div className='card'>
          <div className='cardContent'>lorem</div>
        </div>
      </div>
    </div>
    <div className='loginModal'>
      
    </div>
    
    </>

  )
}

export default Home
