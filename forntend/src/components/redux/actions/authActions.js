import axios from "axios"
import _default from "concurrently";
import { FAIL, REGISTER } from "./type/authTypes";

export const register=(data,navigate)=>async(dispatch)=>{
    try{
    const res= await axios.post("/api/user/register",data);
    console.log(res.data)
    dispatch({type:REGISTER,payload:res.data});//msg user token from back
    navigate('/')
    }
    catch(error){
        dispatch({type:FAIL,payload:error.response.data});

    }
}
export const login=(data,navigate)=>async(dispatch)=>{
    try{
    const res= await axios.post("/api/user/login",data);
    console.log(res.data)
    dispatch({type:REGISTER,payload:res.data});//msg user token from back
    navigate('/')
    }
    catch(error){
        dispatch({type:FAIL,payload:error.response.data});

    }
};