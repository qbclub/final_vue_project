<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router'

import films from '../DB/films.json'
const route = useRoute()
let film = ref({})
onMounted(() => {
 
    film.value = films[route.params.index]
})
</script>
<template>
    <h1> {{ film.name }}</h1>
    <div class="container">
        <div class="back-button">
            <RouterLink to="/"> Назад</RouterLink>
        </div>
        <div class="info">
            <div>
                <img :src="film.img" alt="">
            </div>
            <div>
                <p>
                    <b> Дата создания:</b> {{ film.age }}
                </p>
                <p>
                    <b>Страна:</b>
                    {{ film.cuntry }}
                </p>
                <p>
                    <b>Продолжительность:</b>
                    {{ film.duration }}
                </p>
                <p>
                    <b>Содержание: </b>
                    {{ film.discription }}
                </p>

            </div>
        </div>
    </div>
</template>
<style scoped>
h1 {
    text-align: center;
}

.back-button {
    width: 60%;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info div {

    width: 50%;
    padding: 12px;
}

.info {
    display: flex;
    width: 60%;
}

img {
    width: 100%;
}

@media (max-width: 960px) {
    .back-button {
        width: 80%;
    }



    .info div {

        width: 80%;
        padding: 12px;
    }

    .info {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
}
</style>