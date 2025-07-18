// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
      defaultTheme: 'light',
      themes: {
        light: {
         
          colors: {
            background: '#F3F5F9',
            surface: '#FFFFFF',
            primary: '#2323c8',
            secondary: '#C8BCF6',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50', 
            warning: '#FFC107',
            text: '#000000',
            label: '#424242',
            lowPriority: '#7CB2C8',
            mediumPriority: '#FFA05B',
            highPriority: '#FF5B5B',
            count: '#4764FC',
            
          },
        },
        dark: {
         
          colors: {
            background: '#121212',
            surface: '#1E1E1E',
            primary: '#f4a55a', /* Inverted color of #0b5aa5 */
            secondary: '#C8BCF6',
            accent: '#018786',
            error: '#CF6679',
            info: '#018786',
            success: '#3DDC84',
            warning: '#FFB74D',
            text: '#E0E0E0',
            label: '#E0E0E0',
            lowPriority: '#9AC5D9',    // Lighter muted blue
            mediumPriority: '#FFB88C', // Lighter orange
            highPriority: '#FF8A80'  ,
            count: '#4764FC',
          },
        },
      },
    },
})
