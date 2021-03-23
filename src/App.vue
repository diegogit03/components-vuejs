<template>
  <div>
    <app-header/>
    <contador-info/>
    <app-contador/>
  </div>
</template>

<script>
import AppHeader from './components/shared/AppHeader'
import AppContador from './components/contador/AppContador'
import ContadorInfo from './components/contador/ContadorInfo'

export default {
  components: {
    'app-contador': AppContador,
    AppHeader,
    ContadorInfo
  }
}
</script>
