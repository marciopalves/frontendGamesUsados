import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Login } from "../../types/Login";
//import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

    const [login, setLogin] = useState<Login| null>(null);
    const api = useApi();

    const signin = async ( email:string, password:string) => {
        const data = await api.signin(email, password)
        console.log(data);        
        //if(data.user) && data={.token}{
        //if(data.usertype = 'ADMIN' && data.token){
        if(data.token){  
            //setUser(data.User);
            //setLogin(token: data.token, usertype: data.usertype, type: data.usertype);
            return true;
        }
        return false;
    }

    const signout = async () =>{
        //await api.logout();
        setLogin(null);
    }

    return (
        <AuthContext.Provider value={{ login, signin, signout }}>
           {children}
        </AuthContext.Provider>
    );
}