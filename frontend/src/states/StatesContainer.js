import React, { Component } from 'react';
import States from './States.js';
import * as auth from '../auth.js';

export default class StatesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            states: []
        };

        this.getStatesFromApiAsync = this.getStatesFromApiAsync.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getStatesFromApiAsync(country) {
        if (country === '') {
            return new Promise((resolve, reject) => resolve([]));
        }
        return fetch('http://localhost:8000/api/countries/' + country + '/states/', {
                headers: {
                    'Authorization': 'Token ' + auth.retrieveToken()
                }
            })
            .then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
    }

    handleChange(event, index, value) {
        this.setState({value: value});
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.states === nextState.states && this.state.value === nextState.value) {
            return false;
        } else {
            return true;
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.country !== nextProps.country) {
            this.getStatesFromApiAsync(nextProps.country)
                .then((responseJson) => {
                    this.setState({states: responseJson});
                });
        }
    }

    render() {
        return <States states={this.state.states} value={this.state.value} onChange={this.handleChange} />;
    }
}