<template>
  <div>
    <navigation v-if="$route.name != 'Login' && $route.path.indexOf('installer') == -1 && $route.name != '401 Unauthorized'"/>
    <router-view/>
    <candidate-detail-modal/>
    <vote-confirmation-modal/>
    <vote-confirmed-modal/>
  </div>
</template>

<script>
import '@/assets/styles/main.css'
import Navigation from '@/components/Navigation'
import CandidateDetailModal from '@/components/CandidateDetailModal'
import VoteConfirmationModal from '@/components/VoteConfirmationModal'
import VoteConfirmedModal from '@/components/VoteConfirmedModal'

export default {
  name: 'App',
  components: {Navigation, CandidateDetailModal, VoteConfirmationModal, VoteConfirmedModal}
}
</script>

<style>

</style>
