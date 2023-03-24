<template>
    <div v-if="borrar" class="alert alert-success d-flex align-items-center" role="alert">
      <h5 class="m-0 d-inline-block"> Se elimino Satisfactoriamente</h5>
      <button @click="this.borrar = false" class="btn btn-light m-2">OK</button>
    </div>

    <table v-if="editar==false" class="table">
        <thead>
        <tr>
            <th>Codigo Cliente</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Direccion</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="cliente in Clientes" :key="cliente.pkCliente">
            <td>{{ cliente.pkCliente }}</td>
            <td>{{ cliente.nombre }}</td>
            <td>{{ cliente.apellidos }}</td>
            <td>{{ cliente.telefono }}</td>
            <td>{{ cliente.email }}</td>
            <td>{{ cliente.direccion }}</td>
            <div class="btn-group" role="label" aria-label="">
                <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                <button
                type="button"
                v-on:click="VentanaBorrar(cliente.pkCliente)"
                class="btn btn-danger">
                Eliminar</button>
                <button
                type="button"
                v-on:click="consultarCliente(cliente.pkCliente)"
                class="btn ms-2 btn-warning">
                Editar</button>

            </div>
        </tr>
        </tbody>
    </table>

    <div v-if="editar">
      <form v-on:submit.prevent="editarRegistro">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                v-model="editar.nombre"
                placeholder="Nombre"
              />
            </div>
            <div class="form-group">
              <label for="">Apellidos:</label>
              <input
                type="text"
                class="form-control"
                v-model="editar.apellidos"
                placeholder="Nombre"
              />
            </div>
            <div class="form-group">
              <label for="">Telefono</label>
              <input
                type="text"
                class="form-control"
                v-model="editar.telefono"
                placeholder="Nombre"
              />
            </div>
            <div class="form-group">
              <label for="">Correo</label>
              <input
                type="email"
                class="form-control"
                v-model="editar.email"
                placeholder="Nombre"
              />
            </div>
            <div class="form-group">
              <label for="">Direccion</label>
              <input
                type="text"
                class="form-control"
                v-model="editar.direccion"
                placeholder="Nombre"
              />
            </div>
  
            <br />
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success">Editar</button>|
              |<button @click="this.editar = false" class="btn btn-danger"
                >Cancelar</button>|
            </div>
          </form>
    </div>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      borrar: false,
      editar: false,
      Clientes: [],
    };
  },
  created: function () {
    this.consultarClientes();
  },

  methods: {
    consultarClientes() {
      axios.get("https://localhost:7294/clientes").then((result) => {
        console.log(result.data.result);
        this.Clientes = result.data.result;
      });
    },

  consultarCliente(item) {
    axios.get("https://localhost:7294/clientes/"+item.toString()).then((result) => {
      console.log(result.data.result);
      this.editar = result.data.value.result;
    });
  },

  editarRegistro() {
    var datosEnviar = {
        nombre : this.editar.nombre,
        apellidos : this.editar.apellidos,
        telefono : this.editar.telefono,
        email : this.editar.email,
        direccion : this.editar.direccion
    };
    
    axios.put("https://localhost:7294/clientes?id="+ this.editar.pkCliente.toString(), datosEnviar)
        .then((result) => {
          console.log(result);
          this.consultarClientes()
          this.editar = false;
        });
  },
    
  VentanaBorrar(codigo){
    axios.delete("https://localhost:7294/clientes?id="+ codigo.toString())
        .then((result) => {
          console.log(result);
          this.consultarClientes()
          this.borrar = result.data.result;
        });
  }

  }
};
</script>