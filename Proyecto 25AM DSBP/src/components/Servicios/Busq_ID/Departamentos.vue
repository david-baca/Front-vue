<template>
  <div>
    <div class="col-12" v-if="Editar == false">
      <div class=" form-floating p-2">
        <input type="number" class="form-control" id="floatingPassword"
        v-model="Id" @input="consultarDepartamento">
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

    <table v-if="departamento && Editar == false" class="table">
        <thead>
        <tr>
            <th>Codigo Departamento</th>
            <th>Nombre</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        <tr :key="departamento.id">
            <mapeador :mapear_objeto = departamento></mapeador>
            <div class="btn-group" role="label" aria-label="">
                <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                <button @click="Borrar(departamento.pk)"
                class="btn btn-danger"> Eliminar</button>

                <button type="button"
                v-on:click="this.Editar = {...departamento}"
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
      departamento: false,
      Id: 0,
      Editar: false,
      confirmacion_borrar: false,
      confirmacion_editar: false,
    };
  },
  components: {
    mapeador,
    editable
  },
  methods: {
    async Guardar(){
      await axios.put("https://localhost:7294/Departamento?id="+ this.Editar.pk.toString(), this.Editar)
        .then((result) => {
          console.log(result);
          this.Editar = false;
        }); //solo se actualiza al cambiar el indice de una matriz y como se actualizo siempre es 2
      this.Departamento = {}//por lo tanto borramos departamentos para que tenga 0 indices y cambie
      this.confirmacion_editar = true
      this.consultarDepartamento();
    },
    consultarDepartamento() {
      axios.get("https://localhost:7294/Departamento/"+this.Id.toString()).then((result) => {
        console.log(result.data.value.result);
        this.departamento = result.data.value.result;
      });
    },Borrar(codigo){
    axios.delete("https://localhost:7294/Departamento?id="+ codigo.toString())
        .then((result) => {
          this.consultarDepartamento()
          this.confirmacion_borrar = true
        });
    }
  },
};
</script>