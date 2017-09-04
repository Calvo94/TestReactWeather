import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap'

class  Weather extends Component{
  state={
      isLoading:false
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
    }, function (errorMessage) {
      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  }
  render() {
    var {isLoading, location, temp}= this.state;

    function renderMessage () {
      if(isLoading) {
        return <h3>Fetching weather...</h3>
      } else if ( temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        {renderMessage()}
      </div>
    )
  }
}

module.exports = Weather;
