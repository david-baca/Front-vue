<template>
  <div>
    <div v-if="Alerta" class="alert alert-danger d-flex align-items-center" role="alert">
      <h5 class="m-0 d-inline-block"> {{ Alerta }}</h5>
      <button @click="this.Alerta = false" class="btn btn-light m-2">OK</button>
    </div>

    <div v-if="confirmacion_editar" class="alert alert-success d-flex align-items-center" role="alert">
      <h5 class="m-0 d-inline-block"> Se Edito Satisfactoriamente</h5>
      <button @click="this.confirmacion_editar = false" class="btn btn-light m-2">OK</button>
    </div>

    <table v-if="Editar==false" class="table">
        <thead>
        <tr>
            <th>Codigo Puesto</th>
            <th>Nombre</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="puesto in Puestos" :key="puesto.id">
            <mapeador :mapear_objeto = puesto></mapeador>
            <div class="btn-group" role="label" aria-label="">
                <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                <button @click="Borrar(puesto.pk)"
                class="btn btn-danger"> Eliminar</button>

                <button type="button"
                v-on:click="this.Editar = {...puesto}"
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
      Puestos: [],
      Editar: false,
      confirmacion_editar: false,
      Alerta: false,
    };
  },
  created: function () {
    this.consultarPuestos();
  },
  components: {
    mapeador,
    editable
  },

  methods: {
    consultarPuestos() {
      axios.get("https://localhost:7294/Puesto").then((result) => {
        console.log(result.data.result);
        this.Puestos = result.data.result;
      });
    },async Guardar(){
        await axios.put("https://localhost:7294/Puesto?id="+ this.Editar.pk.toString(), this.Editar)
        .then((result) => {
          console.log(result);
          this.Editar = false;
        }); //solo se actualiza al cambiar el indice de una matriz y como se actualizo siempre es 2
        this.Puestos = {}//por lo tanto borramos departamentos para que tenga 0 indices y cambie
        this.confirmacion_editar = true
        this.consultarPuestos();
    },
    Borrar(codigo){
    axios.delete("https://localhost:7294/Puesto?id="+ codigo.toString())
        .then((result) => {
          if(result.data.succeded == false){
          this.Alerta = result.data.message;
          }else{
            this.consultarPuestos()
            this.Alerta = "Se elimino correctamente"
          }
        });
    },
  },
};
</script>