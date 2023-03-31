<template>
      <td v-if="objeto.nombre">{{ objeto.nombre }}</td>
      <td v-if="objeto.apellidos">{{ objeto.apellidos }}</td>
      <td v-if="objeto.telefono">{{ objeto.telefono }}</td>
      <td v-if="objeto.email">{{ objeto.email }}</td>
      <td v-if="objeto.direccion">{{ objeto.direccion }}</td>
      <td v-if="objeto.ciudad">{{ objeto.ciudad }}</td>
      <td v-if="objeto.razonSocial">{{ objeto.razonSocial }}</td>
      <td v-if="objeto.fecha">{{ objeto.fecha }}</td>
      <td v-if="objeto.rfc">{{ objeto.rfc }}</td>
      <td v-if="objeto.user">{{ objeto.user }}</td>
      <td v-if="objeto.password">{{ objeto.password }}</td>
      <td v-if="objeto.fechaRegistro">{{ objeto.fechaRegistro }}</td>
  </template>

<script>
export default {
  props: {
    mapear_objeto: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      objeto: this.mapear_objeto
    }
  },created() {
    this.objeto = Object.assign({}, this.mapear_objeto);
  },
  watch: {//funcion de vue para observar cambios
    mapear_objeto: {
      handler: function (nuevoObjeto) {
        this.objeto = Object.assign({}, nuevoObjeto);
      },
      deep: true
    }
  }
  
}
</script>
