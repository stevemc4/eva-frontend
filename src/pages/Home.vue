<template>
    <div id="page" class="p-8" :class="{'mt-8 opacity-0': !show, 'mt-0 opacity-100': show}">
        Hello World
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
