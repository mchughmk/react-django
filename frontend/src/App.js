import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CountriesContainer from './countries/CountriesContainer.js';
import StatesContainer from './states/StatesContainer.js';
import * as auth from './auth.js';
import './App.css';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {country: ''};
        this.changeCountry = this.changeCountry.bind(this);
    }

    changeCountry(newCountry) {
        this.setState({country: newCountry});
    }

    componentWillMount() {
        if (!auth.loggedIn()) {
            this.context.router.history.push('/login/');
        }
    }

    render() {
        if (!auth.loggedIn()) {
            return (<div></div>);
        }
        return (
            <MuiThemeProvider>
                <div>
                    <CountriesContainer onChange={this.changeCountry} />
                    <StatesContainer country={this.state.country} />
                </div>
            </MuiThemeProvider>
        );
    }
}

App.contextTypes = {
    router: PropTypes.object.isRequired
}

export default App;
