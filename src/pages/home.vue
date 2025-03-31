<template>
  <v-row>
    <v-col v-for="item in items" :key="item.id" cols="12" md="4">
      <v-card
        :subtitle="item.sku"
        :text="item.description"
        :title="item.name"
      />

      <div class="text-center text-caption">
        Price: {{ item.price }} Stock: {{ item.stock }}
      </div>
    </v-col>

    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <v-container class="max-width">
              <v-pagination v-model="page" :length="15" class="my-4" />
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-row>
</template>

<script>
import products from "@/api/product/products.js";
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    const page = ref(1);

    return {
      page,
    };
  },
  data() {
    return {
      items: [],
    };
  },
  async created() {
    await products.getProducts().then((response) => {
      const data = response.data;

      this.items = data.data;
    });
  },
};
</script>
