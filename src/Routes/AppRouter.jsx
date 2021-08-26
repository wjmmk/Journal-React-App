import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AuthRouter from '../Routes/AuthRouter';
import JournalScreen from '../Components/Journal/JournalScreen';

const AppRouter = () => {
    return (
        <Router>
        <div>
          <Switch>
            <Route path="/auth" component= {AuthRouter} />
            <Route exact path="/" component= {JournalScreen} />

            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    )
}

export default AppRouter
