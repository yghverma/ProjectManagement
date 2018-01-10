import React , { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import UserRegistration from './UserRegistration';
import InputAdornments from './login';

class Routes extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path ='/userRegistration' component ={UserRegistration} />
                    <Route exact path ='/login' component ={InputAdornments} />
                </Switch>
            </div>
        )
    }
}
export default Routes;