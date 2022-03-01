import React from 'react'
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header.js'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow.js'

function Body({ spotify }) {
  const [{ discoverWeekly }, dispatch] = useDataLayerValue();
  console.log(discoverWeekly);
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body__info'>
        <img src={discoverWeekly?.images[0].url} alt=''></img>
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly?.description}...</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleIcon className='body__shuffle' />
          <FavoriteIcon className='body__shuffle' />
          <MoreHorizIcon className='body__shuffle' />
        </div>
        {discoverWeekly?.tracks.items.map(item =>
          <SongRow track={item?.track} />
        )}
      </div>
    </div>
  )
}

export default Body