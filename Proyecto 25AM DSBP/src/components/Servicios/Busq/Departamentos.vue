<template>
    <table class="table">
        <thead>
        <tr>
            <th>pkDepartamento</th>
            <th>nombre</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="departamento in Departamentos" :key="departamento.id">
            <td>{{ departamento.pkDepartamento }}</td>
            <td>{{ departamento.nombre }}</td>
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
      Departamentos: [],
    };
  },
  created: function () {
    this.consultarDepartamentos();
  },
  methods: {
    consultarDepartamentos() {
      axios.get("https://localhost:7294/Departamento").then((result) => {
        console.log(result.data.result);
        this.Departamentos = result.data.result;
      });
    }
  },
};
</script>