import axios from 'axios';

const KEY = 'AIzaSyD5BHQJsKcrmkz3MQ7jg0Hpu15MN-WTeSM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});