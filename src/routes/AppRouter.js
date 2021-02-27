import React from 'react';
import { BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { LoginView } from '../views/LoginView';
import { SignUpView } from '../views/SignUpView';
import { NotFound } from '../views/NotFound';
import { TodoScreen } from "../components/todo/TodoScreen";


export const AppRouter = () => {
    return (
        <Router>
           <div>
               <Switch>
                   <Route exact path="/" component={ TodoScreen } />
                   <Route exact path="/login" component={ LoginView } />
                   <Route exact path="/signup" component={ SignUpView } />
                   <Route component={ NotFound } />
               </Switch>
            </div>    
        </Router>
    )
}
