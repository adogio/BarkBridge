import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import propTypes from 'prop-types';

class BkBridge extends Component {

    constructor(props) {
        super(props);
        this.mapRoutes = this.mapRoutes.bind(this);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        {this.props.tabs ? this.props.tabs.map(this.mapRoutes) : null}
                    </Switch>
                </BrowserRouter>
            </div>
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
        } else if (value.component) {
            const Component = value.component;
            return <Route
                path={"/" + value.route}
                exact={value.route.length <= 1}
                render={() => {
                    return <Component pre={value.route} />
                }}
                key={index}
            />
        } else {
            return null;
        }
    }
}

BkBridge.propTypes = {
    tabs: propTypes.arrayOf(propTypes.shape({
        route: propTypes.string.isRequired,
        redirect: propTypes.object,
        component: propTypes.object
    })).isRequired
}

export default BkBridge;
