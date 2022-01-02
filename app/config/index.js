const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const config = yaml.load(fs.readFileSync(path.join(__dirname, '/config.yaml')));
const logger = yaml.load(fs.readFileSync(path.join(__dirname, '/logger.yaml')));
module.exports = {
  getLoggerConfig () {
    return logger;
  },

  getRedisConfig () {
    return config.redis;
  },

  getAuthConfig () {
    return config.auth;
  }
};
