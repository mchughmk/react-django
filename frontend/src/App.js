import React, { Component } from 'react';
import CountriesContainer from './countries/CountriesContainer.js';
import StatesContainer from './states/StatesContainer.js';
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

    render() {
        return (
            <div>
                <CountriesContainer onChange={this.changeCountry} />
                <StatesContainer country={this.state.country} />
            </div>
        );
    }
}

export default App;
