<template>
    <div id="page" class="p-8" :class="{'mt-8 opacity-0': !show, 'mt-0 opacity-100': show}">
        <span class="block text-4xl">Selamat Datang, <span>{{voterData.name}}</span></span>
        <div class="flex mt-4">
            <h1 class="font-bold text-xl flex-grow">Daftar Kandidat</h1>
            <span class="">Scroll kebawah untuk melihat lebih banyak kandidat!</span>
        </div>
        <div class="mt-4 -mx-4 flex flex-row flex-wrap">
            <div class="w-1/2 xl:w-1/3 p-4" :class="{'mt-8 opacity-0': !startShowingCandidates, 'mt-0 opacity-100': startShowingCandidates}" v-for="(item, index) in candidates" :style="`transition: margin-top 0.5s ease-in-out ${0.15*index}s, opacity 0.5s ease-in-out ${0.15*index}s`" :key="item.id">
                <div class="flex flex-col">
                    <img class="bg-grey h-48 w-full rounded-t-lg" style="object-fit: cover" :src="`${baseURL}${item.image}`">
                    <div class="border border-t-0 border-b-0 border-grey p-4">
                        <span class="block text-2xl font-bold text-black">{{item.name}}</span>
                        <span class="block text-lg mt-4 text-black">{{item.class.className}}</span>
                    </div>
                    <div class="flex">
                        <button class="rounded-bl-lg border border-grey border-r-0 w-1/2 p-4 focus:outline-none hover:bg-grey-lighter" @click="$modal.show('detail', candidates[index])">Lihat Detail</button>
                        <button class="rounded-br-lg border bg-blue-dark text-white border-blue-dark font-bold border-l-0 w-1/2 p-4 focus:outline-none hover:bg-blue-darker" @click="$modal.show('confirm', {id: candidates[index].id, name: candidates[index].name})">Pilih</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
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
        this.baseURL = `http://${window.location.hostname}:4200/static/img/candidates/`
        await this.getVoterData()
        await this.getCandidatesData()
        this.$root.$emit('leaveLogin')
        this.show = true
        setTimeout(()=>{
            this.startShowingCandidates = true
        }, 10)
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
    beforeRouteLeave(from, to, next)
    {
        this.show = false
        setTimeout(() => {
            next()
        }, 100)

    }
}
</script>

<style>
    #page{
        transition: opacity 0.25s, margin-top 0.5s;
    }
</style>
