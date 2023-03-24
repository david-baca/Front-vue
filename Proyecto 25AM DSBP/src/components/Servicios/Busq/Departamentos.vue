<template>
  <div>
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

    
    <editable :initial-message="'Mensaje inicial'" @messageChanged="X">
    </editable>
  </div>
</template>

<script>
import axios from "axios";
import editable from '../Editar/Departamento.vue'

export default {
  data() {
    return {
      
      Departamentos: [],
      
    };
  },
  components: {
    editable
  },
  created: function () {
    this.consultarDepartamentos();
  },
  methods: {
    X(item) {
        console.log('Mensaje cambiado:', item)
      },
    consultarDepartamentos() {
      axios.get("https://localhost:7294/Departamento").then((result) => {
        console.log(result.data.result);
        this.Departamentos = result.data.result;
      });
    }
  },
};
</script>