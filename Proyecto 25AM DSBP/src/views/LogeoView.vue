<script setup lang="ts">
import X from '../components/Formulario.vue';

import {ref} from "vue";
const counter = ref(true);

const trasform = () => {
    counter.value = false
}


</script>

<template>
    <div class="container">
        <div class="row justify-content-center align-content-center" style="min-height: 100vh;">
            <X v-if="counter"/>
        </div>
        {{counter}}
        <button @click="trasform()">log</button>
        <h1 v-if="counter">Vue is awesome!</h1>
        <h1 v-else>Oh no 😢</h1>
    </div>
</template>