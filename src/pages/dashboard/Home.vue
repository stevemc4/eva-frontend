<template>
        <div id="page" class="p-8" :class="{'mt-8 opacity-0': !show, 'mt-0 opacity-100': show}">
            <span class="block text-4xl">Sekilas</span>
            <div class="flex mt-4">
                
            </div>
        </div>
</template>

<script>
import Layout from '@/components/DashboardLayout'

export default {
    name: 'DashboardHome',
    components: {Layout},
    data(){
        return{
            show: false,
            voterData: {},
            candidates: [],
            startShowingCandidates: false,
            baseURL: ''
        }
    },
    async mounted(){
        // this.baseURL = `http://${window.location.hostname}:4200/static/img/candidates/`
        // await this.getVoterData()
        // await this.getCandidatesData()
    },
    methods: {
        async getVoterData(){
            let data = await this.$axios.get('/voter/this')
            this.voterData = data.data
            return 1
        },
        async getCandidatesData(){
            let data = await this.$axios.get('/candidates')
            this.candidates = data.data
            return 1
        }
    },
    beforeRouteLeave(to, from, next)
    {
        if(to.name == 'Login'){
            this.show = false
            setTimeout(() => {
                next()
            }, 100)
        }
        else next()
    }
}
</script>

<style>
    #page{
        transition: opacity 0.25s, margin-top 0.5s, margin-left 0.25s 0.5s ease-in-out;
    }
</style>
