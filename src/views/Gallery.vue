<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FilmCard from './FilmCard.vue'
import films from '../DB/films.json'
</script>
<template>
    <h1>Сегодня в кинотеатре</h1>
    <div class="container">
        <div v-for="film, index in films" class="card">
            <router-link :to="{ name: 'film', params: { index: index } }">
                <FilmCard :film="film" />

            </router-link>

        </div>

    </div>
</template>
<style scoped>
h1 {
    text-align: center;
}



.container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
}

.card {
    max-width: 300px;
}
</style>