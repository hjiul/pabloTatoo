<template>
<v-container >
     <v-app-bar
      color="#BDBDBD"
      dark
      app
      elevate-on-scroll
      rounded
      prominent
      shrink-on-scroll
    >
    <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          src="../assets/pablobanniere.png"
          
        ></v-img>
      </template>
      
      
      <template v-slot:extension>
        <v-tabs right>
          <v-tab @click="$emit('tienda')" class="secondary textTitle--text font-weight-black text-subtitle-1 ml-4 mr-1"> tienda</v-tab>
          <v-tab @click="$emit('servicios')" class="secondary textTitle--text font-weight-black text-subtitle-1 mx-1">Servicios</v-tab>
          <v-tab @click="$emit('catalogo')" class="secondary textTitle--text font-weight-black text-subtitle-1 mx-1">Catalogo</v-tab>
          <v-tab @click="$emit('contacto')" class="secondary textTitle--text font-weight-black text-subtitle-1 mx-1">Contacto</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
     </v-container>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-abugida-thai', route:'/' },
          { title: 'About', icon: 'mdi-account', route:'/About'  },
        ],
        mini:true,
      }
    },
  }
</script>