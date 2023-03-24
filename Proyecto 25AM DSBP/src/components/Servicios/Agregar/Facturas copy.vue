<template>
    <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Razon social:</label>
              <input
                type="text"
                class="form-control"
                v-model="Factura.razon_social"
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
                v-model="Factura.fk_cliente"
                placeholder="Codigo Cliente"
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
        Factura: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.Factura);
  
        var datosEnviar = {
            razonSocial: this.Factura.razon_social,
            fecha: (this.Factura.fecha).toString(),
            rfc: this.Factura.rfc,
            fkCliente: this.Factura.fk_cliente
        };
        console.log(datosEnviar);
        axios
          .post("https://localhost:7294/Factura", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "/Dashboard";
          });
      },
    },
  };
  </script>