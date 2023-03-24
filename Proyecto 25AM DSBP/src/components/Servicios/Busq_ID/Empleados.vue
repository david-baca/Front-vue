<template>
  <div class="conteiner">
      <div class="row">
        <div class="col-12">
          <div class=" form-floating">
            <input type="number" class="form-control" id="floatingPassword"
            v-model="Id" @input="consultarEmpleado">
            <label for="floatingPassword">Ingresa el Id a buscar</label>
          </div>
        </div>
      </div>
    </div>
    <table v-if="empleado" class="table">
        <thead>
        <tr>
            <th>pkEmpleado</th>
            <th>nombre</th>
            <th>apellidos</th>
            <th>direccion</th>
            <th>ciudad</th>
            <th>fkPuesto</th>
            <th>fkDepartamento</th>
        </tr>
        </thead>
        <tbody>
        <tr :key="empleado.pkEmpleado">
            <td>{{ empleado.pkEmpleado }}</td>
            <td>{{ empleado.nombre }}</td>
            <td>{{ empleado.apellidos }}</td>
            <td>{{ empleado.direccion }}</td>
            <td>{{ empleado.ciudad }}</td>
            <td>{{ empleado.fkPuesto }}</td>
            <td>{{ empleado.fkDepartamento }}</td>
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
      Id : 0,
      empleado: false
    };
  },
  created: function () {
    this.consultarEmpleado();
  },
  methods: {
    consultarEmpleado() {
      axios.get("https://localhost:7294/Empleado/"+this.Id.toString()).then((result) => {
        console.log(result.data.result);
        this.empleado = result.data.value.result;
      });
    }
  },
};
</script>