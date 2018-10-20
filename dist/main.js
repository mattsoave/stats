"use strict";

var a = ["a", "b", "c"];
Vue.config.devtools = true;

for (var _i = 0; _i < a.length; _i++) {
  var char = a[_i];
  console.log(char);
}

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
