import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import AuthRouter from '../Routes/AuthRouter';
import { authLogin } from '../Actions/auth'
import JournalScreen from '../Components/Journal/JournalScreen';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { startLoadingNotes } from '../Actions/notes';

const AppRouter = () => {

  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
          console.log(user);
          if (user) {

            dispatch( authLogin(user.uid, user.email));

            setIsLoggedIn(true);

            //Esta linea permite aplicar la accion startLoadingNotes de nuestro store aplicando Redux.
            dispatch( startLoadingNotes(user.uid) );

          } else {
            // User is signed out
            setIsLoggedIn(false)
          }

          setChecking(false);

        });
        
  }, [dispatch, setChecking, setIsLoggedIn]);

    if(checking) {
      return (
          <h1> Wait...</h1>
      )
    }

    return (
        <Router>
        <div>
          <Switch>
            <PublicRoutes isAuthenticated= {isLoggedIn} path="/auth" component= {AuthRouter} />

            <PrivateRoutes exact isAuthenticated= {isLoggedIn} path="/" component= {JournalScreen} />

            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    )
}

export default AppRouter
