var flowRemoveTypes = require('flow-remove-types');

module.exports = function(source) {
  this.cacheable();
  return flowRemoveTypes(source).toString();
}
