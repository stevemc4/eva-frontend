<template>
  <div>
    <navigation v-if="$route.name != 'Login' && $route.path.indexOf('installer') == -1"/>
    <router-view/>
    <candidate-detail-modal/>
  </div>
</template>

<script>
import '@/assets/styles/main.css'
import Navigation from '@/components/Navigation'
import CandidateDetailModal from '@/components/CandidateDetailModal'

export default {
  name: 'App',
  components: {Navigation, CandidateDetailModal}
}
</script>

<style>

</style>
