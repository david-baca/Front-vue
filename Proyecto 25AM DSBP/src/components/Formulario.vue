<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import {ref} from "vue";
const counter = ref(true);

const trasform = () => {
    counter.value = false
}

</script>
<template>
    <Form class="row justify-content-center align-content-center" style="min-height: 100vh;">
        <form method="post" class="col-11 col-sm-8 col-lg-4 p-5 border-secondary border-opacity-75 border-1 border rounded-2">
            <div class="col-12 m-1 imagen">
            </div>
            <div class="col-12 text-center">
                <h1>Iniciar Sesion</h1>
            </div>
            <div class="mt-5 mb-2 form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="Nombre@ejemplo.com">
                <label for="floatingInput">Correo</label>
            </div>

            <div class=" form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña">
                <label for="floatingPassword">Contreseña</label>
            </div>

            <div class="mt-5">
                <h6 class="text-secondary">
                    Este proyecto esta creado con tecnologia vu.js
                    y no se busca optener algun tipo de lucro con el
                    es unicamente como proyecto del 25AM. 
                </h6>
            </div>
            
            <div class="col-12 mt-5 d-flex justify-content-between align-items-center">
                <a href="#" class="link-primary text-decoration-none">
                    <h6 class="m-0">Crear cuenta</h6>
                </a>

                
                <RouterLink to="/home" class="btn-primary btn rounded-1">
                    <h6 class="m-0 ps-1 pe-1">Sigiente</h6>
                </RouterLink>
            </div>
        </form>
    </Form>
</template>