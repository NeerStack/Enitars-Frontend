<template>
    <div>
        <div v-if="spinerCont">
        <spiner/>
    </div>
    <div v-else>
        <navigation/>
        <slot/>
        <TheFooter/>
    </div>
    </div>
</template>
<script setup>
    import navigation from '~/components/navigation.vue';
    import spiner from '~/components/spiner.vue';
    import TheFooter from '~/components/TheFooter.vue';

    let spinerCont = ref(true)

    setTimeout(()=>{
        spinerCont.value = false
    }, 3000)
</script>
