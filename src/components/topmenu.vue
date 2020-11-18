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
      class="mb-5"
      extension-height="125"
      
    >
    <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          src="../assets/pablobanniere.png"
          
        ></v-img>
      </template>
      
      
      <template v-slot:extension >
       
        <v-tabs height="42" class="align-bottom justify-space-around" active-class="primary textMenu--text font-weight-black text-subtitle-1 mx-1"> 
          <v-tab router to='/pablo' class="secondary textTitle--text font-weight-black text-subtitle-1 mx-1"> Pablo</v-tab>
          <v-tab router to='/servicios' class="secondary textTitle--text font-weight-black text-subtitle-1 mx-1">Servicios</v-tab>
          <v-tab router to='/drawings' class="secondary textTitle--text font-weight-black text-subtitle-1 mx-1">Dibujos</v-tab>
          <v-tab router to='/tatoos' class="secondary textTitle--text font-weight-black text-subtitle-1 mx-1">Tatoos</v-tab>
          <v-tab router to='/contacto' class="secondary textTitle--text font-weight-black text-subtitle-1 mx-1">Contacto</v-tab>
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