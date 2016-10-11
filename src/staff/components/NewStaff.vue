<template>
  <new-user></new-user>
</template>


<script>
  import ValidationServer from '../../students/services/validate';
  import newUser from '../../partials/NewUser.vue';
  
  export default {
    components: {
      'new-user': newUser
    }
  }
</script>