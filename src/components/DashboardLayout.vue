<template>
    <div class="h-screen flex flex-col">
	    <div class="flex flex-grow">
		    <div class="w-16 h-full border-r-2 animate flex items-center justify-center" :class="{'-ml-16': !show, 'ml-0': show}">
                <div class="flex flex-col items-center">
                    <router-link title="Sekilas" class="p-4 no-underline text-grey-darkest" :to="'/dashboard'" v-tippy="{placement: 'right'}">
                        <monitor-icon/>
                    </router-link>
                    <router-link title="Kandidat" class="p-4 no-underline text-grey-darkest" :to="'/dashboard/candidates'" v-tippy="{placement: 'right'}">
                        <user-check-icon/>
                    </router-link>
                    <router-link title="Pemilih" class="p-4 no-underline text-grey-darkest" :to="'/dashboard/voters'" v-tippy="{placement: 'right'}">
                        <user-icon/>
                    </router-link>
                    <router-link title="Hasil" class="p-4 no-underline text-grey-darkest" :to="'/dashboard/votes'" v-tippy="{placement: 'right'}">
                        <check-square-icon/>
                    </router-link>
                </div>
            </div>
            <div class="animate flex-grow overflow-y-auto">
	            <navigation/>
				<slot/>
			</div>
	   </div>
	</div>
</template>

<script>
import Navigation from '@/components/DashboardNavigation'
import {MonitorIcon, UserCheckIcon, UserIcon, CheckSquareIcon} from 'vue-feather-icons'

export default {
	name: 'Layout',
    components: {Navigation, MonitorIcon, UserCheckIcon, UserIcon, CheckSquareIcon},
	data(){
		return{
			show: false
		}
	},
	created()
	{
		this.$root.$on('leaveLogin', () => this.show = true)
		this.$root.$on('reset', () => this.show = false)
	}
}
</script>

<style>
	.animate{
		transition: margin-left 0.25s 0.5s ease-in-out, left 0.25s 0.5s ease-in-out;
	}
</style>