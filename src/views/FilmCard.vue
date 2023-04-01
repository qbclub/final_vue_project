<script setup>
defineProps({
    film: Object,
})
</script>
<template>
    <div class="small-card">
        <h2>{{ film.name }}</h2>
        <img :src="film.img" alt="">
    </div>
</template>
<style scoped>
h2 {
    text-align: center;
}

img {
    width: 100%;
}
</style>