<script setup>
import { useAppStore } from "@/stores/app";

const headers = [
  { title: "Name", key: "name", align: "start" },
  { title: "Price", key: "price" },
  { title: "Quantity", key: "quantity" },
  { title: "Total Amount", key: "total_amount", align: "end" },
  { title: "Created At", key: "created_at", align: "end" },
  { title: "Updated At", key: "updated_at", align: "end" },
  { title: "Actions", key: "actions", align: "end", sortable: false },
];

const store = useAppStore();
const add = () => store.add();
const edit = (id) => store.edit(id);
const remove = (id) => store.remove(id);
const reset = () => store.reset();
const router = useRouter();
onMounted(async () => {
  try {
    const data = await $fetch("/api/products");
    store.products = data;
  } catch (error) {
    console.log(error);
  }
});
const onRowDoubleClick = (event, { item }) => {

  router.push(`/product/${item.id}`);
};
</script>
<template>
  <v-toolbar flat>
    <v-toolbar-title>
      <v-icon color="medium-emphasis" size="x-small" start></v-icon>

      Popular Products
    </v-toolbar-title>

    <v-btn
      class="me-2"
      prepend-icon="mdi-plus"
      rounded="lg"
      text="Add a Product"
      border
      @click="add"
    ></v-btn>
  </v-toolbar>
  <v-data-table
    :headers="headers"
    :hide-default-footer="store.products?.length < 11"
    :items="store.products"
    hover
    @dblclick:row="onRowDoubleClick"
  >
    <template v-slot:top> </template>

    <template v-slot:item.name="{ value }">
      <v-chip
        :text="value"
        prepend-icon="mdi-book"
        label
        color="primary"
        variant="outlined"
      >
        <template v-slot:prepend>
          <v-icon></v-icon>
        </template>
      </v-chip>
    </template>

    <template v-slot:item.actions="{ item }">
      <div class="d-flex ga-2 justify-end">
        <v-icon
          color="medium-emphasis"
          icon="mdi-pencil"
          size="small"
          @click="edit(item.id)"
        ></v-icon>

        <v-icon
          color="medium-emphasis"
          icon="mdi-delete"
          size="small"
          @click="remove(item.id)"
        ></v-icon>
      </div>
    </template>

    <template v-slot:no-data>
      <v-btn
        prepend-icon="mdi-backup-restore"
        rounded="lg"
        text="Reset data"
        variant="text"
        border
        @click="reset"
      ></v-btn>
    </template>
  </v-data-table>
</template>
