<template>
    <nav class="p-8 flex items-center h-24 animate">
        <div class="flex flex-col flex-grow animate" :class="{'mt-6': !show, '-mt-6': show}">
            <span class="font-bold animate" :class="{'opacity-100': !show, 'opacity-0': show}">Project EVA</span>
            <span class="font-bold animate mt-2 inline-block" :class="{'opacity-100': show, 'opacity-0': !show}">Dasbor</span>
        </div>
        <div id="menu" class="animate" :class="{'opacity-0 -mt-4': !show, 'opacity-100 mt-0': show}">
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
        async logout(){
            try{
                let data = await this.$axios.get('/auth/logout')
                this.$root.$emit('reset')
                this.show = false
                setTimeout(() => {
                    this.$router.push('/login?logout=true')
                }, 750)
                
            }
            catch(e){
                
            }
        }
    }
}
</script>

<style>
    .animate{
        transition: opacity 0.25s 0s ease-in-out, margin-top 0.5s 0s ease-in-out, margin-left 0.25s 0.5s ease-in-out
    }
</style>
