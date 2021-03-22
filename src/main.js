import Vue from 'vue'

Vue.component('dhom-component', {
  data: function() {
    return {
      titulo: 'Diego'
    }
  },
  template: '<h1>{{titulo}}</h1>s'
})

new Vue({
  el: '#app'
})
