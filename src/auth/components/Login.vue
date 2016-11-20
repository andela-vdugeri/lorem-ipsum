<template>
  <div class="container margin-top">
    <div class="col-md-5 col-md-offset-5">
      <div class="alert alert-info" v-if="message">
        {{ message }}
      </div>
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
              type="password"
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
  import AuthService from '../services/auth';
  import {router} from '../../main';

  export default {
    mounted() {
      const user = JSON.parse(localStorage.getItem('school-portal-user'));
      if(user) {
        this.message = 'Your account has been created. Please login to continue';
        this.username = user.username;
        localStorage.removeItem('school-portal-user');
      }
    },

    data () {
      return {
        username: '',
        password: '',
        message: '',
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
        const user = {
          username: this.username,
          password: this.password,
        };
        AuthService.login(this, this.password).then(user => {
          localStorage.setItem('school-portal-user', JSON.stringify(user));
          router.push('/home');
        }).catch(err => {
          this.errors.message = err.message;
        });
      }
    }
  }
</script>

<style>

</style>
