<template>
  <div>
    <table v-if="Editar==false" class="table">
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
                <button type="button"
                v-on:click="borrarDepartamento(puesto.id)"
                class="btn btn-danger"> Eliminar</button>

                <button type="button"
                v-on:click="this.Editar = departamento"
                class="btn ms-2 btn-warning">
                Editar</button>
            </div>
        </tr>
        </tbody>
    </table>
    <editable :initial-message="Editar" @messageChanged="X"  v-if="Editar">
    </editable>


  </div>
</template>

<script>
import axios from "axios";
import editable from '../Editar/Departamento.vue'

export default {
  data() {
    return {
      Editar: false,
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
        this.Editar = false 
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