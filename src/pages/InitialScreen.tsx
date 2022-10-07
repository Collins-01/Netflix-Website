import React, { useState } from 'react'
import AuthScreen from './AuthScreen';
import  './styles/InitialScreen.css';

function InitialScreen() {
    const[signIn, setSignIn] = useState<boolean>(false);
  return (
    <div className='initialScreen'>
    <div >
      <img className='initialScreen__logo' src='https://imgs.search.brave.com/cRGXfr-xVcANFarTd15D7q5RkhE56BYGHD9PP4y9uSM/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy53/b25kZXJiYWJ5Lm9y/Zy9zaXRlcy93b25k/ZXJiYWJ5Mi5wZXJr/aW5zZGV2MS5vcmcv/ZmlsZXMvbmV0Zmxp/eF9sb2dvX2RpZ2l0/YWx2aWRlby5wbmc' alt=''/>

      <button className='initialScreen__button' onClick={()=>setSignIn(true)}>
        Sign In
      </button>
      <div className='initialScreen__gradient'/>
      <div className='initialScreen__body'>
        <>
        {
          signIn ? (<AuthScreen/>) : (
          <>
                <h1>Unlimited films, TV Programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

        <div className='initialScreen__input'>
          <form>
            <input type='email' placeholder='Email Address'/>
            <button className='initialScreen__getStarted' onClick={()=>setSignIn(true)}>GET STARTED</button>
          </form>
           </div>
          </>
          )
        }
        </>
      </div>
    </div>
  </div>
  )
}

export default InitialScreen