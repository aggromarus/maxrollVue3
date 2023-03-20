<template>
  <div class="app-container">
    <div class="content">
      <div class='header'>
        <div>Header
          <div>Logo + nav menu</div>
        </div>
      </div>
      <hr>
      <div class="Main">
        <div>Slider</div>
        <div>Game list</div>
        <div>Info + hot topics</div>
        <div>Social links</div>
        <div>Another slider with games</div>
      </div>
      <hr>
      <footer>
        <div>Footer
          <div>Logo&Social + Links</div>
        </div>
      </footer>
    </div>

  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  max-width: 80vw;
  margin: auto;
  border: 1px solid black;
}

.content {
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
}
</style>

