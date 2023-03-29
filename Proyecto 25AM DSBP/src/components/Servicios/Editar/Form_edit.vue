<template>
  <div>
    <div v-if="message.nombre != null" class="form-group">
      <label for="">Nombre:</label>
      <input type="text" class="form-control"
        v-model="message.nombre"
        placeholder="nombre" required
      />
    </div>

    <div v-if="message.telefono != null" class="form-group">
      <label for="">Telefono:</label>
      <input type="text" class="form-control"
        v-model="message.telefono"
        placeholder="Apellidos" required/>
    </div>

    <div v-if="message.email != null" class="form-group">
      <label for="">Email:</label>
      <input type="email" required class="form-control"
        v-model="message.email"
        placeholder="Email"/>
    </div>

    <div v-if="message.direccion != null" class="form-group">
      <label for="">Apellidos:</label>
      <input type="text" class="form-control"
        v-model="message.apellidos" required
        placeholder="Apellidos"/>
    </div>

    <div v-if="message.direccion != null" class="form-group">
      <label for="">Direccion:</label>
      <input type="text" class="form-control"
        v-model="message.direccion" required
        placeholder="Direccion"/>
    </div>

    <div v-if="message.ciudad != null" class="form-group">
      <label for="">Ciudad:</label>
      <input type="text" class="form-control"
        v-model="message.ciudad" required
        placeholder="Ciudad"
      />
    </div>

    <div v-if="message.razonSocial != null" class="form-group">
        <label for="">Razon social:</label>
        <input
          type="text"
          class="form-control"
          v-model="message.razonSocial"
          placeholder="Razon Social" required
        />
    </div>

    <div v-if="message.fecha != null" class="form-group">
      <label for="">Fecha:</label>
      <input
        type="date"
        class="form-control"
        v-model="message.fecha"
        placeholder="fecha" required
      />
    </div>

    <div v-if="message.rfc != null" class="form-group">
      <label for="">RFC:</label>
      <input
        type="text"
        class="form-control"
        v-model="message.rfc"
        placeholder="RFC" required
      />
    </div>

    <div v-if="message.user != null" class="form-group">
      <label for="">Usuario:</label>
      <input
        type="text"
        class="form-control"
        v-model="message.user"
        placeholder="Usuario" required
      />
    </div>

    <div v-if="message.password != null" class="form-group">
      <label for="">Contraseña:</label>
      <input
        type="text" required
        class="form-control"
        v-model="message.password"
        placeholder="contraseña"
      />
    </div>

    <div v-if="message.fkEmpleado != null" class="form-group">
      <label for="">Codigo Empleado</label>
      <label for="">Codigo Empleado:</label>
<select required v-model="message.fkEmpleado" class="form-select" aria-label="Default select example">
  <option v-for="item in Empleados" v-bind:value="item.pk">
    {{ item.nombre }}
  </option>
</select>

<!-- <select v-model="message.fkEmpleado">
  <option v-for="item in Empleados" v-bind:value="item.pk">
    {{ item.nombre }}
  </option>
</select>
<span>Seleccionado: {{ message.fkEmpleado }}</span>
{{ Empleados }} -->

    </div>
    
    <div v-if="message.fkRol != null" class="form-group">
      <label for="">Codigo Rol:</label>
<select required v-model="message.fkRol" class="form-select" aria-label="Default select example">
  <option v-for="item in Roles" v-bind:value="item.pk">
    {{ item.nombre }}
  </option>
</select>

    </div>

    <div v-if="message.fkCliente != null" class="form-group">
      <label for="">Codigo Cliente:</label>
<select required v-model="message.fkCliente" class="form-select" aria-label="Default select example">
  <option v-for="item in Clientes" v-bind:value="item.pk">
    {{ item.nombre }}
  </option>
</select>

    </div>
    <div v-if="message.fkPuesto != null" class="form-group">
      <label for="">Codigo Puesto:</label>
<select required v-model="message.fkPuesto" class="form-select" aria-label="Default select example">
  <option v-for="item in Puestos" v-bind:value="item.pk">
    {{ item.nombre }}
  </option>
</select>

    </div>

    <div v-if="message.fkDepartamento != null" class="form-group">
      <label for="">Codigo Departamento:</label>

<select required v-model="message.fkDepartamento" class="form-select" aria-label="Default select example">
  <option v-for="item in Departamentos" v-bind:value="item.pk">
    {{ item.nombre }}
  </option>
</select>

    </div>

    <br />
  </div>
</template>
  
  <script>

import comandos from '../../../Store/Peticiones'

    export default {
      props: {
        objeto_editar: {
          type: Object,
          required: true
        }
      },
      data() {
        return {
          message: this.objeto_editar,
          objeto: '',
          Puestos: false,
          Departamentos: false,
          Clientes: false,
          Empleados: false,
          Roles: false,
          option: false
        }
      },
      created: function (){
        this.Consultas()
      },
      methods: {
        async Consultas(){
          
        this.Clientes = await comandos.Consultar("clientes")
        this.Puestos = await comandos.Consultar("Puesto")
        this.Departamentos = await comandos.Consultar("Departamento")
        this.Empleados = await comandos.Consultar("Empleado")
        this.Roles = await comandos.Consultar("Rol")
      },
    }
  }
  </script>