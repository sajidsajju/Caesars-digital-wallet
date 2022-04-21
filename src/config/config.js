const merge = require('lodash/merge');

const config = {
  /*all: {
    baseURL: 'http://localhost:8181/api/v1/',
    timeout: 5000,
  },*/
  local: {
    apiBaseURL: 'http://localhost:8181/api/v1/',
    timeout: 5000,
    baseDirecory: '',
  },
  dev: {
    apiBaseURL: 'http://localhost:8181/api/v1/',
    timeout: 5000,
    baseDirecory: 'digitalwallet',
  },
  qa: {
    apiBaseURL: 'http://localhost:8181/api/v2/',
    timeout: 5000,
    baseDirecory: 'qa',
  },
  preprod: {
    apiBaseURL: 'http://localhost:8181/api/v1/',
    timeout: 5000,
    baseDirecory: 'digitalwallet',
  },
  prod: {
    apiBaseURL: 'http://localhost:8181/api/v1/',
    timeout: 5000,
    baseDirecory: '',
  },

  rewards: {
    title: 'Reward credit history',
  },
  cash: {
    title: 'Cash Card',
  },
  carousel: {
    creditLabel: 'Activate this card when <br /> you fund your account',
  },
};

module.exports = merge(config[process.env.REACT_APP_ENV]);
