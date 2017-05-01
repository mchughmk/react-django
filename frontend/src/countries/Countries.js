import React, { Component } from 'react';

export default class Countries extends Component {
    render() {
        this.props.countries.sort(function(a, b) {
            if (a.name === b.name) return 0;
            return a.name < b.name ? -1 : 1;
        });
        var countryOptions = this.props.countries.map(function(country) {
            var key = "country_option_" + country.code
            return <option key={key} value={country.code}>{country.name}</option>;
        });

        return (
            <select onChange={this.props.onChange}>
                <option value=""></option>
                {countryOptions}
            </select>
        );
    }
}