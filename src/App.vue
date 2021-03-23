<template>
  <div>
    <app-header/>
    <app-contador/>
  </div>
</template>

<script>
import AppContador from './AppContador'
import AppHeader from './AppHeader'

export default {
  components: {
    'app-contador': AppContador,
    AppHeader
  }
}
</script>
