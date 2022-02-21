const API_KEY = "83be1f0bd4cd52126624afd5a0ce83b8";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflexOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`
}

export default requests;