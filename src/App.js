import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from './components/Login';

function App(){
    return (
        <div className = "App">
            <BrowserRouter>
                <Switch>
                    <Route><Login/></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
        


}

export default App;