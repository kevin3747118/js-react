import React from 'react'
import './Footer.css'
import { Grid, Slider } from '@mui/material'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import RepeatIcon from '@mui/icons-material/Repeat'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img className='footer__albumLogo' src='https://img.ltn.com.tw/Upload/ent/page/800/2020/08/25/3271254_3.jpg' alt='' />
        <div className='footer__songInfo'>
          <h4>song name</h4>
          <p>...</p>
        </div>
      </div>
      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon fontSizt='large' className='footer__icon'/>
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
      </div>
      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby='continuous-slide'></Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer