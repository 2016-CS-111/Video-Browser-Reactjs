
import axios from 'axios';

const KEY = "AIzaSyBy2uRUd3HAQXaTtAktv4LrIPxtCcbZjQA"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});