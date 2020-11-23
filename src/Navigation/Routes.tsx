import React from 'react';
import Main from '../Components/Main';
import { Router, Switch, Route } from './Router';
import Other from '../Components/Other';

interface Props {
  
}

interface State {
    
}

class Routes extends React.Component<Props, State> {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/other" component={Other} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;