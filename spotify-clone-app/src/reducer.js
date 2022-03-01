export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after finished developing....
  // token: "BQDvGAEdgbTsZmTI2Ia9mHNgT7T-7GyrINPo2lHqvpthnR6e0brcGl5DWPx6R8rsZCIk5fqWvoAbXvZ5_pGX_pBKeblQjEYzQ_BT6sbmQuc58C9YzNeM-cFzTUxiIv7bhcaj6_8M0hfLWufrEdDJW2q4_3p-_dc",
  token: null,
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discoverWeekly: action.discoverWeekly,
      }
    default:
      return state;
  }
}

export default reducer;