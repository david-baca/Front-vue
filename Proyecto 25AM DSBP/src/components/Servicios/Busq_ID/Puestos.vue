<template>
  <div class="conteiner">
      <div class="row">
        <div class="col-12">
          <div class=" form-floating">
            <input type="number" class="form-control" id="floatingPassword"
            v-model="Id" @input="consultarPuesto">
            <label for="floatingPassword">Ingresa el Id a buscar</label>
          </div>
        </div>
      </div>
    </div>
    <table v-if="puesto" class="table">
        <thead>
        <tr>
            <th>pkPuesto</th>
            <th>nombre</th>
        </tr>
        </thead>
        <tbody>
        <tr :key="puesto.id">
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
      Id: 0,
      puesto: false
    };
  },
  methods: {
    consultarPuesto() {
      axios.get("https://localhost:7294/Puesto/" + this.Id.toString()).then((result) => {
        console.log(result.data.result);
        this.puesto = result.data.value.result;
      });
    }
  },
};
</script>