import React, { Component } from 'react';

var About = () => {
    return (
      <div>
        <h1 className="text-center">About component</h1>
        <p>This is a weather application build on React. I have built this following the complete React Web Developer Course. </p>
        <p>Here are some of the tools I used:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
          </li>
          <li>
            <a href="http://openWeatherMap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
          </li>
        </ul>
      </div>
    )
}

module.exports = About;
