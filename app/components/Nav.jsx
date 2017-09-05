import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends Component {
  onSearch(e){
    e.preventDefault();
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if(location.length >0)
    {
      this.refs.search.value='';
      window.location.hash= '#/?location=' + encodedLocation;
    }
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
          <li>
            <IndexLink to ="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
          </li>
          <li>
            <Link to = "/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
          </li>
          <li>
            <Link to = "/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
          </li>
        </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch.bind(this)}>
            <ul className="menu">
              <li>
                <input type="text" placeholder="Search Weather" ref="search" />
              </li>
              <li>
                <input type="submit" className="button" value="GetWeather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = Nav;
