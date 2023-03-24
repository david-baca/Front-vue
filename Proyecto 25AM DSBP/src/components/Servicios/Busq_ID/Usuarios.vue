<template>
  <div class="conteiner">
      <div class="row">
        <div class="col-12">
          <div class=" form-floating">
            <input type="number" class="form-control" id="floatingPassword"
            v-model="Id" @input="consultarUsuario">
            <label for="floatingPassword">Ingresa el Id a buscar</label>
          </div>
        </div>
      </div>
    </div>
    <table v-if="usuario" class="table">
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
        <tr :key="usuario.pkUsuario">
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
      Id: 0,
      usuario: false,
    };
  },
  methods: {
    consultarUsuario() {
      axios.get("https://localhost:7294/Usuario/"+this.Id.toString()).then((result) => {
        console.log(result.data.result);
        this.usuario = result.data.value.result;
      });
    }
  },
};
</script>