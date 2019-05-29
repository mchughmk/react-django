import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class States extends Component {
    render() {
        this.props.states.sort(function(a, b) {
            if (a.name === b.name) return 0;
            return a.name < b.name ? -1 : 1;
        });
        var stateOptions = this.props.states.map(function(state) {
            var key = "state_option_" + state.code;
            return <MenuItem key={key} value={state.code} primaryText={state.name} />;
        });

        return (
            <SelectField
                floatingLabelText="State"
                value={this.props.value}
                onChange={this.props.onChange}>
                <MenuItem value={null} primaryText="" />
                {stateOptions}
            </SelectField>
        );
    }
}