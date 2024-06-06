import axios from "axios";
import { BASE_URL } from "../api/Api";
const signUpAxiosServices = (values)=>{

    return axios({
        url:`${BASE_URL}/register`,
        method:'post',
        data:values
    })

}

const loginAxiosServices = (values)=>{
return axios({
    url:`${BASE_URL}/login`,
    method:'post',
    data:values
})
}
const sendEmailAxiosService = (values) => {
    return axios({
      url: `${BASE_URL}/send-email`,
      method: 'post',
      data: values
    });
  };


export {signUpAxiosServices,loginAxiosServices,sendEmailAxiosService};