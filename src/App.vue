<template>
  <div>
    <router-view/>
    <candidate-detail-modal/>
    <vote-confirmation-modal/>
    <vote-confirmed-modal/>
  </div>
</template>

<script>
import '@/assets/styles/main.css'
import CandidateDetailModal from '@/components/CandidateDetailModal'
import VoteConfirmationModal from '@/components/VoteConfirmationModal'
import VoteConfirmedModal from '@/components/VoteConfirmedModal'

export default {
  name: 'App',
  components: {CandidateDetailModal, VoteConfirmationModal, VoteConfirmedModal}
}
</script>

<style>

</style>
