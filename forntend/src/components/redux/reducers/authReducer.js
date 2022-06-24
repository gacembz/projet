
import { FAIL, GETCURRENT, GETUSERS, LOGIN, LOGOUT, REGISTER } from "../types/authTypes";


const initialState = {
    user:null,
    auth:false,
    load:true,
error:[],
users:[]
}

 const authReducer=(state = initialState, { type, payload }) => {
 switch (type) {
     case REGISTER:
         localStorage.setItem("token",payload.token);
 return {...state,user:payload.newUser,auth:true,load:false}
 case FAIL:
     return{...state,errors:payload.errors};
 case LOGIN:
         localStorage.setItem("token",payload.token);
     return {...state,user:payload.foundUser,auth:true,load:false}   
      case GETCURRENT :
      return { ...state, user: payload.user,auth:true };

    case GETUSERS:
      return { ...state, users: payload.allusers };
    case FAIL:
      return { ...state, errors: payload.errors, user: null };
     
   case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("id");
      return { ...state, user: null,auth:false };
    default:
      return state;
  }
 };
  export default authReducer;


