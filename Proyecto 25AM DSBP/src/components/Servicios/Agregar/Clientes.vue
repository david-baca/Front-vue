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
          v-model="Cliente.nombre"
          placeholder="Nombre"
        />
      </div>
      <div class="form-group">
        <label for="">Apellidos:</label>
        <input
          type="text"
          class="form-control"
          v-model="Cliente.apellidos"
          placeholder="Apellidos"
        />
      </div>
      <div class="form-group">
        <label for="">Telefono</label>
        <input
          type="tel"
          class="form-control"
          v-model="Cliente.telefono"
          placeholder="Telefono"
        />
      </div>
      <div class="form-group">
        <label for="">Correo</label>
        <input
          type="email"
          class="form-control"
          v-model="Cliente.email"
          placeholder="Correo"
        />
      </div>
      <div class="form-group">
        <label for="">Direccion</label>
        <input
          type="text"
          class="form-control"
          v-model="Cliente.direccion"
          placeholder="Direccion"
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
        confirm: false,
        Cliente: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.Cliente);
  
        var datosEnviar = {
            nombre : this.Cliente.nombre,
            apellidos : this.Cliente.apellidos,
            telefono : this.Cliente.telefono,
            email : this.Cliente.email,
            direccion : this.Cliente.direccion
        };
  
        axios
          .post("https://localhost:7294/clientes", datosEnviar)
          .then((result) => {
            console.log(result);
            this.confirm = true
            this.Cliente = {};
            // window.location.href = "/Dashboard";
          });
      }
    },
  };
  </script>