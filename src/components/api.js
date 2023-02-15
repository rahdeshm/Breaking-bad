import axios from 'axios';


export default axios.create({
    // baseURL:'http://www.breakingbadapi.com/api/'
    baseURL:'https://jsonplaceholder.typicode.com/posts'
})

