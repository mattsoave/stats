let a = ["a", "b", "c"];
Vue.config.devtools = true;

for (let char of a) {
	console.log(char);
}

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});