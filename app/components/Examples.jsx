import React, { Component } from 'react';
import {Link} from 'react-router';

var Examples = () => {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example location to try out:</p>
        <ol>
          <li>
            <Link to ='/?location=Philadelphia'>Philadelphia, PA</Link>
          </li>
          <li>
            <Link to ='/?location=Rio'>Rio, Brazil</Link>
          </li>
        </ol>
      </div>
    )
}

module.exports = Examples;
