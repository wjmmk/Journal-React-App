import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from '../Firebase/firebaseConfig'
import types from '../Types/type';

export const startLoginEmailPassword = (email, password) => {
    return (dispacth) => {
        setTimeout(() => {
            dispacth( authLogin(123, 'Maria'))
        }, 2000);
    }
}

// Implementando el Login con Google.
export const startGoogleLogin = (email, password) => {
   
  const auth = getAuth();
    return async (dispacth) => {

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

export const startRegisterWithNameEmailPassword = () => {
  const auth = getAuth();
    return ( dispacth ) => {

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