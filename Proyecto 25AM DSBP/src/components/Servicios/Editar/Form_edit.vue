<template>
  <div>
    <div v-if="message.nombre != null" class="form-group">
      <label for="">Nombre:</label>
      <input type="text" class="form-control"
        v-model="message.nombre"
        placeholder="nombre"
      />
    </div>

    <div v-if="message.apellidos != null" class="form-group">
      <label for="">Apellidos:</label>
      <input type="text" class="form-control"
        v-model="message.apellidos"
        placeholder="Apellidos"/>
    </div>

    <div v-if="message.direccion != null" class="form-group">
      <label for="">Direccion:</label>
      <input type="text" class="form-control"
        v-model="message.direccion"
        placeholder="Direccion"/>
    </div>

    <div v-if="message.ciudad != null" class="form-group">
      <label for="">Ciudad:</label>
      <input type="text" class="form-control"
        v-model="message.ciudad"
        placeholder="Ciudad"
      />
    </div>

    <div v-if="message.razonSocial != null" class="form-group">
        <label for="">Razon social:</label>
        <input
          type="text"
          class="form-control"
          v-model="message.razonSocial"
          placeholder="Razon Social"
        />
    </div>

    <div v-if="message.fecha != null" class="form-group">
      <label for="">Fecha:</label>
      <input
        type="date"
        class="form-control"
        v-model="message.fecha"
        placeholder="fecha"
      />
    </div>

    <div v-if="message.rfc != null" class="form-group">
      <label for="">RFC:</label>
      <input
        type="text"
        class="form-control"
        v-model="message.rfc"
        placeholder="RFC"
      />
    </div>

    <div v-if="message.user != null" class="form-group">
      <label for="">Usuario:</label>
      <input
        type="text"
        class="form-control"
        v-model="message.user"
        placeholder="Usuario"
      />
    </div>

    <div v-if="message.password != null" class="form-group">
      <label for="">Contraseña:</label>
      <input
        type="text"
        class="form-control"
        v-model="message.password"
        placeholder="contraseña"
      />
    </div>

    <div v-if="message.fkEmpleado != null" class="form-group">
      <label for="">Codigo Empleado</label>
      <input
        type="number"
        class="form-control"
        v-model="message.fkEmpleado"
        placeholder="Codigo Empleado"
      />
    </div>
    
    <div v-if="message.fkRol != null" class="form-group">
      <label for="">Codigo Rol</label>
      <input
        type="number"
        class="form-control"
        v-model="message.fkRol"
        placeholder="Codigo Rol"
      />
    </div>

    <div v-if="message.fkCliente != null" class="form-group">
      <label for="">Codigo cliente:</label>
      <input
        type="number"
        class="form-control"
        v-model="message.fkCliente"
        placeholder="Codigo Cliente"
      />
    </div>

    <div v-if="message.fkPuesto != null" class="form-group">
      <label for="">Codigo Puesto:</label>
      <input
        type="number"
        class="form-control"
        v-model="message.fkPuesto"
        placeholder="Codigo Puesto"
      />
    </div>

    <div v-if="message.fkDepartamento != null" class="form-group">
      <label for="">Codigo Departamento:</label>
      <input
        type="number"
        class="form-control"
        v-model="message.fkDepartamento"
        placeholder="Codigo Departamento"
      />
    </div>

    <br />
  </div>
</template>
  
  <script>
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
          objeto: ''
        }
      },
    }
  </script>
  