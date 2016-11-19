<template>
  <div class="container margin-top">
    <div class="col-md-5 col-md-offset-5">
      <div class="panel panel-default">
      <div class="panel-heading">Login</div>
      <div class="panel-body">
        <form method="post" @submit.prevent>
          <div class="form-group" v-bind:class="{'has-error': errors.username}">
            <label for="username">Username</label>
            <input
              type="text"
              placeholder="Usernmae"
              class="form-control"
              v-model="username"
            >
          </div>

          <div class="form-group" v-bind:class="{'has-error': errors.password}">
            <label for="password">Password</label>
            <input
              type="text"
              placeholder="Password"
              class="form-control"
              v-model="password"
            >
          </div>

          <div class="form-group">
            <input
              type="submit"
              value="Log In"
              class="btn btn-primary pull-right"
              :disabled="!formFilled"
              v-on:click="submitForm"
            >
          </div>
        </form>
      </div>
    </div>
    </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        username: '',
        password: '',
        errors: {}
      }
    },
    computed: {
      formFilled () {
        return this.password.trim().length && this.username.trim().length
      }
    },
    methods: {
      submitForm () {
        console.log('Hello')
      }
    }
  }
</script>

<style>

</style>
