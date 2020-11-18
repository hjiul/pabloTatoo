<template>
    <v-row class="justify-center " align="top">
    <v-card width="70%" class="primary">
        <v-data-iterator
      :items="tatoos"
      :items-per-page.sync="ipp"
      :page.sync="page"
      hide-default-footer
      
      
    >
      <template v-slot:header>
        <v-toolbar
          class="mb-2"
          color="secondary"
          dark
          flat
        >
                <v-row class="justify-center">
          <h1 class="d-flex justify-center font-weight-black textMenu--text">Portfolio de Tatoos</h1>
                </v-row>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="tatoo in props.items"
            :key="tatoo.id"
            :cols="(12/itemsPerRow)"
          >
            <v-card :color="tatoo.color">
              <v-card-title class="subheading font-weight-bold d-flex justify-center text-h3 textMenu--text">
                {{ tatoo.name }}
              </v-card-title>

              <v-divider></v-divider>

              <h3 class="quinty--text text-center">{{tatoo.caption}}</h3>

              <v-divider></v-divider>
              <v-row justify="center" class="ma-5 pa-5">
              <v-img @click="detailsTatoo(tatoo.action)" width="100" :src="tatoo.src"></v-img>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-dialog v-model="tatooMononoke" width="80%" overlay-opacity="1"> <mononoke_1 /></v-dialog>
      </template>

      <template v-slot:footer>
        <v-toolbar
          class="mt-2"
          color="secondary"
          dark
          flat
        >
          <v-toolbar-title class="subheading">
            @2020 Pablo's tatoo
          </v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-iterator>
    </v-card>
    </v-row>



</template>

<script>
// @ is an alias to /src
import mononoke_1 from '@/components/tatoos/1mononoke.vue'

export default {
  name: 'tienda',
  components: {mononoke_1

  },
  data () {
      return {
        bottom: false,
          beers: [],
          rowsPerPageArray: [3, 4, 6],
          rpp: 4,
          page: 1,
          busy: false,
        itemsPerPage: 4,
      tatoos: [
        {
          id:0,
          name: 'Princessa mononoke',
          caption: "Practicando mi dibujos de animes!",
          src: require('../assets/tatoos/esteban_mononoke/tatooMononokeZoom.jpg'),
          color:"secondary",
          action:"tatooMononoke"
        },
      ],
        tatooMononoke:false,
        slides: [
          {id:0,message:'Princessa Mononoke',color:'secondary',action:"tatooMononoke",src:require('../assets/tatoos/esteban_mononoke/tatooMononokeZoom.jpg'),caption:"Practicando mi dibujos de animes!",
          images:[
            {id:0,src:require('../assets/tatoos/esteban_mononoke/esteban_mononoke.jpg'),title:"Tatoo sin colores",caption:"Tatoo hecho en novembre 2020. Todovia falta trabajo y colores"},
            {id:1,src:require('../assets/tatoos/esteban_mononoke/tatooMononokeZoom.jpg'),title:"Zoom",caption:"Zoom en el tatoo"},
            {id:2,src:require("../assets/tatoos/esteban_mononoke/model.jpg"),title:"Modelo",caption:"Modelo por el tatoo"},
          ]},
        ],
      }
    },
    methods:{
      detailsTatoo(name){
        if(name=="tatooMononoke"){
        this.tatooMononoke=true}
      },
      calcRowsPerPage () {
            let container = document.getElementById('container')
            let minItemHeight = 170
            if (container) {
                let containerHeight = parseInt(container.clientHeight, 0)
                this.rpp = Math.floor(containerHeight/minItemHeight)
            }
            else {
                this.rpp = 4
            }
        },
        nextPage () {
            if (this.page + 1 <= this.numberOfPages) this.page += 1
        },
        formerPage () {
            if (this.page - 1 >= 1) this.page -= 1
        },
    },
    created() {
       
   },
    computed: {
      numberOfPages () {
        return Math.ceil(this.beers.length / this.ipp)
      },
      rowsPerPage () {
        return this.rpp
      },
      // eslint-disable-next-line vue/return-in-computed-property
      itemsPerRow () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 1
          case 'sm': return 2
          case 'md': return 3
          case 'lg': return 3
          case 'xl': return 3
        }
      },
      ipp () {
         return Math.ceil(this.rowsPerPage * this.itemsPerRow)
      },
   },
   mounted() {
        window.addEventListener('resize', () => {
            //debounce
            if (!this.busy) {
                this.busy = true
                setTimeout(()=>{
                    this.calcRowsPerPage()
                    this.busy = false
                }, 300)
            }
        })
    }

}
</script>
