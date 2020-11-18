<template>
  <v-row class="justify-center">
    <v-card class="tertiary pa-1" width="70%">
      <h1 class="ma-5 pa-5 d-flex justify-center secondary textTitle--text font-weight-black">Como contactar me </h1>
      
      <v-card elevation="11" class="ma-5 pa-5 quaterny">
        <v-row class="justify-center align-center">
          <v-col cols="5.5">
            <v-icon>mdi-phone</v-icon>
            <h2 class="ma-2 d-flex justify-end textLabel--text">Por telefono o whatsapp : </h2>
          </v-col>
          <v-col cols="6 d-flex justify-start">
            <h2 class="ma-2 d-flex justify-end textValue--text">+502 5555 5555 </h2>
          </v-col>
        </v-row>
        <v-row class="justify-center align-center">
          <v-col cols="6">
            <v-icon>mdi-mail</v-icon>
            <h2 class="ma-2 d-flex justify-end textLabel--text">Por coreo electronico : </h2>
          </v-col>
          <v-col cols="6 d-flex justify-start">
            <h2 class="ma-2 d-flex justify-end textValue--text">pablo.tatoos@gmail.com</h2>
          </v-col>
        </v-row>
         <v-row class="justify-center align-center">
          <v-col cols="6">
            <v-icon>mdi-instagram</v-icon>
            <h2 class="ma-2 d-flex justify-end textLabel--text">Por instagram : </h2>
          </v-col>
          <v-col cols="6 d-flex justify-start">
            <h2 class="ma-2 d-flex justify-end textValue--text">YUMKIMILGOOTA</h2>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="ma-5 pa-5 quaterny" elevation="11">
        <h1 class="ma-2 d-flex justify-center textLabel--text">Manda un menssage</h1>
        <v-divider></v-divider>
        <v-row class="justify-center align-center">          
          <v-col cols="6">
            <v-row class="justify-center align-center">          
          <v-col cols="6">
            <h2 class="ma-2 d-flex justify-end textLabel--text">Appelido : </h2>
          </v-col>
          <v-col cols="6 d-flex justify-start">
            <v-text-field v-model="messageName" background-color="tertiary" color="primary"  rounded height="60px" class="font-weight-black text-h4 ma-2 pa-2 shrink"></v-text-field>
        
          </v-col>
        </v-row>
        <v-row class="justify-center align-center">          
          <v-col cols="6">
            <h2 class="ma-2 d-flex justify-end textLabel--text">Telefono : </h2>
          </v-col>
          <v-col cols="6 d-flex justify-start">
            <v-text-field type="tel" v-model="messageTel" background-color="tertiary" color="primary"  rounded height="60px" class="font-weight-black text-h4 ma-2 pa-2 shrink"></v-text-field>
        
          </v-col>
        </v-row>
        <v-row class="justify-center align-center">          
          <v-col cols="6">
            <h2 class="ma-2 d-flex justify-end textLabel--text">Titulo del menssage : </h2>
          </v-col>
          <v-col cols="6 d-flex justify-start">
            <v-text-field v-model="messageTitle" background-color="tertiary" color="primary"  rounded height="60px" class="font-weight-black text-h4 ma-2 pa-2 shrink"></v-text-field>
        
          </v-col>
        </v-row>
         </v-col>
         <v-divider vertical></v-divider>
          <v-col cols="5.5 ">
            <v-row class="justify-center"><h2 class="ma-2 textLabel--text">Menssage : </h2></v-row>
            <v-row class="justify-center"><v-textarea rounded height="300" v-model="message" background-color="tertiary" color="primary" class="font-weight-black text-h4 ma-2 pa-2 "></v-textarea>
        </v-row>
          </v-col>
        </v-row>
        <v-card-actions>
        <v-row class="justify-center align-center">
                 
        <v-btn class="ma-3 pa-10 font-weight-black black--text text-h5 " rounded large @click="sendMessage" solo color="success">Confirmar menssage</v-btn>

        </v-row> 
      </v-card-actions>
      </v-card>
      
            
      
      </v-card>
      </v-row>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'contacto',
  components: {
  },
  data(){
    return{
      message:"",
      messageName:"",
      messageTel:'',
      messageTitle:"",
    }
  },
  methods:{
    sendMessage(){

    },
  }
}
</script>
