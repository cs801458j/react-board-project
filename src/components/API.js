import axios from 'axios';

export default axios.create(
    { 
        baseurl: 'https://react-shopping-8ff9a-default-rtdb.firebaseio.com/'
    }
)

