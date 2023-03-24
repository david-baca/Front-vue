<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Usuario</div>
        <div class="card-body">
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
              <label for="">Fecha de registro</label>
              <input
                type="date"
                class="form-control"
                v-model="Usuario.fechaRegistro"
                placeholder="Fecha de registro"
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
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        Usuario: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.Usuario);
  
        var datosEnviar = {
            user : this.Usuario.user,
            password : this.Usuario.password,
            fechaRegistro : (this.Usuario.fechaRegistro).toString(),
            fkEmpleado: this.Usuario.fkEmpleado,
            fkRol : this.Usuario.fkRol
        };
  
        axios
          .post("https://localhost:7294/Usuario", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "/Dashboard";
          });
      },
    },
  };
  </script>