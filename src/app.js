'use strict'

import React from 'react';

var h1 = React.createElement('h1', null, 'Título do meu h1 - Hello World!');
var Title = React.createClass({
  render: function() {
    return h1;
  }
});

export default Title
