<template>
<div>
  <div class="col-12" v-if="Editar == false">
      <div class=" form-floating p-2">
        <input type="number" class="form-control" id="floatingPassword"
        v-model="Id" @input="consultar">
        <label for="floatingPassword">Ingresa el Id a buscar</label>
      </div>
    </div>
    <div v-if="confirmacion_borrar" class="alert alert-danger d-flex align-items-center" role="alert">
      <h5 class="m-0 d-inline-block"> Se elimino Satisfactoriamente</h5>
      <button @click="this.confirmacion_borrar = false" class="btn btn-light m-2">OK</button>
    </div>

    <div v-if="confirmacion_editar" class="alert alert-success d-flex align-items-center" role="alert">
      <h5 class="m-0 d-inline-block"> Se Edito Satisfactoriamente</h5>
      <button @click="this.confirmacion_editar = false" class="btn btn-light m-2">OK</button>
    </div>

    <table v-if="Editar==false"  class="table">
      <thead>
        <tr>
            <th>Codigo Factora</th>
            <th>Razon Social</th>
            <th>Fecha</th>
            <th>RFC</th>
            <th>Cliente</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(factura,index) in Facturas" :key="factura.pkFactora">
          <th v-if="index+1==Id">{{ index+1 }}</th>  
          <mapeador v-if="index+1==Id" :mapear_objeto = factura></mapeador>
            <th v-if="index+1==Id">{{ factura.cliente.nombre }}</th>
            <div v-if="index+1==Id" class="btn-group" role="label" aria-label="">
                <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                <button @click="Borrar(factura.pk)"
                class="btn btn-danger"> Eliminar</button>

                <button type="button"
                v-on:click="this.Editar = {...factura}"
                class="btn ms-2 btn-warning">
                Editar</button>
            </div>
        </tr>
        </tbody>
    </table>

    <div v-if="Editar" class="shadow-lg p-3 mb-5 rounded-3">
      <editable :objeto_editar="Editar">
      </editable>
      <div class=" row justify-content-end m-0 p-4">
        <button class="me-3 col-auto btn btn-danger" @click="this.Editar=false">Cancelar</button>
        <button class=" col-auto btn btn-success" @click = "Guardar()">Guardar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import mapeador from '../../td_objeto.vue'
import editable from '../Editar/Form_edit.vue'
import comandos from "../../../Store/Peticiones"

export default {
  data() {
    return {
        Facturas: [],
        Editar: false,
        confirmacion_borrar: false,
        confirmacion_editar: false,
        Id: 0
    };
  },
  created: function () {
    this.Consultas();
  },
  components: {
    mapeador,
    editable
  },

  methods: {
    async Consultas(){
      this.Facturas = await comandos.Consultar("Factura")
    },
    async Guardar(){
        await axios.put("https://localhost:7294/Factura?id="+ this.Editar.pk.toString(), this.Editar)
        .then((result) => {
          console.log(result);
          this.Editar = false;
        }); //solo se actualiza al cambiar el indice de una matriz y como se actualizo siempre es 2
        this.Facturas = {}//por lo tanto borramos departamentos para que tenga 0 indices y cambie
        this.confirmacion_editar = true
        this.Consultas();
    },
    Borrar(codigo){
    axios.delete("https://localhost:7294/Factura?id="+ codigo.toString())
        .then((result) => {
          this.Consultas()
          this.confirmacion_borrar = true
        });
    },
  },
};
</script>