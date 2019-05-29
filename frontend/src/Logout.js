import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as auth from './auth.js'

export default class Logout extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {        
        auth.logout();
        this.context.router.history.push('/login/');
    }
    
    render() {
        return (
            <div></div>
        );
    }
};

Logout.contextTypes = {
    router: PropTypes.object.isRequired
};