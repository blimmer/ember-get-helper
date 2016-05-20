/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-get-helper',

  treeFor: function() {
    return this._super.treeFor.apply(this, arguments);
  }
};
