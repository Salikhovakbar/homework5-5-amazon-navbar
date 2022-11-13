import React from 'react'
import './NavbarMenu.css'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import { FaUserCircle } from 'react-icons/fa'
import { HiChevronRight } from 'react-icons/hi'
import { TbWorld } from 'react-icons/tb'
import { BsChevronDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const NavbarMenu = () => {
const [navbarMenu, setNavbarMenu] = useState()
function navbarClick(){
    setNavbarMenu(true)
}
function remove(){
    setNavbarMenu(false)
}

    return (
    <>
<div  className={`navbar-box ${navbarMenu === true ? 'navbar-active': ''}`}>
<div className="navbar-btn-delete-box">
<b className='signin-nav-text'> <FaUserCircle/> Hello, sign in</b>
 <i className='btn-delete-nav' onClick={remove}><GrClose /></i>
</div>
<div className="navbar-option-text-box">
<div className="text-box-inside-nav"><h3>Digital content & devices</h3></div>
<div className="text-box-inside-nav"><p>Amazon Music <HiChevronRight/></p></div>
<div className="text-box-inside-nav"><p>Kindle E-readers & Books <HiChevronRight/></p></div>
<div className="text-box-inside-nav"><p>Amazon Appstore <HiChevronRight/></p></div>
<div className="text-box-inside-nav"><h3>Shop by department</h3></div>
<div className="text-box-inside-nav"><p>Electronics<HiChevronRight/></p></div>
<div className="text-box-inside-nav"><p>Computers<HiChevronRight/></p></div>
<div className="text-box-inside-nav"><p>Smart Home<HiChevronRight/></p></div>
<div className="text-box-inside-nav"><p>Arts & Crafts<HiChevronRight/></p></div>
<div className="more-box-inside-nav"><p>See All <BsChevronDown/></p></div>
<div className="text-box-inside-nav"><h3>Programs & features</h3></div>
<div className="text-box-inside-nav"><p>Gift Cards<HiChevronRight/></p></div>
<div className="text-box-inside-nav"><p>#FoundItOnAmazon</p></div>
<div className="text-box-inside-nav"><p>Amazon Live<HiChevronRight/></p></div>
<div className="text-box-inside-nav"><p>International Shopping<HiChevronRight/></p></div>
<div className="more-box-inside-nav"><p>See All <BsChevronDown/></p></div>
<div className="text-box-inside-nav"><h3>Help & Settings</h3></div>
<div className="text-box-inside-nav"><p>Your Account</p></div>
<div className="language-box-inside-nav"><p>English <TbWorld/> </p></div>
<div className="text-box-inside-nav"><p>Customer Service</p></div>
<div className="text-box-inside-nav"><p><Link className='signin-link-nav' to='/signin'>Sign in</Link></p></div>

</div>
</div>
<i style={{cursor: 'pointer'}}  onClick={navbarClick}><FiMenu/></i>
<div style={navbarMenu ? {display: 'block'} : {display: "none"}} className="background-font"></div>
    </>
  )
}

export default NavbarMenu