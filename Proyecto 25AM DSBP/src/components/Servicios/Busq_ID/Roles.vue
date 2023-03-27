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
    <h5 class="m-0 d-inline-block"> Se Edito Satisfactoriamente</h5>
    <button @click="this.confirmacion_editar = false" class="btn btn-light m-2">OK</button>
  </div>

  <table v-if="rol && Editar==false" class="table">
    <thead>
    <tr>
      <th>Codigo Rol</th>
        <th>Nombre</th>
        <th>Acciones</th>
    </tr>
    </thead>
    <tbody>
    <tr :key="rol.pkRol">
        <mapeador :mapear_objeto = rol></mapeador>
        <div class="btn-group" role="label" aria-label="">
            <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
            <button @click="Borrar(rol.pk)"
            class="btn btn-danger"> Eliminar</button>

            <button type="button"
            v-on:click="this.Editar = {...rol}"
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
      Id: 0,
      rol: null,
      Editar: false,
      Alerta: false,
      confirmacion_editar: false,
    };
  },
  components: {
    mapeador,
    editable
  },
  methods: {
    consultar() {
      if (this.Id) {
          axios
            .get("https://localhost:7294/Rol/" + this.Id.toString())
            .then((result) => {
              console.log(result.data.result);
              this.rol = result.data.value.result;
            });
        } else {
          this.rol = null;
        }
    },async Guardar(){
      await axios.put("https://localhost:7294/Rol?id="+ this.Editar.pk.toString(), this.Editar)
        .then((result) => {
          console.log(result);
          this.Editar = false;
        }); //solo se actualiza al cambiar el indice de una matriz y como se actualizo siempre es 2
      this.rol = {}//por lo tanto borramos departamentos para que tenga 0 indices y cambie
      this.confirmacion_editar = true
      this.consultar();
    },Borrar(codigo){
    axios.delete("https://localhost:7294/Rol?id="+ codigo.toString())
        .then((result) => {
          if(result.data.succeded == false){
          this.Alerta = result.data.message;
          }else{
            this.consultar()
            this.Alerta = "Se elimino correctamente"
          }
        });
    }
  },
};
</script>