import axios from "axios"

import { FAIL, LOGIN, REGISTER } from "../types/authTypes";


// export const register=(data,navigate)=>async(dispatch)=>{
//     try{
//     const res= await axios.post("/user/register",data);
//     console.log(res.data)
//     dispatch({type:REGISTER,payload:res.data});//msg user token from back
//     navigate('/login')
//     }
//     catch(error){
//         dispatch({type:FAIL,payload:error.response.data});

//     }
// }
export const register =(data,navigate)=> async(dispatch)=>{
    try {
        const res = await axios.post("/user/register",data);
        dispatch({type:REGISTER,payload:res.data})
        navigate("/")
    } catch (error) {
        console.log(error)
    }
}
// export const login=(data,navigate)=>async(dispatch)=>{
//     try{
//     const res= await axios.post("/api/user/login",data);
//     console.log(res.data)
//     dispatch({type:LOGIN,payload:res.data});//msg user token from back
//     navigate('/')
//     }
//     catch(error){
//         dispatch({type:FAIL,payload:error.response.data});

//     }
// };
export const login =(data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post("/user/login",data)
        dispatch({type:LOGIN,payload:res.data})
        navigate("/")
    } catch (error) {
        console.log(error)
    }
}