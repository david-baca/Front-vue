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
      <label for="">Usuario:</label>
      <input
        type="text"
        class="form-control"
        v-model="Usuario.user"
        placeholder="Usuario"
      />
    </div>
    <div class="form-group">
      <label for="">Contraseña:</label>
      <input
        type="text"
        class="form-control"
        v-model="Usuario.password"
        placeholder="contraseña"
      />
    </div>
    <div class="form-group">
      <label for="">Codigo Empleado</label>
      <input
        type="number"
        class="form-control"
        v-model="Usuario.fkEmpleado"
        placeholder="Codigo Empleado"
      />
    </div>
    <div class="form-group">
      <label for="">Codigo Rol</label>
      <input
        type="number"
        class="form-control"
        v-model="Usuario.fkRol"
        placeholder="Codigo Rol"
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
        Usuario: {},
        confirm: false
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.Usuario);
  
        var datosEnviar = {
            user : this.Usuario.user,
            password : this.Usuario.password,
            fkEmpleado: this.Usuario.fkEmpleado,
            fkRol : this.Usuario.fkRol
        };
  
        axios
          .post("https://localhost:7294/Usuario", datosEnviar)
          .then((result) => {
            this.Usuario = {}
            this.confirm = true
          });
      },
    },
  };
  </script>