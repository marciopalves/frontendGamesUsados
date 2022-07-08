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
         <div className="user-login">
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
                     auth.signin(values.email, values.password);
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