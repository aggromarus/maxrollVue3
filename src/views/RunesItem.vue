<template>
  <div class="test">
    <div> {{ post.id }}</div>
    <div> {{ post.Rune1 }}</div>
    <div> {{ post.Rune2 }}</div>
    <div v-if="post.Rune3"> {{ post.Rune3 }}</div>
    <div v-if="post.Rune4" > {{ post.Rune4 }}</div>
    <div v-if="post.Rune5" > {{ post.Rune5 }}</div>
    <div v-if="post.Rune6" > {{ post.Rune6 }}</div>
  </div>
</template>

<script>
export default {
  name: "RunesItem",
  props: {
    post: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>
.test {
  border: thick double #32a1ce;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}
</style>