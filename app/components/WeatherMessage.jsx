import React, { Component } from 'react';

var WeatherMessage = ({ temp, location }) => {
    return(
    <h3 className="text-center">It's it {temp} in {location}</h3>
  )
}

module.exports = WeatherMessage;
