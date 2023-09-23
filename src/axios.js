import  axios from "axios";

// base url to make requests to getlinked api
const instance = axios.create({
 baseURL:"https://backend.getlinked.ai" 
});

export default instance;