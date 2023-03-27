<script setup lang="ts">
import BP from '../components/Servicios/Busq/Puestos.vue';
import BC from '../components/Servicios/Busq/Clientes.vue';
import BD from '../components/Servicios/Busq/Departamentos.vue'
import BE from '../components/Servicios/Busq/Empleados.vue'
import BF from '../components/Servicios/Busq/Facturas.vue'
import BR from '../components/Servicios/Busq/Roles.vue'
import BU from '../components/Servicios/Busq/Usuarios.vue'

import CC from '../components/Servicios/Agregar/Clientes.vue'
import CD from '../components/Servicios/Agregar/Departamentos.vue'
import CE from '../components/Servicios/Agregar/Empleados.vue'
import CF from '../components/Servicios/Agregar/Facturas.vue'
import CP from '../components/Servicios/Agregar/Puestos.vue'
import CR from '../components/Servicios/Agregar/Roles.vue'
import CU from '../components/Servicios/Agregar/Usuarios.vue'

import BIP from '../components/Servicios/Busq_ID/Puestos.vue';
import BIC from '../components/Servicios/Busq_ID/Clientes.vue';
import BID from '../components/Servicios/Busq_ID/Departamentos.vue'
import BIE from '../components/Servicios/Busq_ID/Empleados.vue'
import BIF from '../components/Servicios/Busq_ID/Facturas.vue'
import BIR from '../components/Servicios/Busq_ID/Roles.vue'
import BIU from '../components/Servicios/Busq_ID/Usuarios.vue'


import {ref} from "vue";
const actual = ref(0);

const opciones = ref([
    {nombre:'Clientes', busqueda:false,Id:false,agregar:false},
    {nombre:'Departamentos', busqueda:false,Id:false,agregar:false},
    {nombre:'Empleados', busqueda:false,Id:false,agregar:false},
    {nombre:'Facturas', busqueda:false,Id:false,agregar:false},
    {nombre:'Puestos', busqueda:false,Id:false,agregar:false},
    {nombre:'Rols', busqueda:false,Id:false,agregar:false},
    {nombre:'Usuarios', busqueda:false,Id:false,agregar:false}
    ]);

const Clientes = () => {
  Clear()
    actual.value = 0
}

const Departamentos = () => {
  Clear()
    actual.value = 1
}

const Empleados = () => {
  Clear()
    actual.value = 2
}

const Facturas = () => {
  Clear()
    actual.value = 3
}
const Puestos = () => {
  Clear()
    actual.value = 4
}
const Rols = () => {
  Clear()
  actual.value = 5
}
const Usuarios = () => {
  Clear()
  actual.value = 6
}

const Clear = () => {
  opciones.value = ([
    {nombre:'Clientes', busqueda:false,Id:false,agregar:false},
    {nombre:'Departamentos', busqueda:false,Id:false,agregar:false},
    {nombre:'Empleados', busqueda:false,Id:false,agregar:false},
    {nombre:'Facturas', busqueda:false,Id:false,agregar:false},
    {nombre:'Puestos', busqueda:false,Id:false,agregar:false},
    {nombre:'Rols', busqueda:false,Id:false,agregar:false},
    {nombre:'Usuarios', busqueda:false,Id:false,agregar:false}
    ]);
}

const Buscar = () => {
  Clear()
  opciones.value[actual.value].busqueda = true
}

const Buscar_ID = () => {
  Clear()
  opciones.value[actual.value].Id = true
}  
const Agregar = () => {
  Clear()
  opciones.value[actual.value].agregar = true
}  
</script>

<template>
    <heder class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
            Sistem UPQROO</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <input class="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search">
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <RouterLink to="/" class="nav-link px-3" href="#">Sign out</RouterLink>
          </div>
        </div>
    </heder>

    <div class="container-fluid">
        <div class="row">
          <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" style="">
            <div class="position-sticky pt-3 sidebar-sticky">
      
              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                <span>Tablas CRUD</span>
                <a class="link-secondary" href="#" aria-label="Add a new report">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle align-text-bottom" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                </a>
              </h6>
              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a @click="Clientes()" class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text align-text-bottom" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Clientes
                  </a>
                </li>
                <li class="nav-item">
                  <a @click="Departamentos()" class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text align-text-bottom" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Departamentos
                  </a>
                </li>
                <li class="nav-item">
                  <a @click="Empleados()" class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text align-text-bottom" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Empleados
                  </a>
                </li>
                <li class="nav-item">
                  <a @click="Facturas()" class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text align-text-bottom" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Facturas
                  </a>
                </li>
                <li class="nav-item">
                  <a @click="Puestos()" class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text align-text-bottom" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Puestos
                  </a>
                </li><li class="nav-item">
                  <a @click="Rols()" class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text align-text-bottom" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Rols
                  </a>
                </li>
                <li class="nav-item">
                  <a @click="Usuarios()" class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text align-text-bottom" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Usuarios
                  </a>
                </li>
              </ul>
            </div>
          </nav>
      
          <div v-if="opciones[actual]" class="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2"> {{opciones[actual].nombre}}</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group me-2">
                        <button @click="Buscar()" type="button" class="btn btn-sm btn-outline-secondary">Buscar</button>
                        <button @click="Buscar_ID()" type="button" class="btn btn-sm btn-outline-secondary">Buscar por ID
                        </button>
                        <button @click="Agregar()" type="button" class="btn btn-sm btn-outline-secondary">Agregar</button>
                    </div>
                </div>
            </div>

            <div class="contenedor">
              <BC v-if="opciones[0].busqueda"></BC>
              <BD v-if="opciones[1].busqueda"></BD>
              <BE v-if="opciones[2].busqueda"></BE>
              <BF v-if="opciones[3].busqueda"></BF>
              <BP v-if="opciones[4].busqueda"></BP>
              <BR v-if="opciones[5].busqueda"></BR>
              <BU v-if="opciones[6].busqueda"></BU>

              <CC v-if="opciones[0].agregar"></CC>
              <CD v-if="opciones[1].agregar"></CD>
              <CE v-if="opciones[2].agregar"></CE>
              <CF v-if="opciones[3].agregar"></CF>
              <CP v-if="opciones[4].agregar"></CP>
              <CR v-if="opciones[5].agregar"></CR>
              <CU v-if="opciones[6].agregar"></CU>

              <BIC v-if="opciones[0].Id"></BIC>
              <BID v-if="opciones[1].Id"></BID>
              <BIE v-if="opciones[2].Id"></BIE>
              <BIF v-if="opciones[3].Id"></BIF>
              <BIP v-if="opciones[4].Id"></BIP>
              <BIR v-if="opciones[5].Id"></BIR>
              <BIU v-if="opciones[6].Id"></BIU>
            </div>
            
          </div>
        </div>
    </div>
</template>