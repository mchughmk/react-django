import React, { Component } from 'react';

export default class States extends Component {
    render() {
        this.props.states.sort(function(a, b) {
            if (a.name === b.name) return 0;
            return a.name < b.name ? -1 : 1;
        });
        var stateOptions = this.props.states.map(function(state) {
            var key = "state_option_" + state.code
            return <option key={key} value={state.code}>{state.name}</option>;
        });

        return (
            <select>{stateOptions}</select>
        );
    }
}