import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    products: [],
    dialog: false,
    isEditing: false,
    formModel: {
      id: null,
      name: "",
      price: null,
      quantity: null,
      total_amount: null,
      created_at: null,
      updated_at: null,
    },
    currentYear: new Date().getFullYear(),
  }),
  actions: {
    createNewDate() {
      return new Date().toLocaleDateString();
    },
    createNewRecord() {
      return {
        name: "",
        price: null,
        quantity: null,
        total_amount: null,
        created_at: null,
        updated_at: null,
      };
    },
    add() {
      this.formModel = this.createNewRecord();
      this.dialog = true;
    },
    edit(id) {
      const found = this.products.find((book) => book.id === id);
      this.isEditing = true;
      this.formModel = {
        id: found?.id,
        name: found?.name,
        price: found?.price,
        quantity: found?.quantity,
        total_amount: found?.total_amount,
        created_at: found?.created_at,
        updated_at: found?.updated_at,
      };

      this.dialog = true;
    },
    async remove(id) {
     const deleted = await $fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      const index = this.products.findIndex((book) => book.id === deleted.id);
      this.products.splice(index, 1);
    },
    async save() {
      if (this.isEditing) {
        const updatedProduct = await $fetch(
          `/api/products/${this.formModel.id}`,
          {
            method: "PUT",
            body: {
              name: this.formModel.name,
              price: this.formModel.price,
              quantity: this.formModel.quantity,
            },
          }
        );
        const index = this.products.findIndex(
          (book) => book.id === this.formModel.id
        );
        this.products[index] = updatedProduct;
      } else {
        const newProduct = await $fetch("/api/products", {
          method: "POST",
          body: {
            name: this.formModel.name,
            price: this.formModel.price,
            quantity: this.formModel.quantity,
          },
        });
        this.products.push(newProduct);
      }

      this.dialog = false;
      this.isEditing = false;
    },
    reset() {
      this.dialog = false;
      this.formModel = this.createNewRecord();
      this.products = [
        {
          id: 1,
          name: "To Kill a Mockingbird",
          price: 10,
          quantity: 1,
          total_amount: 1960,
          created_at: this.createNewDate(),
          updated_at: this.createNewDate(),
        },
        {
          id: 2,
          name: "1984",
          price: 20,
          quantity: 2,
          total_amount: 1949,
          created_at: this.createNewDate(),
          updated_at: this.createNewDate(),
        },
        {
          id: 3,
          name: "The Great Gatsby",
          price: 30,
          quantity: 3,
          total_amount: 1925,
          created_at: this.createNewDate(),
          updated_at: this.createNewDate(),
        },
        {
          id: 4,
          name: "Sapiens",
          price: 40,
          quantity: 4,
          total_amount: 2011,
          created_at: this.createNewDate(),
          updated_at: this.createNewDate(),
        },
        {
          id: 5,
          name: "Dune",
          price: 50,
          quantity: 5,
          total_amount: 1965,
          created_at: this.createNewDate(),
          updated_at: this.createNewDate(),
        },
      ];
    },
    getProductById(id) {
      return this.products.find((book) => book.id === id);
    },
  },
});
