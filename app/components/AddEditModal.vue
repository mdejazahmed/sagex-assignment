<script setup>
import { useAppStore } from "~/stores/app";
const store = useAppStore();
</script>
<template>
  <v-dialog :model-value="store.dialog" max-width="500" persistent>
    <v-card
      :subtitle="`${store.isEditing ? 'Update' : 'Create'} a Product`"
      :title="`${store.isEditing ? 'Edit' : 'Add'} a Product`"
    >
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              required
              density="compact"
              hide-details
              v-model="store.formModel.name"
              label="Name"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-number-input
              required
              prepend-inner-icon="mdi-currency-inr"
              density="compact"
              hide-details
              v-model="store.formModel.price"
              :min="1"
              label="Price"
            ></v-number-input>
          </v-col>
          <v-col cols="12">
            <v-number-input
              required
              density="compact"
              hide-details
              v-model="store.formModel.quantity"
              :min="1"
              label="Quantity"
            ></v-number-input>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-btn
          text="Cancel"
          variant="plain"
          @click="store.dialog = false"
        ></v-btn>


        <v-btn text="Save" @click="store.save"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
