/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const customDarkTheme = {
  dark: true,
  colors: {
    background: "#15202b",
    surface: "#15202b",
    primary: "#4CAF50",
    secondary: "#03dac6",
    error: "#f44336",
    info: "#2196F3",
    success: "#5CBBF6",
    warning: "#fb8c00",
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: localStorage.themeMode ?? 'light', 
    themes: {
      light: {
        colors: {
          primary: '#5CBBF6',
          secondary: '#4CAF50',
        },
      },
      dark: customDarkTheme
    },
  },
})
