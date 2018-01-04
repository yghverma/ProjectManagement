import React , { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import UserRegistration from './UserRegistration';

class Routes extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path ='/userRegistration' component ={UserRegistration} />
                </Switch>
            </div>
        )
    }
}
export default Routes;