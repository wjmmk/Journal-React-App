import React from 'react'
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
    return (
        <div className="">
            <div className="journal__sidebar-navbar">
               <h3 className="auth__title">Register</h3>
               <i className="fas fa-user-plus"></i>
            </div>
           <form>
               <input 
                   className="auth__input"
                   type="text"
                   placeholder="name"
                   name="name"
                />

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

                <input 
                   className="auth__input"
                   type="password"
                   placeholder="confirm"
                   name="confirm"
                />          

               <button type="submit"
                       className="btn btn-primary btn-block mb-1"
                >
                   Submit
               </button>
               
             <Link to="/auth/login"
                   className= "link"
             >
                Already register?
             </Link>  
           </form>
       </div> 
    )
}

export default RegisterScreen
