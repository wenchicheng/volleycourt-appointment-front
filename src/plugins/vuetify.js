/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { zhHant } from 'vuetify/locale'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: 'rgba(110, 171, 217,1)',
          secondary: 'rgb(224, 236, 246)',
          accent: 'rgb(26, 108, 163)',
          error: '#FF5252',
          info: 'rgb(70,70, 70)',
          success: '#4CAF50',
          // warning: '#FFC107'
          warning: '#fbffbc'
        }
      }
    }
  },
  locale: {
    locale: 'zhHant',
    messages: { zhHant }
  }
})
