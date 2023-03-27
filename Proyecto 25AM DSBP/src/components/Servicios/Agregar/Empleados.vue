<template>
<div>
  <div v-if="Alerta" class="alert alert-danger d-flex align-items-center" role="alert">
    <h5 class="m-0 d-inline-block"> {{ Alerta }}</h5>
    <button @click="this.Alerta = false" class="btn btn-light m-2">OK</button>
  </div>
  
  <div>
    <div v-if="confirm" class="alert alert-success d-flex align-items-center" role="alert">
      <h5 class="m-0 d-inline-block"> Se creo el componente correctamente en la base de datos</h5>
      <button @click="this.confirm = false" class="btn btn-light m-2">OK</button>
    </div>
  </div>
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
        placeholder="Apellidos"
      />
    </div>
    <div class="form-group">
      <label for="">Direccion:</label>
      <input
        type="text"
        class="form-control"
        v-model="Empleado.direccion"
        placeholder="Direccion"
      />
    </div>
    <div class="form-group">
      <label for="">Ciudad:</label>
      <input
        type="text"
        class="form-control"
        v-model="Empleado.ciudad"
        placeholder="Ciudad"
      />
    </div>
    <div class="form-group">
      <label for="">Codigo Puesto:</label>
      <input
        type="number"
        class="form-control"
        v-model="Empleado.fkPuesto"
        placeholder="Codigo Puesto"
      />
    </div>

    <div class="form-group">
      <label for="">Codigo Departamento:</label>
      <input
        type="number"
        class="form-control"
        v-model="Empleado.fkDepartamento"
        placeholder="Codigo Departamento"
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
        Empleado: {},
        Alerta: false
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
            if(result.data.succeded){
              this.Empleado = {}
              this.confirm = true
            }else{
              this.Alerta = result.data.message
            }
            // window.location.href = "/Dashboard";
          });
      },
    },
  };
  </script>