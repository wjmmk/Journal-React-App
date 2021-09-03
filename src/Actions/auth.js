import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { provider } from '../Firebase/firebaseConfig'
import types from '../Types/type';

export const startLoginEmailPassword = (email, password) => {
    return (dispacth) => {
      const auth = getAuth();  
      signInWithEmailAndPassword(auth, email, password)
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

export const startRegisterWithNameEmailPassword = (name, email, password) => {
  
    return async ( dispacth ) => {

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
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