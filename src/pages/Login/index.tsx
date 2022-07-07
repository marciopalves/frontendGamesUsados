import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import './Index.css';

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const onSubmit = (form: React.FormEvent<HTMLFormElement>) => {
        console.log('pegou');
        console.log(email);
        console.log(password);

        const isLogged = auth.signin(email, password);
        console.log("recebeu: " + isLogged);
        form.preventDefault();
      };

    return (
        <div className="user-login">
            <form onSubmit={onSubmit}>
                <h2 className="user-login__title">Login Games Usados</h2>

                <div className="user-login__form-control">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        id="email" 
                        type="text" 
                        value={email} 
                        onChange={ e => setEmail(e.target.value)} 
                        placeholder="Informe seu e-mail"
                    />
                </div>

                <div className="user-login__form-control">
                    <label htmlFor="password">Senha</label>    
                    <input 
                        id="password"
                        type="password" 
                        value={password} 
                        onChange={ e => setPassword(e.target.value)} 
                        placeholder="Informe sua senha"
                    />
                </div>                
                
                <button className="user-login__submit-button">
                        Entrar 
                </button>
            </form>
        </div>
    );
}