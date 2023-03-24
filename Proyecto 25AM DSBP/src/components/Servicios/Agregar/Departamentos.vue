<template>
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
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        Departamento: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.Departamento);
  
        var datosEnviar = {
            nombre: this.Departamento.nombre,
        };
  
        axios
          .post("https://localhost:7294/Departamento", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "/Dashboard";
          });
      },
    },
  };
  </script>