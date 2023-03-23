<template>
    <table class="table">
        <thead>
        <tr>
            <th>pkUsuario</th>
            <th>user</th>
            <th>password</th>
            <th>fechaRegistro</th>
            <th>fkEmpleado</th>
            <th>fkRol</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="usuario in Usuarios" :key="usuario.pkUsuario">
            <td>{{ usuario.pkUsuario }}</td>
            <td>{{ usuario.user }}</td>
            <td>{{ usuario.password }}</td>
            <td>{{ usuario.fechaRegistro }}</td>
            <td>{{ usuario.fkEmpleado }}</td>
            <td>{{ usuario.fkRol }}</td>
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
        Usuarios: [],
    };
  },
  created: function () {
    this.consultarUsuarios();
  },
  methods: {
    consultarUsuarios() {
      axios.get("https://localhost:7294/Usuario").then((result) => {
        console.log(result.data.result);
        this.Usuarios = result.data.result;
      });
    }
  },
};
</script>