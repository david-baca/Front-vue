<template>
    <table class="table">
        <thead>
        <tr>
            <th>pkFactora</th>
            <th>Razon Social</th>
            <th>fecha</th>
            <th>RFC</th>
            <th>fkCliente</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="factura in Facturas" :key="factura.pkFactora">
            <td>{{ factura.pkFactora }}</td>
            <td>{{ factura.razonSocial }}</td>
            <td>{{ factura.fecha }}</td>
            <td>{{ factura.rfc }}</td>
            <td>{{ factura.fkCliente }}</td>
            <div class="btn-group" role="label" aria-label="">
                <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                |<button
                type="button"
                v-on:click="borrarCliente(puesto.id)"
                class="btn btn-danger"
                >
                Eliminar</button
                >|
            </div>
        </tr>
        </tbody>
    </table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        Facturas: [],
    };
  },
  created: function () {
    this.consultarFacturas();
  },
  methods: {
    consultarFacturas() {
      axios.get("https://localhost:7294/Factura").then((result) => {
        console.log(result.data.result);
        this.Facturas = result.data.result;
      });
    }
  },
};
</script>