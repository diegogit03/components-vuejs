<template>
  <div :class="$style.contador">
    <h1>Clicado {{ contador }} vezes</h1>
    <button @click="incrementar">Incrementar</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contador: 0
    }
  },
  methods: {
    incrementar () {
      this.contador++
    }
  },
  created () {
    console.log('CSS modules ', this.$style)
  }
}
</script>

<style module>
  .contador {
    border: 1px solid red;
  }
</style>
