<template>
  <div class="conteiner">
      <div class="row">
        <div class="col-12">
          <div class=" form-floating">
            <input type="number" class="form-control" id="floatingPassword"
            v-model="Id" @input="consultarRol">
            <label for="floatingPassword">Ingresa el Id a buscar</label>
          </div>
        </div>
      </div>
    </div>
    <table v-if="rol" class="table">
        <thead>
        <tr>
            <th>pkRol</th>
            <th>nombre</th>
        </tr>
        </thead>
        <tbody>
        <tr :key="rol.pkRol">
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
      Id: 0,
      rol: false
    };
  },
  methods: {
    consultarRol() {
      axios.get("https://localhost:7294/Rol/"+this.Id.toString()).then((result) => {
        console.log(result.data.result);
        this.rol = result.data.value.result;
      });
    }
  },
};
</script>