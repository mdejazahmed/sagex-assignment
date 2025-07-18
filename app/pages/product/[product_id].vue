<template>
  <h1>Product page {{ route.params.product_id }}</h1>
  <p>{{ product?.name }}</p>
  <p>{{ product?.price }}</p>
  <p>{{ product?.quantity }}</p>
  <p>{{ product?.total_amount }}</p>
  <p>{{ product?.created_at }}</p>
  <p>{{ product?.updated_at }}</p>
</template>
<script setup>
import { useAppStore } from "~/stores/app";
import { reactive } from "vue";
const route = useRoute();
definePageMeta({
  layout: "home",
});
const store = useAppStore();

let product = reactive({});

const { data } = await useFetch("/api/products/" + route.params.product_id);
product = data.value;

useHead({
  title: product?.name,
  meta: [{ name: "description", content: product?.name }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: 'console.log("Hello world")' }],
});
</script>
