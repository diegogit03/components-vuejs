import Vue from 'vue'

const data = {
  titulo: 'Vue Component',
  contador: 0
}

Vue.component('dhom-component', {
  data: function() {
    return data
  },
  methods: {
    incrementar() {
      this.contador++;
    }
  },
  template:`
    <div>
      <h1>{{ titulo }}</h1>
      <button @click="incrementar">Clicado {{ contador }}</button>
    <div>
  `
})


new Vue({
  el: '#app'
})
