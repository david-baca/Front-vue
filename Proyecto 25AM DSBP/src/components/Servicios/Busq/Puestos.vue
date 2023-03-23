<template>
    <table class="table">
        <thead>
        <tr>
            <th>pkPuesto</th>
            <th>nombre</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="puesto in Puestos" :key="puesto.id">
            <td>{{ puesto.pkPuesto }}</td>
            <td>{{ puesto.nombre }}</td>
            <div class="btn-group" role="label" aria-label="">
                <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                |<button
                type="button"
                v-on:click="borrarArticulo(puesto.id)"
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
      Puestos: [],
    };
  },
  created: function () {
    this.consultarPuestos();
  },
  methods: {
    consultarPuestos() {
      axios.get("https://localhost:7294/Puesto").then((result) => {
        console.log(result.data.result);
        this.Puestos = result.data.result;
      });
    }
  },
};
</script>