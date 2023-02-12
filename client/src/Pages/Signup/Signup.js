import React from 'react'
import { Navbar } from '../../components'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'

const Signup = () => {

  const [userEmail, setuserEmail] = useState('');
  const [pass, setPass] = useState('');
  const [reppass, setrepPass] = useState('');
  // the code above defines three state variables (variables that store info that can change) using the useState hook.  

  // const [message, setMessage] = useState('');

  const handleSubmit = event => {
    console.log('handleSubmit ran\n');
    event.preventDefault();   //prevent page refresh on submit
    //access input values
    console.log(userEmail)
    console.log(pass)
    console.log(reppass)
    //check for repPass
    if((pass == reppass) && (pass.length >= 8)){
      //reset input values
      setuserEmail('')  
      setPass('');
      setrepPass('');
    }
    else{
      alert('pass != reppass ');
    }
  }

  return (
    <>
    {/* <Navbar /> */}
    <div className='outer' style={{color: 'white'}}>
      <div className='left-part'>
        Welcome Back
        <div className='signupForm' >
          <form className='frm' autoComplete='off' method='POST' onSubmit={handleSubmit}>
            <input type='email' placeholder='Email' name='email' required className='contactField' value={userEmail} onChange={event => setuserEmail(event.target.value)}/>

            <input type='password' placeholder='Password' name='psw' required className='contactField' value={pass} onChange={event => setPass(event.target.value)}/>

            <input type='password' placeholder='Repeat Password' name='reppsw' required className='contactField' value={reppass} onChange={event => setrepPass(event.target.value)}/>
            <button type='submit' className='subm'>SUBMIT</button>
          </form>
          Signup with Google
          <Link to='/login'>Or Login</Link>
        </div>
      </div>
      <div className='right-part' style={{color: 'white'}}>
        image goes here
      </div>
    </div>
    </>
  )
}

export default Signup
