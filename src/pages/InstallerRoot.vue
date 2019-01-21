<template>
<div>
    <nav class="p-8 flex items-center">
        <span class="font-bold flex-grow">Project EVA Installer</span>
    </nav>
    <div class="flex">
        <router-view class="flex-grow p-8"></router-view>
        <div class="w-72 p-8">
            <span class="text-2xl">Informasi Server</span>
            <div class="block mt-4 font-mono">
                <span class="text-2xl block">//{{systemInformation.hostname}}</span>
                <span class="block mt-2">{{systemInformation.os}} {{systemInformation.version}} ({{systemInformation.arch}})</span>
                <span class="block mt-2">node {{systemInformation.nodever}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'InstallerRoot',
    data(){
        return{
            systemInformation: {

            }
        }
    },
    async mounted() {
        let returned = await this.$axios.get('/serverinfo')
        this.systemInformation = returned.data
    }
}
</script>

<style>

</style>
