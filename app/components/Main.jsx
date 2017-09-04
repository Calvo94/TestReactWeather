import React, { Component } from 'react';
import Nav from 'Nav';

var Main = (props) => {
    return (
      <div>
        <Nav/>
        <h2>Main component</h2>
        {props.children}
      </div>
    );
}

module.exports = Main;
