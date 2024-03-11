
import axios from 'axios';
let baseURL="http://localhost:8080/courierseva/user"

class Loginservice{
   
validatelogin(loginobj)
{
    return axios.post(baseURL+"/login",loginobj);
}



}



export default new Loginservice();