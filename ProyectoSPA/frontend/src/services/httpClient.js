import axios from 'axios';

const httpClient = axios.create(
    {
        timeout: 6000,
        headers:{
            "Content-Type": "application/json"
        }
    
    }
)
export default httpClient;
