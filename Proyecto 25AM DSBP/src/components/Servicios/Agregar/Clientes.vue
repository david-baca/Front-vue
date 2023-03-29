<template>
  <div>
    <div v-if="confirm" class="alert alert-success d-flex align-items-center" role="alert">
      <h5 class="m-0 d-inline-block"> Se creo el componente correctamente en la base de datos</h5>
      <button @click="this.confirm = false" class="btn btn-light m-2">OK</button>
    </div>
    <form v-on:submit.prevent="agregarRegistro">
      
      <editable :objeto_editar="Cliente">
    </editable>

      <div class="btn-group" role="group">
        <button type="submit" class="btn btn-success">Agregar</button>
        
      </div>
    </form>
  </div>
  </template>
  
  <script>
  import axios from "axios";
  import editable from '../Editar/Form_edit.vue'

  export default {
    data() {
      return {
        confirm: false,
        Cliente: {
          nombre : "",
          apellidos : "",
          telefono : "",
          email : "",
          direccion : ""
        },
      };
    },
    components: {
    editable
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