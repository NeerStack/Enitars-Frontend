<template>
    <div>
        <div v-if="spinerCont">
        <spiner/>
    </div>
    <div v-else>
        <navigationExt/>
        <slot/>
        <TheFooter/>
    </div>
    </div>
</template>
<script setup>
    import navigationExt from '~/components/navigationExt.vue';
    import spiner from '~/components/spiner.vue';
    import TheFooter from '~/components/TheFooter.vue';

    let spinerCont = ref(true)

    setTimeout(()=>{
        spinerCont.value = false
    }, 3000)
</script>
