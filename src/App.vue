<template>
  <div id="app" v-cloak>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import navbar from './partials/Navbar.vue'
  export default {
    components: {
      navbar
    }
  }
</script>
