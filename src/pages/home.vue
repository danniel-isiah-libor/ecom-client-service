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

        <br />

        <hr />

        <v-btn
          class="mt-2"
          color="primary"
          variant="tonal"
          rounded
          text="Add to Cart"
          @click="addToCart(item.id)"
        />
      </div>
    </v-col>

    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <v-container class="max-width">
              <v-pagination
                v-model="page"
                :length="totalItems"
                class="my-4"
                :total-visible="5"
              />
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-row>
</template>

<script>
import products from "@/api/product/products.js";
import carts from "@/api/product/carts.js";
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
      totalItems: 0,
    };
  },
  watch: {
    page() {
      this.fetch();
    },
  },
  async created() {
    await this.fetch();
  },
  methods: {
    async fetch() {
      await products.getProducts(this.page).then((response) => {
        const data = response.data;

        this.items = data.data;
        this.totalItems = data.last_page;
      });
    },

    async addToCart(productId) {
      await carts.addToCart(productId).then(() => {
        alert("Product added to cart");
      });
    },
  },
};
</script>
