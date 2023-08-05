import * as types from "./actionTypes";
import axios from "axios";



const authStart=()=>{


    return{
        type:types.AUTH.START
    };
}


const authSuccess=(token,data)=>{


    return {
        type:types.AUTH_SUCCESS,
        token:token,
        data:data,
    };
}


const authFail=(error)=>{

    return{
        type:types.AUTH_FAIL,

    }
}


function handledSignup(){

    return(
       (dispatch) =>{
            axios.post("https://instagram-express-app.vercel.app/api/auth/signup")
        }

    )

    
}