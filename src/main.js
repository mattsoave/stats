Vue.config.devtools = true;


Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
});
let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

