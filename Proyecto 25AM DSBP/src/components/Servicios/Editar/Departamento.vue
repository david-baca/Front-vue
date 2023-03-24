<template>
    <div>
      <h1>{{ message }}</h1>
      <button @click="changeMessage">Cambiar mensaje</button>
    </div>
  </template>
  
  <script>
    export default {
      props: {
        initialMessage: {
          type: Object,
          required: true
        }
      },
      data() {
        return {
          message: this.initialMessage
        }
      },
      
      methods: {
        changeMessage() {
          this.message = 'Nuevo mensaje'
          this.$emit('messageChanged', this.message)
        }
      }
    }
  </script>