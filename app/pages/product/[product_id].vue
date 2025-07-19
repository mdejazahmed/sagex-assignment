<template>
          <v-card class="mx-auto" max-width="800">
            <v-card-title class="text-h4 text-center pa-6">
              {{ product.name }}
            </v-card-title>
            
            <v-divider></v-divider>
            
            <v-card-text class="pa-6">
              <v-row>
                <v-col cols="12" md="6">
                  <v-img
                    src="https://lh5.googleusercontent.com/proxy/lyeQwpKylNzmG-EF2_Au0PuUqHlexUoN9A9HuYfShMMV8RoSDrar25uctgbaxXOzswz_75GRppypfTnml3HaQPvDiJ6KTT3P8VzSWzHw0ApXjGyVgQRvNVDrBw"
                    height="400"
                    cover
                    class="rounded"
                    :alt="product.name"
                  ></v-img>
                </v-col>
                
                <v-col cols="12" md="6">
                  <v-list>
                    <v-list-item>
                      <v-list-item-title>Product ID</v-list-item-title>
                      <v-list-item-subtitle>{{ product.id }}</v-list-item-subtitle>
                    </v-list-item>
                    
                    <v-list-item>
                      <v-list-item-title>Price</v-list-item-title>
                      <v-list-item-subtitle>
                        {{ product.price }}
                      </v-list-item-subtitle>
                    </v-list-item>
                    
                    <v-list-item>
                      <v-list-item-title>Available Quantity</v-list-item-title>
                      <v-list-item-subtitle>{{ product.quantity }}</v-list-item-subtitle>
                    </v-list-item>
                    
                    <v-list-item>
                      <v-list-item-title>Total Amount</v-list-item-title>
                      <v-list-item-subtitle>{{ product.total_amount }}</v-list-item-subtitle>
                    </v-list-item>
                    
                    <v-list-item>
                      <v-list-item-title>Created</v-list-item-title>
                      <v-list-item-subtitle>{{ product.created_at }}</v-list-item-subtitle>
                    </v-list-item>
                    
                    <v-list-item>
                      <v-list-item-title>Updated</v-list-item-title>
                      <v-list-item-subtitle>{{ product.updated_at }}</v-list-item-subtitle>
                    </v-list-item>
                  </v-list>
                  
                  <v-divider class="my-4"></v-divider>
                  
                  <v-text-field
                    v-model="selectedQuantity"
                    label="Quantity"
                    type="number"
                    :min="1"
                    :max="product.quantity"
                    variant="outlined"
                    class="mb-4"
                  ></v-text-field>
                  
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
</template>
<script setup>
import { useAppStore } from "~/stores/app";
import { reactive, ref } from "vue";
const route = useRoute();
definePageMeta({
  layout: "home",
});
const store = useAppStore();

let product = reactive({});
const selectedQuantity = ref(1)

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
