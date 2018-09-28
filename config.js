'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1/bloom';
exports.TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL || 'mongodb://127.0.0.1/test-logs-app';
  exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = 'rosebud';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';