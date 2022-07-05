import { createContext } from 'react';
import { Login } from '../../types/Login';

export type AuthContextType = {
    login:  Login | null;
    signin:(email:string, password: string) => Promise<boolean>;
    signout:() => void;
}

export const AuthContext = createContext<AuthContextType>(null!);