import React, { useReducer } from "react";

const AuthStateContext= React.createContext();
const AuthDispatchContext = React.createContext();

export function useAuthState() {
    const context = React.useContext(AuthStateContext);
    if (context === undefined) {
      throw new Error("useAuthState must be used within a AuthProvider");
    }
   
    return context;
  }
   
  export function useAuthDispatch() {
    const context = React.useContext(AuthDispatchContext);
    if (context === undefined) {
      throw new Error("useAuthDispatch must be used within a AuthProvider");
    }
   
    return context;
  }

let storage = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : ''
let user =  storage.userDetails ? storage.userDetails : '';
let token = storage.token ? storage.token : '';
const inisialState = {
    userDetails : user,
    token : token ,
    loading: false,
    errorMessage: null,
}
const AuthReducer = (inisialState, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
          return {
            ...inisialState,
            loading: true
          };
        case "LOGIN_SUCCESS":
          return {
            ...inisialState,
            userDetails: action.payload.userDetails,
            token: action.payload.token,
            loading: false,
            errorMessage: null
          };
        case "LOGOUT":
          return {
            ...inisialState,
            userDetails: "",
            token: ""
          };
     
        case "LOGIN_ERROR":
          return {
            ...inisialState,
            loading: false,
            errorMessage: action.error
          };
     
        default:
          throw new Error(`Unhandled action type: ${action.type}`);
      }
}
export function AuthProviderContext({children}){
    const [user, dispatch] = useReducer(AuthReducer, inisialState)
    return (
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch} >
                { children }
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
}
