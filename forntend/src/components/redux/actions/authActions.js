import axios from "axios"

import { FAIL, GETCURRENT, GETUSERS, LOGIN, LOGOUT, REGISTER } from "../types/authTypes";
export const register =(data,navigate)=> async(dispatch)=>{
    try {
        const res = await axios.post("/user/register",data);
        dispatch({type:REGISTER,payload:res.data})
        navigate("/User/UserProfile")
    } catch (error) {
        console.log(error)
    }
}
export const login =(data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post("/user/login",data)
        dispatch({type:LOGIN,payload:res.data})
        if(res.data.foundUser.role==="admin"){
          navigate('/admin')
        }else{
          navigate("/UserProfile")
        }
    } catch (error) {
        console.log(error)
    }
}
export const getcurrent = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/user/current", config);
    dispatch({ type: GETCURRENT, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }

};
export const getUsers = () => async (dispatch) => {
  const config={
    headers:{
      token:localStorage.getItem('token')
    }
  }
  try {
    const res = await axios.get("/user/users",config);
    dispatch({ type:GETUSERS , payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const AddUser = (newUsers) => async (dispatch) => {
  try {
    const res = await axios.post("/api/user/", newUsers);
    dispatch(getUsers());
  } catch (error) {
    console.log(error);
  }
};
export const deletUser = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/user/deleted/${id}`);
    dispatch(getUsers());
  } catch (error) {
    console.log(error);
  }
};
  export const logout = () => {
    localStorage.removeItem("token")
  return { type: LOGOUT };
};