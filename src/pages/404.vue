<template>
    <div class="bg-grey-light flex items-center w-screen h-screen justify-center">
        <div id="loginBox" class="bg-white w-128 p-8">
            <h1 class="text-3xl font-mono text-black font-normal">404 Tidak Ditemukan</h1>
            <p class="mt-8 text-lg">
                Halaman yang Anda minta tidak tersedia
            </p>
            <router-link class="py-2 px-4 bg-black text-white font-bold cursor-pointer no-underline mt-8 inline-block" :to="'/login'">Kembali ke Halaman Login</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style>

</style>
