<template>
  <div class="conteiner">
      <div class="row">
        <div class="col-12">
          <div class=" form-floating">
            <input type="number" class="form-control" id="floatingPassword"
            v-model="Id" @input="consultarFactura">
            <label for="floatingPassword">Ingresa el Id a buscar</label>
          </div>
        </div>
      </div>
    </div>
    <table v-if="factura" class="table">
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
        <tr :key="factura.pkFactora">
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
        Id: 0,
        factura: false
    };
  },
  methods: {
    consultarFactura() {
      axios.get("https://localhost:7294/Factura/"+this.Id.toString()).then((result) => {
        console.log(result.data.result);
        this.factura = result.data.value.result;
      });
    }
  },
};
</script>