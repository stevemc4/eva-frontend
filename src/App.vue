<template>
  <div>
    <navigation v-if="$route.name != 'Login' && $route.path.indexOf('installer') == -1"/>
    <router-view/>
  </div>
</template>

<script>
import '@/assets/styles/main.css'
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: {Navigation}
}
</script>

<style>

</style>
