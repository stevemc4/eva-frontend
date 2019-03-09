<template>
    <modal name="confirm" :scrollable="true" :height="'auto'" @before-open="setup">
      <div class="p-4">
        <div class="flex items-center">
          <span class="block text-2xl flex-grow">Konfirmasi Pilihan</span>
        </div>
        <span class="block mt-4">
            Apakah Anda yakin ingin memilih <span>{{data.name}}</span>?
        </span>
        <div class="flex justify-end mt-4">
            <button class="mr-2 p-4 focus:outline-none font-bold text-grey-darkest hover:text-black" @click="$modal.hide('confirm')">Kembali ke Daftar Kandidat</button>
            <button class="rounded border border-blue-dark bg-blue-dark text-white font-bold ml-2 p-4 focus:outline-none hover:bg-blue-darker hover:border-blue-darker" @click="vote()">Saya Yakin!</button>
        </div>
      </div>
    </modal>
</template>

<script>
export default {
    data(){
        return {
            data: {}
        }
    },
    methods: {
        async vote(){
            let voterData = await this.$axios.get('/voter/this')
            let rawSignatureData = JSON.stringify({
                voter: voterData.data.id,
                candidate: this.data.id
            })
            let encode = new TextEncoder()
            let iv = new Uint8Array(16)
            window.crypto.getRandomValues(iv)
            let crypto = window.crypto.subtle
            let key = await crypto.generateKey({
                    name: 'AES-GCM',
                    length: 256
                },
                true,
                ['encrypt', 'decrypt']
            )
            let encrypted = await crypto.encrypt({
                    name: 'AES-GCM',
                    iv
                },
                key,
                encode.encode(voterData)
            )
            encrypted = this.bufferToHex(encrypted)
            let payload = {
                signature: {
                    cipher: encrypted,
                    key: this.bufferToHex(iv)
                }
            }
            console.log(payload)
            // this.$modal.hide('confirm')
            //this.$modal.show('confirmed')
        },
        setup(e){
            this.data = e.params
        },
        bufferToHex(buffer){
            var s = '', h = '0123456789ABCDEF';
            (new Uint8Array(buffer)).forEach((v) => { s += h[v >> 4] + h[v & 15]; });
            return s;
        }
    }
}
</script>

<style>

</style>
