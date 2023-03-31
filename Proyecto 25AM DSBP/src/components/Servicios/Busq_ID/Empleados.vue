<template>
<div>
  <div class="col-12" v-if="Editar == false">
    <div class=" form-floating p-2">
      <input type="number" class="form-control" id="floatingPassword"
      v-model="Id" @input="consultar">
      <label for="floatingPassword">Ingresa el Id a buscar</label>
    </div>
  </div>
  <div v-if="Alerta" class="alert alert-danger d-flex align-items-center" role="alert">
    <h5 class="m-0 d-inline-block">{{ Alerta }}</h5>
    <button @click="this.Alerta = false" class="btn btn-light m-2">OK</button>
  </div>

  <div v-if="confirmacion_editar" class="alert alert-success d-flex align-items-center" role="alert">
    <h5 class="m-0 d-inline-block"> Se edito satisfactoriamente</h5>
    <button @click="this.confirmacion_editar = false" class="btn btn-light m-2">OK</button>
  </div>

  <table v-if="Editar==false" class="table">
    <thead>
      <tr>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Direccion</th>
          <th>Ciudad</th>
          <th>Puesto</th>
          <th>Departamento</th>
          <th>Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(empleado, index) in Empleados" :key="empleado.id">
          <th v-if="index+1==Id" >{{ index+1 }}</th>
          <mapeador v-if="index+1==Id"  :mapear_objeto = empleado></mapeador>
          <mapeador v-if="index+1==Id"  :mapear_objeto = empleado.puesto></mapeador>
          <mapeador v-if="index+1==Id"  :mapear_objeto = empleado.departamento></mapeador>

          <div v-if="index+1==Id"  class="btn-group" role="label" aria-label="">
              <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
              <button @click="Borrar(empleado.pk)"
              class="btn btn-danger"> Eliminar</button>

              <button type="button"
              v-on:click="this.Editar = {...empleado}"
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

export default {
  data() {
    return {
      Empleados: [],
      Editar: false,
      Alerta: false,
      confirmacion_editar: false,
      Id: 0
    };
  },
  created: function () {
    this.consultarEmpleados();
  },
  components: {
    mapeador,
    editable
  },

  methods: {
    async Guardar(){
      await axios.put("https://localhost:7294/Empleado?id="+ this.Editar.pk.toString(), this.Editar)
        .then((result) => {
          console.log(result);
          if(result.data.succeded){
            this.Editar = false;
          }else{
            this.Alerta = result.data.message
          }
        }); //solo se actualiza al cambiar el indice de una matriz y como se actualizo siempre es 2
      if(this.Alerta == false){
        this.Empleados = {}//por lo tanto borramos departamentos para que tenga 0 indices y cambie
        this.confirmacion_editar = true
        this.consultarEmpleados();
      }
      
    },
    consultarEmpleados() {
      axios.get("https://localhost:7294/Empleado").then((result) => {
        console.log(result.data.result);
        this.Empleados = result.data.result;
      });
    },
    Borrar(codigo){
    axios.delete("https://localhost:7294/Empleado?id="+ codigo.toString())
        .then((result) => {
          this.consultarEmpleados()
          this.Alerta = "Se elimino satisfactoriamente"
        });
    },
  }
};
</script>