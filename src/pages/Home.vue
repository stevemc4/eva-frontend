<template>
    <div id="page" class="p-8" :class="{'mt-8 opacity-0': !show, 'mt-0 opacity-100': show}">
        <span class="block text-4xl">Selamat Datang, <span v-pre>{{VoterName}}</span></span>
        <h1 class="font-bold text-xl mt-8">Kandidat</h1>
        <div class="mt-8 -mx-4 flex flex-row flex-wrap">
            <div class="w-1/2 xl:w-1/3 p-4" :class="{'mt-8 opacity-0': !show, 'mt-0 opacity-100': show}" v-for="item in 6" :style="`transition: margin-top 0.5s ease-in-out ${0.15*item}s, opacity 0.5s ease-in-out ${0.15*item}s`" :key="item">
                <div class="flex flex-col">
                    <img class="bg-grey h-48 w-full rounded-t-lg" style="object-fit: cover">
                    <div class="border border-t-0 border-b-0 border-grey p-4">
                        <span class="block text-2xl font-bold text-black" v-pre>{{name}}</span>
                        <span class="block text-lg mt-4 text-black" v-pre>{{Class.class}}</span>
                    </div>
                    <div class="flex">
                        <button class="rounded-bl-lg border border-grey border-r-0 w-1/2 p-4 focus:outline-none hover:bg-grey-lighter" @click="$modal.show('detail')">Lihat Detail</button>
                        <button class="rounded-br-lg border bg-blue-dark text-white border-blue-dark font-bold border-l-0 w-1/2 p-4 focus:outline-none hover:bg-blue-darker">Pilih</button>
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
            show: false
        }
    },
    mounted(){
        this.$root.$emit('leaveLogin')
        this.show = true
    },
    methods: {
        
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
