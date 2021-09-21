import React from 'react'
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { registerError, removeError } from '../../Actions/registerError';
import { startRegisterWithNameEmailPassword } from '../../Actions/auth';

const RegisterScreen = () => {

   const dispatch = useDispatch();
   const {msgError} = useSelector( state => state.register);

   console.log(msgError)


    // Establezco los valores de los campos en duro del formulario por medio del Hook useForm
    const [formValue, handleInputChange] = useForm({
      name: 'Jose',
      email: 'Josel24@hotmail.com',
      password: '123456',
      password2: '123456'
  })

  const {name, email, password, password2} = formValue;

  // Se habilita el boton submit del Formulario
  const handleRegister = (e) => {
      e.preventDefault()

      if( isFormValid()) {
         dispatch( startRegisterWithNameEmailPassword( email, password, name ))
      }
  }

  const isFormValid = () => {
      if( name.trim().length === 0) {
          dispatch(registerError('Name is Required'))
         return false;
      }  else if(!validator.isEmail( email )) {
          dispatch(registerError('Email is not Valid'))
         return false;
      }  else if( password !== password2 || password.length < 6) {
          dispatch(registerError('Password should be at least 6 characters and match each other'))
         return false;
      }

      dispatch(removeError())
      return true;
  }


    return (
        <div className="">
            <div className="journal__sidebar-navbar">
               <h3 className="auth__title">Register</h3>
               <i className="fas fa-user-plus"></i>
            </div>
           <form 
               onSubmit= {handleRegister}
               className= "animate__animated animate__fadeIn animate__faster"
            >
            
            {
               msgError && (

                  <div className="auth__alert-error">
                     {msgError}
                  </div>

               )
            }

               <input 
                   className="auth__input"
                   type="text"
                   placeholder="name"
                   name="name"
                   value={name}
                   onChange= { handleInputChange }
                />

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

                <input 
                   className="auth__input"
                   type="password"
                   placeholder="confirm"
                   name="confirm"
                   value={password2}
                   onChange= { handleInputChange }
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
