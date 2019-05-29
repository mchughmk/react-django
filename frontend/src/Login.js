import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as auth from './auth.js'

export default class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        var username = this.refs.username.value
        var pass = this.refs.pass.value

        auth.login(username, pass, (loggedIn) => {
            if (loggedIn) {
                const {router} = this.context;
                router.history.push('/');
            }
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="username" ref="username" />
                <input type="password" placeholder="password" ref="pass" />
                <input type="submit" />
            </form>
        )    
    }
};

Login.contextTypes = {
    router: PropTypes.object.isRequired
};