import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap'
import ErrorModal from 'ErrorModal';

class  Weather extends Component{
  state={
      isLoading:false,
      errorMessage: undefined
    }
  handleSearch(location) {
    var that = this;
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp - 273.15,
        isLoading: false,
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  }

  render() {
    var {isLoading, location, temp, errorMessage}= this.state;

    function renderMessage () {
      if(isLoading) {
      } else if ( temp && location) {
        return <h3 className="text-center">Fetching weather...</h3>
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    function renderError() {
      if(typeof (errorMessage) === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }



    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
}

module.exports = Weather;
