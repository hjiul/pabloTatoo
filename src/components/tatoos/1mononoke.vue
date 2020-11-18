<template>
    <v-container >
        <v-card class="primary ma-5 pa-5" elevation="11" rounded>
            <v-card-title class="justify-center"><h1 class="textMenu--text font-weight-black">Princessa Mononoke</h1></v-card-title>
            <v-row justify="space-around" class="ma-5 pa-5">
                <v-col cols="4">
                    <v-card elevation="11" class="secondary ma-3 pa-3" rounded="">
                    <v-card-title class="justify-center"><h2 class="textTitle--text font-weight-black">Tatoo sin colores</h2></v-card-title>
                    <v-card-subtitle class="text-center my-3"><h3 class="quaterny--text">Tatoo hecho en novembre 2020. Todovia falta trabajo y colores</h3></v-card-subtitle>
                    <v-row class="justify-center ma-5"><v-img @click="image1Full=true" src="../../assets/tatoos/esteban_mononoke/esteban_mononoke.jpg" width="80%"></v-img></v-row>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card elevation="11" class="secondary ma-3 pa-3" rounded>
                    <v-card-title class="justify-center"><h2 class="textTitle--text font-weight-black">Zoom</h2></v-card-title>
                    <v-card-subtitle class="text-center my-3"><h3 class="quaterny--text">Zoom en el tatoo</h3></v-card-subtitle>
                    <v-row class="justify-center ma-5"><v-img @click="image2Full=true" src="../../assets/tatoos/esteban_mononoke/tatooMononokeZoom.jpg" width="80%"></v-img></v-row>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card elevation="11" class="secondary ma-3 pa-3" rounded>
                    <v-card-title class="justify-center"><h2 class="textTitle--text font-weight-black">Modelo</h2></v-card-title>
                    <v-card-subtitle class="text-center my-3"><h3 class="quaterny--text">Modelo del tatoo</h3></v-card-subtitle>
                    <v-row class="justify-center ma-5"><v-img @click="image3Full=true" src="../../assets/tatoos/esteban_mononoke/model.jpg" width="80%"></v-img></v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
     <v-dialog v-model="image1Full" width="80%" overlay-opacity="1" class="black"> <v-img class="ma-10 pa-10" src="../../assets/tatoos/esteban_mononoke/esteban_mononoke.jpg"></v-img></v-dialog>
<v-dialog v-model="image2Full" width="80%" overlay-opacity="1" class="black"> <v-img class="ma-10 pa-10" src="../../assets/tatoos/esteban_mononoke/tatooMononokeZoom.jpg"></v-img></v-dialog>
<v-dialog v-model="image3Full" width="80%" overlay-opacity="1" class="black"> <v-img class="ma-10 pa-10" src="../../assets/tatoos/esteban_mononoke/model.jpg"></v-img></v-dialog>

     </v-container>
</template>


<script>
  export default {
    data () {
      return {
          image1Full:false,
          image2Full:false,
          image3Full:false,
        
      }
    },
  }
</script>