<template>
  <v-app>

    
     <v-row class="primary">
        <topmenu 
        @tienda="tienda=true;servicios=false;catalogo=false;contacto=false"
        @servicios="tienda=false;servicios=true;catalogo=false;contacto=false"
        @catalogo="tienda=false;servicios=false;catalogo=true;contacto=false"
        @contacto="tienda=false;servicios=false;catalogo=false;contacto=true"
        
        />
      </v-row>
      <v-spacer class="my-5"></v-spacer>
    <v-main 
    class="primary overflow-y-auto"
    id="mainScreen"  
    max-height="600"
    >
     
      <v-row class="justify-center" v-if="tienda==true">
        <v-col cols="10">
          <tienda 
          @tienda="tienda=true;servicios=false;catalogo=false;contacto=false"
        @servicios="tienda=false;servicios=true;catalogo=false;contacto=false"
        @catalogo="tienda=false;servicios=false;catalogo=true;contacto=false"
        @contacto="tienda=false;servicios=false;catalogo=false;contacto=true"/>
        </v-col>
         
      </v-row>
      <v-row class="justify-center" v-if="servicios==true">
        <v-col cols="10">
          <servicios />
        </v-col>
         
      </v-row>
      <v-row class="justify-center" v-if="catalogo==true">
        <v-col cols="10">
          <catalogo />
        </v-col>
         
      </v-row>
      <v-row class="justify-center" v-if="contacto==true">
        <v-col cols="10">
          <contacto />
        </v-col>
         
      </v-row>
    
   








    </v-main>
  </v-app>
</template>

<script>
import topmenu from '@/components/topmenu'
import tienda from '@/views/tienda'
import contacto from '@/views/contacto'
import catalogo from '@/views/catalogo'
import servicios from '@/views/servicios'

export default {
  name: 'app',
  components:{ topmenu,tienda,servicios,catalogo,contacto },
  data () {
        return {
          
    tienda:true,
    servicios:false,
    catalogo:false,
    contacto:false,
  }
  },
  methods:{
    switchview(){

    }
  }
};
</script>
