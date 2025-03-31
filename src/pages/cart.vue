<template>
  <v-card class="mx-auto" max-width="300">
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Product Name</th>
          <th class="text-left">Quantity</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.product.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>
            <v-btn color="red" variant="text" @click="removeItem(item.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script>
import carts from "@/api/product/carts.js";

export default {
  data() {
    return {
      items: [],
    };
  },
  async created() {
    await this.fetch();
  },
  methods: {
    async fetch() {
      await carts.getCart().then((response) => {
        const data = response.data;

        this.items = data;
      });
    },
  },
};
</script>
