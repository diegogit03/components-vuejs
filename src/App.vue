<template>
  <div>
    <app-header/>
    <app-contador/>
  </div>
</template>

<script>
import AppContador from './components/contador/AppContador'
import AppHeader from './components/shared/AppHeader'

export default {
  components: {
    'app-contador': AppContador,
    AppHeader
  }
}
</script>
