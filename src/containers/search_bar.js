import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {

  state = {
    term: ''
  };

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    });
  }

  render(){
    return(
        <form className="input-group" onSubmit={ this.handleFormSubmit }>
          <input
            placeholder="Get a five day forecast for cities"
            className="form-control"
            value={ this.state.term }
            onChange={ this.onInputChange }/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
    );
  };

};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
