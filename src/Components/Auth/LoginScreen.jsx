import React from 'react'
import { Link } from 'react-router-dom';

const LoginScreen = () => {
    return (
       <div className="">
         <div className="journal__sidebar-navbar">
               <h3 className="auth__title">Login</h3>
               <i className="fas fa-users"></i>
            </div>

           <form>
               <input 
                   className="auth__input"
                   type="text"
                   placeholder="e-mail"
                   name="email"
               />

                <input 
                   className="auth__input"
                   type="password"
                   placeholder="password"
                   name="password"
               />

               <button type="submit"
                       className="btn btn-primary btn-block"
                >
                   Submit
               </button>
               
               <div className="auth__social-networks">
                <p> Login with social networks</p>

                   <div className="google-btn">
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
