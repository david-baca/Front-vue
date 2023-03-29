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
  <form v-on:submit.prevent="agregarRegistro" class="p-2">
    <editable :objeto_editar="Empleado">
    </editable>
    <div class=" row justify-content-end m-0">
      <button type="submit" class="btn btn-success">Guardar</button>
    </div>
  </form>
</div>
</template>
  
  <script>
  import axios from "axios";
  import editable from '../Editar/Form_edit.vue'

  export default {
    data() {
      return {
        confirm: false,
        Empleado: {
          nombre: "",
          apellidos: "",
          direccion: "",
          ciudad: "",
          fkPuesto: "",
          fkDepartamento: ""
        },
        Alerta: false
      };
    },
    components: {
      editable
    },
    methods: {
      agregarRegistro() {
        console.log(this.Empleado);
  
        axios
          .post("https://localhost:7294/Empleado", this.Empleado)
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