/**
 * @flow
 */
import {
  StackNavigator } from 'react-navigation';
import router from './src/router';

// eslint-disable-line
global.fetch = fetch;
global.fetch = function (uri, options, ...args) {
  return global.fetch(uri, options, ...args);
};

const navigator = StackNavigator(router);

export default navigator;
