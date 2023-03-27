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
                v-model="Rol.nombre"
                placeholder="nombre del Rol"
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
        Rol: {},
        confirm: false
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
            this.Rol = {}
            this.confirm = true
          });
      },
    },
  };
  </script>