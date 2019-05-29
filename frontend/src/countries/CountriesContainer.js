import React, { Component } from 'react';
import Countries from './Countries.js';
import * as auth from '../auth.js';

export default class CountriesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            countries: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.getCountriesFromApiAsync = this.getCountriesFromApiAsync.bind(this);
    }

    getCountriesFromApiAsync() {
        return fetch('http://localhost:8000/api/countries/', {
                headers: {
                    'Authorization': 'Token ' + auth.retrieveToken()
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({countries: responseJson});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    handleChange(event, index, value) {
        this.setState({value: value});
        this.props.onChange(value);
    }

    componentDidMount(nextProps, nextState) {
        this.getCountriesFromApiAsync();
    }

    render() {
        return <Countries onChange={this.handleChange} value={this.state.value} countries={this.state.countries} />;
    }
}