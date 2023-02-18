import React from 'react'
import styles from './styles/about.module.css'
import bg from './assets/Rectangle133.png'

const About = () => {
  // window.addEventListener('scroll', () => {
  //   document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  // }, false);

  return (
    <div className={styles.main} style={
      {
        height: '130vh',
        // fontFamily: 'Lexend Exa, sans-serif'
      }
    }>
      <div className={styles.flexMainContainer}>
        <div className={styles.flexAbout} style={{height: '600px', width: '600px'}}>
          <h2>About</h2>
          <p style={{padding: '3rem'}}>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit amet ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
        </div>
        <div className={styles.flexInnerContainer}>
          <div className={styles.right}><h2>100k+</h2></div>
          <div className={styles.left}><h2>150+</h2></div>
          <div className={styles.right}><h2>500+</h2></div>
        </div>
      </div>
    </div>
  )
}

export default About
