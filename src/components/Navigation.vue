<template>
    <nav class="p-8 flex items-center">
        <span class="font-bold flex-grow">Project EVA</span>
        <div id="menu" :class="{'opacity-0 -mt-4': !show, 'opacity-100 mt-0': show}">
            <span @click='logout' class="text-black no-underline cursor-pointer">Keluar</span>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    data(){
        return{
            show: false
        }
    },
    created()
    {
        this.$root.$on('leaveLogin', () => this.show = true)
        this.$root.$on('voted', () => this.logout())
    },
    methods: {
        logout(){
            this.show = false
            this.$router.push('/login?logout=true')
        }
    }
}
</script>

<style>
    #menu{
        transition: opacity 0.25s, margin-top 0.5s
    }
</style>
