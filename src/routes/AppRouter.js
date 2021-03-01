import { React, useEffect } from 'react';
import { BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { LoginView } from '../views/LoginView';
import { SignUpView } from '../views/SignUpView';
import { NotFound } from '../views/NotFound';
import { TodoScreen } from "../components/todo/TodoScreen";
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';



export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking , uid } = useSelector( state => state.auth)

    useEffect(() => {

        dispatch( startChecking() )

    }, [dispatch])

    if( checking ) {
        return(<div style={{"width":'100%', "height":"100vh", "display": 'flex', "justifyContent":"center", "alignItems":"center" }}>
            <h2>Loading...</h2>
        </div>)
    }


    return (
        <Router>
           <div>
               <Switch>
                    <Route 
                        exact 
                        path="/login" 
                        component={ LoginView }
                        isAuthenticated={ !!uid }
                    />
                    <Route 
                        exact 
                        path="/signup" 
                        component={ SignUpView }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ TodoScreen } 
                        isAuthenticated={ !!uid }
                    />

                    <Redirect to="/" />
                    

               </Switch>
            </div>    
        </Router>
    )
}
