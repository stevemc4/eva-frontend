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
import CandidateDetailModal from '@/components/Modal/CandidateDetail'
import VoteConfirmationModal from '@/components/Modal/VoteConfirmation'
import VoteConfirmedModal from '@/components/Modal/VoteConfirmed'

export default {
  name: 'App',
  components: {CandidateDetailModal, VoteConfirmationModal, VoteConfirmedModal}
}
</script>

<style>

</style>
