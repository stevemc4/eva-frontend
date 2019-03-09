<template>
    <div class="bg-grey-light flex items-center w-screen h-screen justify-center">
        <div id="loginBox" class="bg-white w-128 p-8">
            <h1 class="text-3xl font-mono text-black font-normal">401 Tidak Diizinkan</h1>
            <p class="mt-8 text-lg">
                Anda tidak memiliki izin untuk mengakses halaman ini
            </p>
            <router-link class="py-2 px-4 bg-black text-white font-bold cursor-pointer no-underline mt-8 inline-block" :to="'/login'">Kembali ke Halaman Login</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Unauthorized'
}
</script>

<style>

</style>
