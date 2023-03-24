<template>
  <div class="conteiner">
      <div class="row">
        <div class="col-12">
          <div class=" form-floating">
            <input type="number" class="form-control" id="floatingPassword"
            v-model="Id" @input="consultarDepartamento">
            <label for="floatingPassword">Ingresa el Id a buscar</label>
          </div>
        </div>
      </div>
    </div>

    <table v-if="departamento" class="table">
        <thead>
        <tr>
            <th>pkDepartamento</th>
            <th>nombre</th>
        </tr>
        </thead>
        <tbody>
        <tr :key="departamento.id">
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
      departamento: false,
    };
  },
  methods: {
    consultarDepartamento() {
      axios.get("https://localhost:7294/Departamento/"+this.Id.toString()).then((result) => {
        console.log(result.data.result);
        this.departamento = result.data.value.result;
      });
    }
  },
};
</script>