import { LOGO } from "../utils/constants"
import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Body from "./Body"


const Header = () => {
  const [btnchange,setbtnchange]=useState('Login')

    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src={LOGO} />
        </div>
        <div className='nav-items'>
          <ul>
            <Link to='/'><li>Home</li></Link>
            
            <Link to='/about'><li>About Us</li></Link>
           <Link to='/contact'><li>Contact Us</li></Link> 
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