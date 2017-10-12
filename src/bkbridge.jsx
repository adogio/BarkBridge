import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Structure from './component/structure';
import RouteManager from './component/routeManager';
import "./index.css";

class DogUIISUCSSA extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route
                        path="/"
                        component={
                            (routes) =>
                                <Structure
                                    init={this.props}
                                    routes={routes}>
                                    <RouteManager tabs={this.props.tabs} />
                                </Structure>
                        }
                    />
                </BrowserRouter>
            </div>
        );
    }
}

export default DogUIISUCSSA;
