import React from 'react'
import './Login.css';
import { loginUrl } from './spotify.js'

function Login() {
  console.log(loginUrl)
  return (
    <div className='login'>
      <img src="https://www.vectorlogo.zone/logos/spotify/spotify-ar21.svg" alt="Spotify"></img>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
  
}

export default Login