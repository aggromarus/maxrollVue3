<template>
  <Home/>
  <RunesList
      :posts="posts"
  />
  <button @click="fetchRunes">Список рунных слов</button>
  <div class="words">

  </div>
</template>

<script>
import Home from "@/views/Home.vue";
import RunesList from "@/views/RunesList.vue";
import axios from "axios";

export default {
  components: {
    RunesList,
    Home,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
    }
  },
  methods: {
    async fetchRunes() {
      try {
        const response = await axios.get('https://hellforge.vercel.app/api/v1/runes');
        let filterData = response.data.filter((obj)=>{
          return Object.keys(obj).some((key)=>{
            return obj[key] === 1;
          });
        });
        this.posts = filterData;
        // this.posts = response.data
        console.log(filterData)
      } catch (e) {
        alert('Ошибка получения данных')
      }
    }
  }
}
</script>

<style scoped>

</style>
