<template>
  <div>
    <div>
    <div v-if="confirm" class="alert alert-success d-flex align-items-center" role="alert">
      <h5 class="m-0 d-inline-block"> Se creo el componente correctamente en la base de datos</h5>
      <button @click="this.confirm = false" class="btn btn-light m-2">OK</button>
    </div>
  </div>

    <form v-on:submit.prevent="agregarRegistro">
      <div class="form-group">
        <label for="">nombre:</label>
        <input
          type="text"
          class="form-control"
          v-model="Puesto.nombre"
          placeholder="Nombre del puesto"
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
        Puesto: {},
        confirm: false
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.Puesto);
  
        var datosEnviar = {
            nombre: this.Puesto.nombre
        };
        console.log(datosEnviar);
        axios
          .post("https://localhost:7294/Puesto", datosEnviar)
          .then((result) => {
            this.Puesto = {}
            this.confirm = true
          });
      },
    },
  };
  </script>