<template>
  <div id="app">
    <!-- <router-view/> -->
    <Layout />
  </div>
</template>

<script>
import Layout from './components/Layout';

export default {
  name: 'App',
  components: {
    Layout
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #E1F5FE;
  height: 100%;
  width: 100%;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
}
</style>
