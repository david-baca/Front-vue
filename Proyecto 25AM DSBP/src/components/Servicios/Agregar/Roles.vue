<template>
    <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">nombre:</label>
              <input
                type="text"
                class="form-control"
                v-model="Rol.nombre"
                placeholder="nombre del Rol"
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
        Rol: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.Rol);
  
        var datosEnviar = {
            nombre: this.Rol.nombre
        };
        console.log(datosEnviar);
        axios
          .post("https://localhost:7294/Rol", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "/Dashboard";
          });
      },
    },
  };
  </script>