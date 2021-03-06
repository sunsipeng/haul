/**
 * Copyright 2017-present, Callstack.
 * All rights reserved.
 * 
 * @flow
 */

require('babel-register')({
  ignore: /node_modules(?!\/haul)/,
  retainLines: true,
  sourceMaps: 'inline',
});

require('./cliEntry')(process.argv.slice(2));
