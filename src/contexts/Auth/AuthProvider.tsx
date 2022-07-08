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
        return data;
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