<template>
  <div>
    <div v-if="confirm" class="alert alert-success d-flex align-items-center" role="alert">
      <h5 class="m-0 d-inline-block"> Se creo el componente correctamente en la base de datos</h5>
      <button @click="this.confirm = false" class="btn btn-light m-2">OK</button>
    </div>
    <form v-on:submit.prevent="agregarRegistro">
      <div class="form-group">
        <label for="">Nombre:</label>
        <input
          type="text"
          class="form-control"
          v-model="Departamento.nombre"
          placeholder="Nombre"
        />
      </div>

      <br />

      <div class="btn-group" role="group">
        <button type="submit" class="btn btn-success">Agregar</button>
      </div>
    </form>
  </div>
</template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        Departamento: {},
        confirm: false
      };
    },
  
    methods: {
      agregarRegistro() {
        var datosEnviar = {
            nombre: this.Departamento.nombre,
        };
  
        axios
          .post("https://localhost:7294/Departamento", datosEnviar)
          .then((result) => {
            this.Departamento = {}
            this.confirm = true
          });
      },
    },
  };
  </script>