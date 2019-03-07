<template>
    <modal name="detail" :scrollable="true" :height="'auto'" @before-open="setup">
      <div class="p-4">
        <div class="flex items-center">
          <span class="block text-2xl flex-grow">Tentang Kandidat</span>
        </div>
        <div class="flex mt-8 items-center">
          <img class="w-32 h-32 rounded-full bg-grey" :src="`${baseURL}${data.image}`"/>
          <div class="ml-8 flex-grow">
            <span class="block text-xl font-bold text-black">{{data.name}}</span>
            <span class="block text-lg mt-2">{{data.class.className}}</span>
            <span class="block mt-2 border-l-2 p-3 border-blue-darker bg-grey-light w-full">{{data.quote}}</span>
          </div>
        </div>
        <span class="block text-xl my-4">Visi</span>
        <p>{{data.vision}}</p>
        <span class="block text-xl my-4">Misi</span>
        <p>{{data.mission}}</p>
        <div class="flex justify-end mt-4">
            <button class="mr-2 p-4 focus:outline-none font-bold text-grey-darkest hover:text-black" @click="$modal.hide('detail')">Tutup</button>
            <button class="rounded border border-blue-dark bg-blue-dark text-white font-bold ml-2 p-4 focus:outline-none hover:bg-blue-darker hover:border-blue-darker" @click="vote">Pilih <span>{{data.name}}</span></button>
        </div>
      </div>
    </modal>
</template>

<script>
export default {
    methods: {
        vote(){
            this.$modal.hide('detail')
            this.$modal.show('confirm', {
              id: this.data.id,
              name: this.data.name
            })
        },
        setup(e){
          this.baseURL = `http://${window.location.hostname}:4200/static/img/candidates/`
          this.data = e.params
        }
    },
    data(){
      return{
        data: {
          class: {}
        },
        baseURL: ''
      }
    }
}
</script>

<style>

</style>
