<template>
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
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        Puesto: {},
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
            console.log(result);
            window.location.href = "/Dashboard";
          });
      },
    },
  };
  </script>