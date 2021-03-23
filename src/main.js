import Vue from 'vue'

const data = {
  titulo: 'Vue Component',
  contador: 0
}

// Vue.component('dhom-component', {
//   data: function() {
//     return data
//   },
//   methods: {
//     incrementar() {
//       this.contador++;
//     }
//   },
//   template:`
//     <div>
//       <h1>{{ titulo }}</h1>
//       <button @click="incrementar">Clicado {{ contador }}</button>
//     <div>
//   `
// })

const dhomComponent = {
  data: function () {
    return data
  },
  methods: {
    incrementar () {
      this.contador++
    }
  },
  template: `
    <div>
      <h1>{{ titulo }}</h1>
      <button @click="incrementar">Clicado {{ contador }}</button>
    <div>
  `
}

const vm1 = new Vue({
  el: '#app',
  components: {
    'dhom-component': dhomComponent
  }
})

const vm2 = new Vue({
  el: '#app2',
  components: {
    'dhom-component': dhomComponent
  }
})

vm1.$mount()
vm2.$mount()
