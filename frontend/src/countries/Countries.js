import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class Countries extends Component {
    render() {
        this.props.countries.sort(function(a, b) {
            if (a.name === b.name) return 0;
            return a.name < b.name ? -1 : 1;
        });
        var countryOptions = this.props.countries.map(function(country) {
            var key = "country_option_" + country.code;
            // return <option key={key} value={country.code}>{country.name}</option>;
            return <MenuItem key={key} value={country.code} primaryText={country.name} />;
        });

        return (
            <SelectField
                floatingLabelText="Country"
                value={this.props.value}
                onChange={this.props.onChange}>
                <MenuItem value={null} primaryText="" />
                {countryOptions}
            </SelectField>
        );
    }
}