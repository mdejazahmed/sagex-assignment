<template>
  <v-navigation-drawer expand-on-hover class="bg-primary">
   
      <v-img
        src="https://cdn.prod.website-files.com/64140d099741e4d350b05b9e/64257fea0946351870ce56af_sageX-logo.svg"
       class="mx-auto"
      height="60"
      />
   
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item
        v-for="item in navItems"
        :key="item.value"
        :value="item.value"
        :to="item.to"
        :prepend-icon="item.icon"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
const navItems = [
  {
    title: "Products",
    icon: "mdi-home-outline",
    value: "home",
    to: "/",
  },
];
</script>
