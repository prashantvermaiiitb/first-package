/**
 * Entry point for the package.
 */
const add = require('./add');
const logger = require('./logger');

const mathlib1 = { add, logger };
module.exports = mathlib1;
