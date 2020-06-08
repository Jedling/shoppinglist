<template>
  <div class="home">
    <shopping-item />
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingItem from "@/components/ShoppingItem.vue";

export default {
  name: "Home",
  components: {
    ShoppingItem
  }
};
</script>
