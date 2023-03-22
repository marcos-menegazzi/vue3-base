<template>
  <v-main>
    <v-navigation-drawer floating elevation="0" permanent v-model="drawer">
      <v-row class="pa-4">
        <v-col class="auto">
          <v-avatar
            class="mb-4"
            color="grey-darken-1"
            size="64"
          ></v-avatar>
          <div>john@google.com</div>
        </v-col>
        <v-col cols="auto">
          <v-switch
            inset
            color="primary"
            v-model="darkMode"
            @change="toggleTheme()"
            label="Dark Mode"
          ></v-switch>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-list density="compact" nav active-color="secondary">
        <v-list-item title="Home" value="home" link to="/home" >
          <template v-slot:prepend>
            <v-avatar rounded="lg" color="green">
              <v-icon>mdi-home</v-icon>
            </v-avatar>
          </template>
        </v-list-item>
        <v-list-item title="About" value="about" link to="/about" >
          <template v-slot:prepend>
            <v-avatar rounded="lg" color="green">
              <v-icon>mdi-forum</v-icon>
            </v-avatar>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar elevation="0">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Title</v-app-bar-title>
      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
    <v-container >
      <router-view />
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  import { useTheme } from "vuetify"
  
  const drawer = ref(true)
  const theme = useTheme()
  const darkMode = ref(theme.global.name.value === 'dark' ? true : false)

  const toggleTheme = () => {
    theme.global.name.value = darkMode.value ? "dark" : "light"
    localStorage.themeMode = theme.global.name.value
  }
  
</script>
