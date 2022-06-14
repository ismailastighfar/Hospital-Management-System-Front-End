const ROOT_URL = 'http://localhost:8000';
import axios from "axios";

axios.defaults.withCredentials = true

export async function loginUser(dispatch, loginPayload) {
    let credits = JSON.stringify(loginPayload)
    dispatch({ type: 'REQUEST_LOGIN' });
    return await axios.get(`${ROOT_URL}/sanctum/csrf-cookie`).then(() => {
        return  axios.post(`${ROOT_URL}/api/patient/login`, credits ,  { headers: { 'Content-Type': 'application/json' } } ).then(
        (res) => {
            let data ={
                userDetails: res.data.patient,
                token: res.data.token
            }
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
            localStorage.setItem('currentUser', JSON.stringify(data));
            return data
        }
        ).catch( (error) => {
            dispatch({ type: 'LOGIN_ERROR', error: error.response.data.message })
            return error
        })
        
    })
    
}
  
   
export async function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    
} 