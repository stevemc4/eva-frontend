<template>
    <div id="page" class="p-8" :class="{'mt-8 opacity-0': !show, 'mt-0 opacity-100': show}">
        <span class="block text-4xl">Daftar Kandidat</span>
        <router-link class="no-underline text-grey-darker inline-block mt-2" :to="'/dashboard/candidates/new'">+ Kandidat Baru</router-link>
        <div class="flex mt-4">
            <ul class="flex flex-wrap list-reset -mx-4">
                <li class="w-1/2 md:w-1/3 p-4" v-for="(item, index) in candidates" :key="item.id">
                    <div class="flex flex-col">
                        <img class="bg-grey h-48 w-full rounded-t-lg" style="object-fit: cover" :src="`${baseURL}${item.image}`">
                        <div class="border border-t-0 border-b-0 border-grey p-4">
                            <span class="block text-2xl font-bold text-black">{{item.name}}</span>
                            <span class="block text-lg mt-4 text-black">{{item.class.className}}</span>
                        </div>
                        <div class="flex">
                            <button class="rounded-bl-lg border border-grey border-r-0 w-1/2 p-4 focus:outline-none hover:bg-grey-lighter" @click="$modal.show('detail', candidates[index])">Edit</button>
                            <button class="rounded-br-lg border bg-red-dark text-white border-red-dark font-bold border-l-0 w-1/2 p-4 focus:outline-none hover:bg-red-darker" @click="$modal.show('confirm', {id: candidates[index].id, name: candidates[index].name})">Hapus</button>
                        </div>
                    </div>
                </li>
            </ul>
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
            baseURL: '',
            candidates: []
        }
    },
    async mounted(){
        this.baseURL = `http://${window.location.hostname}:4200/static/img/candidates/`
        let data = await this.$axios.get('/candidates')
        this.candidates = data.data
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
