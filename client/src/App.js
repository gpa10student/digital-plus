import React, { Fragment, useState } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { toast } from "react-toastify";

toast.configure();


function App(){

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const setAuth = boolean => {
        setIsAuthenticated(boolean);
    }

    return (
        <Fragment>
            <div className = "App">
                <BrowserRouter>
                    <Switch>
                        <Route render={props =>
                            !isAuthenticated ? (
                                <Login {...props} setAuth={setAuth} />
                            ) : (<Redirect to="/Dashboard"/>)
                        }></Route>
                        <Route exact path="/Dashboard" render={props =>
                            isAuthenticated ? ( <Dashboard {...props} setAuth={setAuth}/>
                            ): (<Redirect to='/'/> )}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </Fragment>
    )
        


}

export default App;