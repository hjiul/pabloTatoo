<template>
  <v-card class="primary">
     <v-row class="primary" >
        <v-data-iterator
      :items="items"
      :items-per-page.sync="ipp"
      :page.sync="page"
      hide-default-footer
      class="d-flex flex-column mh-100 overflow-hidden"
      
      
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
            v-for="item in props.items"
            :key="item.name"
            :cols="(12/itemsPerRow)"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Calories:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.calories }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Fat:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.fat }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Carbs:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.carbs }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Protein:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.protein }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Sodium:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.sodium }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Calcium:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.calcium }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Iron:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.iron }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-toolbar
          class="mt-2"
          color="indigo"
          dark
          flat
        >
          <v-toolbar-title class="subheading">
            This is a footer
          </v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-iterator>




       <v-col cols="10">
     <v-carousel
     
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    
  >
    <v-carousel-item
      v-for="(slide) in slides"
      :key="slide.id"
      @click="detailsTatoo(slide.action)"

         
    >
      <v-sheet
        :color="slide.color"
        height="100%"
      >
      <h1 class="d-flex justify-center font-weight-black ma-5 pa-5">{{slide.message}}</h1>
        <v-row
          class="fill-height"
          justify="center"
        >
        <div><h3 class="textLabel--text" mr-10>{{slide.caption}}</h3></div>
          <div><v-img :src="slide.src" width="200"></v-img></div>
          
        </v-row>
        <v-row class="justify-center">
              <v-btn class="tertiary primary--text font-weight-black text-h3 pa-5 ma-5" large >Ver Mas</v-btn>
            </v-row>
      </v-sheet>
      <v-dialog v-model="tatooMononoke" width="80%" overlay-opacity="1"> <mononoke_1 /></v-dialog>
    </v-carousel-item>
  </v-carousel>
  </v-col>
     </v-row>

     <v-row class="my-5 primary">
       <v-col cols="12">
       <v-card class="tertiary pa-1" elevation="11">
      <h2 class="ma-2 pa-5 d-flex justify-center secondary textTitle--text font-weight-black">La mejor tienda de lanquin</h2>
      </v-card>
      </v-col>
     </v-row>

    
     
     
     
     
     
     
      </v-card>
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
      items: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%',
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
