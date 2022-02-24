
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#


const redirectUrl = "http://localhost:3000/"
const clientId = "a7e4af2c4f6642629b08cdb324cb9e5a"
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      // #accessToken=mysuperkey&name=kevin
      let parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial
    }, {})
}
export const authEndpoint = "https://accounts.spotify.com/authorize"
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;


// 1. Click login button
// 2. Redirect to spotify login page
// 3. redirect to home page once login