<template>
  <div id="app" v-cloak>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import navbar from './partials/Navbar.vue';
  export default {
    components: {
      navbar
    }
  };
</script>

