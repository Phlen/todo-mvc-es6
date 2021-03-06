// Generated by CoffeeScript 1.10.0

/**
 * 
 * @date 2016-01-29 15:38:50
 * @author vfasky <vfasky@gmail.com>
 * @link http://vfasky.com
 */
'use strict';
var $, App, Template, app, ref;

ref = require('mcoreApp'), App = ref.App, Template = ref.Template;

$ = require('jquery');

Template.formatters.itemLen = function(todos) {
  var len;
  len = 0;
  $.each(todos, function(k, v) {
    if (v.visibility !== 'completed') {
      return len++;
    }
  });
  if (len < 2) {
    return len + " item";
  }
  return len + " items";
};

Template.formatters.completedLen = function(todos) {
  var len;
  len = 0;
  $.each(todos, function(k, v) {
    if (v.visibility === 'completed') {
      return len++;
    }
  });
  return len;
};

app = new App($('body'));

app.route('/:selected', require('../view/index')).route('*', require('../view/index'));

app.run();
