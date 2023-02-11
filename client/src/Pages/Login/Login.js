import React from 'react'
import styles from '../../App.css'
import '../../App.css'
import { Navbar } from '../../components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const [userEmail, setuserEmail] = useState('');
  const [pass, setPass] = useState('');

  // const [message, setMessage] = useState('');

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault();   //prevent page refresh on submit
    //access input values
    console.log(userEmail)
    console.log(pass)
    //reset input values
    setuserEmail('')  
    setPass('')
  }
  return (
    <>
    {/* <Navbar /> */}
    <div className='outer'>
      <div className='left-part' style={{height: "80vh"}}>
        Welcome Back
        <div className='loginForm' >
          <form className='frm' autoComplete='off' method='POST' onSubmit={handleSubmit}>
            
            <input type='email' placeholder='Email' name='email' required className='contactField' value={userEmail} onChange={event => setuserEmail(event.target.value)}/>

            <input type='password' placeholder='Password' name='psw' required className='contactField'value={pass} onChange={event => setPass(event.target.value)}/>

            <button type='submit' className='subm'>SUBMIT</button>
          </form>
          <Link to='/signup'>Or Create an Account</Link>
        </div>
      </div>
      <div className='right-part' style={{color: 'white'}}>
        right-part
      </div>
    </div>
    </>
  )
}

export default Login
