<template>
  <v-card class="mx-auto">
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
          <td>
            <v-number-input
              control-variant="split"
              inset
              :model-value="item.quantity"
              @update:model-value="
                (value) => {
                  item.quantity = value;
                }
              "
            />
          </td>
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
import { VNumberInput } from "vuetify/labs/VNumberInput";
import carts from "@/api/product/carts.js";

export default {
  components: {
    VNumberInput,
  },
  data() {
    return {
      items: [],
    };
  },
  watch: {
    items: {
      handler(newItems) {
        console.log(newItems);
      },
      deep: true,
    },
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
