import React from 'react'
import {
    BrowserRouter as Brow,
    Route,
    Switch
} from 'react-router-dom'
import Outlet from "./components/homepage/HomepageOutlet";
import Login from "./components/"

export default function Router() {
    return (
        <Brow>
            <Switch>
                <Route exact path='/'>
                    Hello World!!
                </Route>

                <Route path='/outlet'>
                    <Outlet></Outlet>
                </Route>

                <Route exact path="/login" render={props => <Login {...props} />} />
            </Switch>
        </Brow>
    )
}