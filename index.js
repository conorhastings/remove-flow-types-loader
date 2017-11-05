const flowRemoveTypes = require('flow-remove-types');
const loaderUtils = require('loader-utils');

module.exports = function (source) {
  this.cacheable();

  const options = Object.assign({}, loaderUtils.getOptions(this));

  return flowRemoveTypes(source, options).toString();
};
