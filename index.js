/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-holderjs',

  included: function(app){
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/holderjs/holder.min.js');
  }
};
