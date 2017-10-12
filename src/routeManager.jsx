import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

class RouteManager extends Component {

    constructor(props) {
        super(props);
        this.mapRoutes = this.mapRoutes.bind(this);
    }

    render() {
        return (
            <Switch>
                {this.props.tabs ? this.props.tabs.map(this.mapRoutes) : null}
            </Switch>
        );
    }


    mapRoutes(value, index) {
        if (value.redirect) {
            return <Route
                path={"/" + value.route}
                exact={value.route.length <= 1}
                key={index}
                render={() =>
                    (<Redirect to={value.redirect} />)
                }
            />
        }
        const Component = value.component;
        return <Route
            path={"/" + value.route}
            exact={value.route.length <= 1}
            render={() => { return <Component /> }}
            key={index}
        />
    }
}

export default RouteManager;
