<template>
    <div class="bg-grey-light flex items-center w-screen h-screen justify-center">
        <div id="loginBox" class="bg-white w-128 h-72 p-8" :class="{expandToFullscreen: expanded}">
            <div class="flex items-center">
                <span class="font-bold flex-grow">Project EVA</span>
                <span style="transition: opacity 0.2s" :class="{'opacity-100': !expanded, 'opacity-0': expanded}">Login</span>
            </div>
            <form style="transition: opacity 0.2s" class="mt-6" :class="{'opacity-100': !expanded, 'opacity-0': expanded}" method="POST" action="/api/login" @submit="submit">
                <input class="w-full border border-grey-darkest rounded my-2 p-4 outline-none" type="text" name="username" placeholder="Username" required>
                <input class="w-full border border-grey-darkest rounded my-2 p-4 outline-none" type="password" name="password" placeholder="Kata Sandi" required>
                <div class="flex items-center mt-3">
                    <a class="no-underline text-black font-bold flex-grow" href="#">Pengaturan</a>
                    <input class="py-2 px-4 bg-black text-white font-bold cursor-pointer outline-none" type="submit" value="Login">
                </div>
            </form>
            <div v-if="unauthorized" class="bg-red text-white p-4 mt-8 -mx-8 flex items-center">
                <span>Username atau Kata Sandi Anda Salah!</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            expanded: false,
            unauthorized: false
        }
    },
    methods: {
        async submit(e){
            try{
                this.unauthorized = false
                e.preventDefault()
                let body = new FormData(e.target)
                let data = await this.$axios.post('/auth/login', body)
                this.expanded = true
                setTimeout(() => {
                    this.$router.push('/')
                }, 300)
            }
            catch(e){
                if(e.response.status == 401)
                    this.unauthorized = true    
                console.log(e.response)
            }
        }
    },
    mounted(){
        if(this.$route.query.logout)
        {
            this.expanded = true
            setTimeout(() => {
                this.expanded = false
                this.$router.push('/login')
            }, 300)
        }
    }
}
</script>

<style>

    #loginBox{
        transition: width ease-in-out 0.25s, height ease-in-out 0.25s;
    }
    
    .expandToFullscreen{
        @apply w-screen h-screen;
    }
</style>
