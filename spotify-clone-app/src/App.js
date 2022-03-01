import React, { useEffect, useState } from 'react';
import './App.css';
import './Login';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token, playlists, discoverWeekly }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      spotify.setAccessToken(_token);
      spotify.getMe()
        .then(user => {
          dispatch({
            type: 'SET_USER',
            user: user,
          })
        }).catch(err => {
          console.error(err);
        });
      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      }).catch(err => {
        console.error(err);
      })
      spotify.getPlaylist('3C64V048fGyQfCjmu9TIGA').then(discoverWeekly => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discoverWeekly: discoverWeekly,
        })
      }).catch(err => {
        console.error(err)
      })
    }
  }, []);

  console.log("😡: ", user)
  console.log("😃: ", token)
  console.log("🥺: ", playlists)
  console.log("🤫: ", discoverWeekly)

  return (
    <div className="app">
      {token ? (<Player spotify={spotify} />) : (<Login />)}
    </div>
  );
}

export default App;
