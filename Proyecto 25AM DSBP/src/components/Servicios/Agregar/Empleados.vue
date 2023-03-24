<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar empleado</div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                v-model="Empleado.nombre"
                placeholder="Nombre"
              />
            </div>
            <div class="form-group">
              <label for="">Apellidos:</label>
              <input
                type="text"
                class="form-control"
                v-model="Empleado.apellidos"
                placeholder="Nombre"
              />
            </div>
            <div class="form-group">
              <label for="">Direccion:</label>
              <input
                type="text"
                class="form-control"
                v-model="Empleado.direccion"
                placeholder="Nombre"
              />
            </div>
            <div class="form-group">
              <label for="">Ciudad:</label>
              <input
                type="text"
                class="form-control"
                v-model="Empleado.ciudad"
                placeholder="Nombre"
              />
            </div>
            <div class="form-group">
              <label for="">codigo Puesto:</label>
              <input
                type="number"
                class="form-control"
                v-model="Empleado.Fk_puesto"
                placeholder="Nombre"
              />
            </div>

            <div class="form-group">
              <label for="">codigo Departamento:</label>
              <input
                type="number"
                class="form-control"
                v-model="Empleado.Fk_departamento"
                placeholder="Nombre"
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
        Empleado: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.Empleado);
  
        var datosEnviar = {
            nombre: this.Empleado.nombre,
            apellidos: this.Empleado.apellidos,
            direccion: this.Empleado.direccion,
            ciudad: this.Empleado.ciudad,
            fkPuesto: this.Empleado.fkPuesto,
            fkDepartamento: this.Empleado.fkDepartamento
        };
  
        axios
          .post("https://localhost:7294/Empleado", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "/Dashboard";
          });
      },
    },
  };
  </script>