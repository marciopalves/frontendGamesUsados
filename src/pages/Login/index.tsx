import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, FormikHelpers } from "formik";
import './Index.css';

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    interface Values {
      password: string;
      email: string;
    }

    return (
         <div>
               <h1>Signup</h1>
               <Formik
                 initialValues={{
                   password: '',
                   email: '',
                 }}
                 onSubmit={(
                   values: Values,
                   { setSubmitting }: FormikHelpers<Values>
                 ) => {
                   setTimeout(() => {
                        console.log(values.email);

                        let body = {
                            email: values.email,
                            password: values.password
                        };

                        let stringBody = JSON.stringify(body);
                        console.log(stringBody);

                        let token = "";

//                         fetch("http://localhost:8080/platforms").then(resp => resp.json())
                        fetch("http://localhost:8080/auth", {
                            method: 'POST',
                            body: stringBody,
                            headers: {
                                "Authorization": `Bearer: ${token}`,
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*'
                            }
                        }).then(resp => resp.json())
                        .then(resp => console.log(resp));

//                         auth.signin(values.email, values.password);
//                      alert(JSON.stringify(values, null, 2));
                     setSubmitting(false);
                   }, 500);
                 }}
               >
                 <Form>
                 <h2 className="user-login__title">Login Games Usados</h2>
                   <div className="user-login__form-control">
                                       <label htmlFor="email">E-mail</label>
                   <Field
                     id="email"
                     name="email"
                     placeholder="seuemail@email.com"
                     type="email"
                   />
                    </div>


                    <div className="user-login__form-control">
                                       <label htmlFor="password">Senha</label>
                   <Field id="password" name="password" placeholder="John" />
                    </div>

                   <button className="user-login__submit-button"
                   type="submit">Entrar</button>
                 </Form>
               </Formik>
             </div>
    );
}