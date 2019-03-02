<template>
    <modal name="confirm" :scrollable="true" :height="'auto'">
      <div class="p-4">
        <div class="flex items-center">
          <span class="block text-2xl flex-grow">Konfirmasi Pilihan</span>
        </div>
        <span class="block mt-4">
            Apakah Anda yakin ingin memilih <span v-pre>{{name}}</span>?
        </span>
        <div class="flex justify-end mt-4">
            <button class="mr-2 p-4 focus:outline-none font-bold text-grey-darkest hover:text-black" @click="$modal.hide('detail')">Kembali ke Daftar Kandidat</button>
            <button class="rounded border border-blue-dark bg-blue-dark text-white font-bold ml-2 p-4 focus:outline-none hover:bg-blue-darker hover:border-blue-darker">Saya Yakin!</button>
        </div>
      </div>
    </modal>
</template>

<script>
export default {

}
</script>

<style>

</style>
