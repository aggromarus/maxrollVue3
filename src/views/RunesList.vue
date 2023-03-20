<template>
<div>
  <h3>List runewords</h3>
  <RunesItem
  v-for="post in posts"
  :key="post.id"
  :post="post"
  />
</div>
</template>

<script>
import RunesItem from "@/views/RunesItem.vue";

export default {
  name: "RunesList",
  components: {RunesItem},
  props: {
    posts: {
      type: Array,
      require: true
    }
  }
}
</script>

<style scoped>

</style>