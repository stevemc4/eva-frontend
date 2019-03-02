<template>
    <modal name="confirmed" :scrollable="true" :height="'auto'" :clickToClose="false">
      <div class="p-4">
        <div class="flex items-center">
          <span class="block text-2xl flex-grow">Berhasil Memilih</span>
        </div>
        <span class="block mt-4">
            Pilihan Anda berhasil direkam oleh sistem. Terimakasih atas suara Anda!
        </span>
        <div class="flex justify-end mt-4">
            <button class="rounded border border-blue-dark bg-blue-dark text-white font-bold ml-2 p-4 focus:outline-none hover:bg-blue-darker hover:border-blue-darker" @click="done()">Keluar</button>
        </div>
      </div>
    </modal>
</template>

<script>
export default {
    methods: {
        done(){
            this.$modal.hide('confirmed')
            this.$root.$emit('voted')
        }
    }
}
</script>

<style>

</style>
