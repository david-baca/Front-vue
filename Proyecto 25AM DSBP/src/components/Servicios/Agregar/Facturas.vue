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
      <label for="">Razon social:</label>
      <input
        type="text"
        class="form-control"
        v-model="Factura.razonSocial"
        placeholder="Razon Social"
      />
    </div>
    <div class="form-group">
      <label for="">Fecha:</label>
      <input
        type="date"
        class="form-control"
        v-model="Factura.fecha"
        placeholder="fecha"
      />
    </div>
    <div class="form-group">
      <label for="">RFC:</label>
      <input
        type="text"
        class="form-control"
        v-model="Factura.rfc"
        placeholder="RFC"
      />
    </div>
    <div class="form-group">
      <label for="">Codigo cliente:</label>
      <input
        type="number"
        class="form-control"
        v-model="Factura.fkCliente"
        placeholder="Codigo Cliente"
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
        Factura: {},
        confirm: false
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.Factura);
  
        var datosEnviar = {
            razonSocial: this.Factura.razonSocial,
            fecha: (this.Factura.fecha).toString(),
            rfc: this.Factura.rfc,
            fkCliente: this.Factura.fkCliente
        };
        console.log(datosEnviar);
        axios
          .post("https://localhost:7294/Factura", datosEnviar)
          .then((result) => {
            this.Factura = {}
            this.confirm = true
          });
      },
    },
  };
  </script>