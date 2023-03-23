<template>
    <table class="table">
        <thead>
        <tr>
            <th>pkCliente</th>
            <th>nombre</th>
            <th>apellidos</th>
            <th>telefono</th>
            <th>email</th>
            <th>direccion</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="cliente in Clientes" :key="cliente.id">
            <td>{{ cliente.pkCliente }}</td>
            <td>{{ cliente.nombre }}</td>
            <td>{{ cliente.apellidos }}</td>
            <td>{{ cliente.telefono }}</td>
            <td>{{ cliente.email }}</td>
            <td>{{ cliente.direccion }}</td>
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
      Clientes: [],
    };
  },
  created: function () {
    this.consultarClientes();
  },
  methods: {
    consultarClientes() {
      axios.get("https://localhost:7294/Cliente").then((result) => {
        console.log(result.data.result);
        this.Clientes = result.data.result;
      });
    }
  },
};
</script>