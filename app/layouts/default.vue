
  <template>
    <v-layout>
      <NavigationDrawer />
      <v-main >
        <v-container>
          <slot />
        </v-container>
      </v-main>
    </v-layout>
  </template>
  
  <script setup>
  import NavigationDrawer from "@/components/NavigationDrawer.vue";
  </script>
  