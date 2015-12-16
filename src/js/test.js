'use strict';

/**
 * webpack-es6 - test.jsx
 * @author llaine
 * @date 14/12/2015
 */

import React from 'react';

export default class Hello extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <h1> Hello {this.props.name} !</h1>
  }
}

