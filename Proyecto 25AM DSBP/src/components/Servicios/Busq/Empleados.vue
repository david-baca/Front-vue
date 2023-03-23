<template>
    <table class="table">
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
        <tr v-for="empleado in Empleados" :key="empleado.id">
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
      Empleados: [],
    };
  },
  created: function () {
    this.consultarEmpleados();
  },
  methods: {
    consultarEmpleados() {
      axios.get("https://localhost:7294/Empleado").then((result) => {
        console.log(result.data.result);
        this.Empleados = result.data.result;
      });
    }
  },
};
</script>