<template>
  <div>
    <navigation v-if="$route.name != 'Login' && $route.path.indexOf('installer') == -1"/>
    <router-view/>
    <candidate-detail-modal/>
    <vote-confirmation-modal/>
  </div>
</template>

<script>
import '@/assets/styles/main.css'
import Navigation from '@/components/Navigation'
import CandidateDetailModal from '@/components/CandidateDetailModal'
import VoteConfirmationModal from '@/components/VoteConfirmationModal'

export default {
  name: 'App',
  components: {Navigation, CandidateDetailModal, VoteConfirmationModal}
}
</script>

<style>

</style>
