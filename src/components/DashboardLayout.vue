<template>
    <div>
       <navigation/>
        <slot/>
    </div>
</template>

<script>
import Navigation from '@/components/DashboardNavigation'

export default {
    name: 'Layout',
    components: {Navigation}
}
</script>

<style>

</style>
