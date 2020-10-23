<template>
<h1>企画書とらんすれーたー</h1>
<div class="body">
  <input-table />
  <output-text />
</div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';
import InputTable from './components/InputTable.vue';
import OutputText from './components/OutputText.vue';

export default defineComponent({
  name: 'App',
  components: {
    InputTable,
    OutputText,
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
.body {
  display: flex;
  justify-content: center;
}
</style>
