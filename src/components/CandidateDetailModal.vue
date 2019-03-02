<template>
    <modal name="detail" :scrollable="true" :height="'auto'">
      <div class="p-4">
        <div class="flex items-center">
          <span class="block text-2xl flex-grow">Tentang Kandidat</span>
          <span class="text-grey-darker cursor-pointer" @click="$modal.hide('detail')">Tutup</span>
        </div>
        <div class="flex mt-8 items-center">
          <img class="w-32 h-32 rounded-full bg-grey"/>
          <div class="ml-8 flex-grow">
            <span class="block text-xl" v-pre>{{name}}</span>
            <span class="block text-lg mt-2" v-pre>{{Class.class}}</span>
            <span class="block mt-2 border-l-2 p-3 border-blue-darker bg-grey-light w-full" v-pre>{{quote}}</span>
          </div>
        </div>
        <span class="block text-xl my-4">Visi</span>
        <p v-pre>{{vision}}</p>
        <span class="block text-xl my-4">Misi</span>
        <p v-pre>{{mission}}</p>
      </div>
    </modal>
</template>

<script>
export default {

}
</script>

<style>

</style>
