import { 
          getAuth, 
          signInWithPopup, 
          createUserWithEmailAndPassword, 
          signInWithEmailAndPassword,
          signOut,
          updateProfile
} from "firebase/auth";
import { provider } from '../Firebase/firebaseConfig'
import {types} from '../Types/type';
import { finishLoading, startLoading } from "./registerError";
import Swal from 'sweetalert2';
import { noteLogout } from "./notes";



export const startLoginEmailPassword = (email, password) => {
    return (dispacth) => {

      dispacth( startLoading())

      const auth = getAuth();  
      signInWithEmailAndPassword(auth, email, password)
              .then((result) => {

                dispacth( authLogin(result.user.uid, result.user.displayName) )

                dispacth( finishLoading())
              })
              .catch((error) => {
                console.log(error);

                Swal.fire('Error', error.message, error);
                dispacth( finishLoading())
              });    

    }
}

// Implementando el Login con Google.
export const startGoogleLogin = (email, password) => {
   
    return async (dispacth) => {

      const auth = getAuth();
            signInWithPopup(auth, provider)
              .then((result) => {
                console.log(result);
                dispacth(
                    authLogin(result.user.uid, result.user.email)
                )
              })
              .catch((error) => {
                console.log(error);
              });    
    }
}

export const startRegisterWithNameEmailPassword = ( email, password, name) => {
  
    return async ( dispacth ) => {

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          updateProfile(auth.currentUser, { displayName: name })
          .then(() => {
            // Profile updated!
            dispacth(
              authLogin(userCredential.uid, userCredential.displayName)
          )
          }).catch((error) => {
            // An error occurred
            // ...
          });
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          Swal.fire('Error', error.message, error);
        });
    }
}

// Usando los Types para la Autentificacion.
export const authLogin = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
})

export const startLogout = () => {

  return async ( dispatch ) => {
    const auth = getAuth();
     
      await signOut(auth).then(() => {
        
        dispatch( logout() );

        dispatch( noteLogout() );

      }).catch((error) => {
        // An error happened.
        Swal.fire('Error', error.message, error);
      });
  }
}

export const logout = () => ({
    type: types.logout
})