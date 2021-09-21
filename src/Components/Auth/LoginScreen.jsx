import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import env from '@beam-australia/react-env'
import { startGoogleLogin, startLoginEmailPassword } from '../../Actions/auth';
import useForm from '../../Hooks/useForm';


const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector( state => state.register.loading)
    console.log(loading)

    // Establezco los valores de los campos en duro del formulario por medio del Hook useForm
    const [formValue, handleInputChange] = useForm({
        name: process.env.REACT_APP_name,
        email: process.env.REACT_APP_email,
        password: process.env.REACT_APP_password
    })

    const { email, password, name} = formValue;

    // Se habilita el boton submit del Formulario
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email, password)
        dispatch(startLoginEmailPassword(email, password, name))
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault()
        dispatch(startGoogleLogin(email, password));
    }

    return (
       <div className="">
         <div className="journal__sidebar-navbar">
               <h3 className="auth__title">Login</h3>
               <i className="fas fa-users"></i>
            </div>

           <form 
                onSubmit= { handleLogin }
                className= "animate__animated animate__fadeIn animate__faster"
           >
               <input 
                   className="auth__input"
                   type="text"
                   placeholder="e-mail"
                   name="email"
                   value={email}
                   onChange= { handleInputChange }
               />

                <input 
                   className="auth__input"
                   type="password"
                   placeholder="password"
                   name="password"
                   value={password}
                   onChange= { handleInputChange }
               />

               <button type="submit"
                       className="btn btn-primary btn-block"
                       disabled={ loading }
                >
                   Submit
               </button>
               
               <div className="auth__social-networks">
                <p> Login with social networks</p>

                   <div 
                        className="google-btn"
                        onClick= {handleGoogleLogin}
                   >
                   
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
               </div>
             <Link to="/auth/register"
                   className= "link">
                Create new Account
             </Link>  
           </form>
       </div> 
    )
}

export default LoginScreen
