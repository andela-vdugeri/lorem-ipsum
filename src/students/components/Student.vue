<template>
  <new-user></new-user>
</template>

<script>
  import ValidationServer from '../services/validate';
  import newUser from '../../partials/NewUser.vue';
  export default {
    components: {
      'new-user': newUser
    }
  }
</script>