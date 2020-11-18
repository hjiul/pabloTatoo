import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import es from 'vuetify/es5/locale/es';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { es },
      current: 'es',
    },
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    
    themes: {
      light: {
        primary: colors.grey.darken4,
        secondary: colors.grey.darken3,
        tertiary: colors.grey.lighten1,
        quaterny: colors.grey.lighten2,
        quinty: colors.grey.lighten4,
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        textTitle:colors.brown.lighten4,
        textBody:colors.yellow.darken3,
        textTable:colors.grey.darken4,
        textMenu:colors.amber.accent4,
        textLabel:colors.grey.darken4,
        textValue:'#01579B',
      },
    },
  },
});
