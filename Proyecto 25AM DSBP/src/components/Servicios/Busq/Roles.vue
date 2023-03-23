<template>
    <table class="table">
        <thead>
        <tr>
            <th>pkRol</th>
            <th>nombre</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="rol in Roles" :key="rol.pkRol">
            <td>{{ rol.pkRol }}</td>
            <td>{{ rol.nombre }}</td>
            <div class="btn-group" role="label" aria-label="">
                <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                |<button
                type="button"
                v-on:click="borrarCliente(puesto.id)"
                class="btn btn-danger"
                >
                Eliminar</button
                >|
            </div>
        </tr>
        </tbody>
    </table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        Roles: [],
    };
  },
  created: function () {
    this.consultarRoles();
  },
  methods: {
    consultarRoles() {
      axios.get("https://localhost:7294/Rol").then((result) => {
        console.log(result.data.result);
        this.Roles = result.data.result;
      });
    }
  },
};
</script>