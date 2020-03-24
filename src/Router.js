import React from 'react'
import {
    BrowserRouter as Brow,
    Route,
    Switch
} from 'react-router-dom'
import Homepage from "./pages/Home";
import Login from "./pages/auth/Login"

export default function Router() {
    return (
        <Brow>
            <Switch>
                <Route exact path='/'>
                    Hello World!!
                </Route>

                <Route exact path='/homepage'>
                    <Homepage></Homepage>
                </Route>

                <Route exact path="/login" render={props => <Login {...props} />} />
            </Switch>
        </Brow>
    )
}