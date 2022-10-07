import React, { useEffect, useState } from 'react'
import "./styles/Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  const [show, handleShow] = useState(false);
  
  const transitionNavBar = ()=>{
    if(window.scrollY > 100 ) { 
      handleShow(true);
    }
    else{
      handleShow(false);
    }
  };
  useEffect(()=>{ 
    window.addEventListener('scroll', transitionNavBar)
    return window.removeEventListener('scroll', transitionNavBar)
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className='nav__contents'>
      <Link to='/'>
      <img src='https://imgs.search.brave.com/cRGXfr-xVcANFarTd15D7q5RkhE56BYGHD9PP4y9uSM/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy53/b25kZXJiYWJ5Lm9y/Zy9zaXRlcy93b25k/ZXJiYWJ5Mi5wZXJr/aW5zZGV2MS5vcmcv/ZmlsZXMvbmV0Zmxp/eF9sb2dvX2RpZ2l0/YWx2aWRlby5wbmc' alt='' className='nav__logo'/>
      </Link>

     <Link to='/profile'>
     <img src='https://imgs.search.brave.com/8oloCEWFSxaYXkovXgKpvCWtbu7BCFKsLgTppzjsmr8/rs:fit:1200:1200:1/g:ce/aHR0cDovL3BsdXNw/bmcuY29tL2ltZy1w/bmcvcG5nLXNtaWxp/bmctZmFjZS1zbWls/ZXktcG5nLTM4OTYu/cG5n' alt='' className='nav__avatar' />
     </Link>

      </div>
     
    </div>
  )
}

export default Nav