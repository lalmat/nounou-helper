<template>
  <div id="app">
    <div class="header">
      <router-link to="/childs">Enfants</router-link>
      <router-link to="/prices">Tarifs</router-link>
      <router-link to="/declare">Déclaration</router-link>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
