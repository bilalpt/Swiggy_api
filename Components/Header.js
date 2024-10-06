import { LOGO } from "../utils/constants"
import React from "react"
import { useState } from "react"
const Header = () => {
  const [btnchange,setbtnchange]=useState('Login')

    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src={LOGO} />
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button
            onClick={()=>{
              btnchange === 'Login' ? setbtnchange('Logout'): setbtnchange('Login')
            }}
            >{btnchange}</button>
          </ul>
        </div>
      </div>
    )
  }
export default  Header