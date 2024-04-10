import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'
//BEM -> Block Element Modifier

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt5'>What is GPT5</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)


const Navbar = () => {
  const [toggleMenu, SetToggleMenu] = useState(false);

  return (
    <div className='gpt5__navbar'>
      <div className='gpt5__navbar-links'>
        <div className='gpt5__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='gpt5__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt5__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt5__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => SetToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => SetToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='gpt5__navbar-menu_container scale-up-center'>
            <div className='gpt5__navbar-menu_container-links'>
              <Menu/>
              <div className='gpt5__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar