<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="This is a card subtitle"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
        title="This is a title"
      />

      <div class="text-center text-caption">Using Props Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template #title> This is a title </template>

        <template #subtitle> This is a card subtitle </template>

        <template #text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          ratione debitis quis est labore voluptatibus!
        </template>
      </v-card>

      <div class="text-center text-caption">Using Slots Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>This is a title</v-card-title>

          <v-card-subtitle>This is a card subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          ratione debitis quis est labore voluptatibus!
        </v-card-text>
      </v-card>

      <div class="text-center text-caption">Using Markup Only</div>
    </v-col>
  </v-row>
</template>

<script>
import products from "@/api/product/products.js";

export default {
  name: "Home",
  data() {
    return {
      //
    };
  },
  async created() {
    await products.getProducts().then((response) => {
      const data = response.data;

      console.log(data);
    });
  },
};
</script>
