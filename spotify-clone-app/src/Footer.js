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
        <p>Album and song details</p>
      </div>
      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon fontSizt='large' className='footer__green' />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__icon' />
      </div>
      <div className='footer__right'>
        <Grid>
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