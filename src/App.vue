<template>
  <v-app>

    
     <v-row class="primary">
        <topmenu         />
      </v-row>
      
      
    <v-main 
    class="primary mt-10"
    id="mainScreen"  
    >
     
      <router-view>
        
      </router-view> </v-main>
  </v-app>
</template>

<script>
import topmenu from '@/components/topmenu'

export default {
  name: 'app',
  components:{ topmenu },
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
