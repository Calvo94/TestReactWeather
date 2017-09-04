import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

var Nav = () => {
    return (
      <div>
        <h2>Nav component</h2>
        <IndexLink to ="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to = "/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to = "/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    );
}

module.exports = Nav;
