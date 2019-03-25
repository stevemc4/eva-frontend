<template>
    <div id="page" class="p-8" :class="{'mt-8 opacity-0': !show, 'mt-0 opacity-100': show}">
        <span class="block text-4xl">Daftar Kandidat</span>
        <div class="flex mt-4">
            
        </div>
    </div>
</template>

<script>
import Layout from '@/components/DashboardLayout'

export default {
    name: 'DashboardCandidates',
    components: {Layout},
    data(){
        return{
            show: false,
            baseURL: ''
        }
    },
    async mounted(){
        setTimeout(() => this.show = true, 10)
    },
    methods: {
        
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
    },
}
</script>

<style>
    #page{
        transition: opacity 0.25s, margin-top 0.5s, margin-left 0.25s 0.5s ease-in-out;
    }
</style>
