<template>
  <div class="container margin-top">
    <div class="row">
      <div class="col-md-7 col-md-offset-5">
        <div class="alert alert-danger" v-if="regError.message">
          {{regError.message }}
        </div>
        <div class="panel panel-default ">
          <div class="panel-heading">
            New User
          </div>
          <div class="panel-body">
            <form method="post" @submit.prevent>
              <div class="form-group" v-bind:class="{'has-success': success.firstname, 'has-error': errors.firstname }">
                <label for="firstname">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  class="form-control"
                  v-model="firstname"
                  v-on:blur="validateFirstName"
                >
              </div>

              <div class="form-group" v-bind:class="{'has-success': success.lastname, 'has-error': errors.lastname }">
                <label for="lastname">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  class="form-control"
                  v-model="lastname"
                  v-on:blur="validateLastName"
                >
              </div>

              <div class="form-group" v-bind:class="{'has-success': success.username, 'has-error': errors.username }">
                <label for="username">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  class="form-control"
                  v-model="username"
                  v-on:blur="validateUsername"
                >
              </div>
              <div class="form-group" v-bind:class="{'has-success': success.emailAddress, 'has-error': errors.emailAddress }">
                <label for="emailAddress">Email Address</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  class="form-control"
                  v-model="emailAddress"
                  v-on:blur="validateEmail"
                  :disabled="true"
                >
              </div>

              <div class="form-group" v-bind:class="{'has-success': success.password, 'has-error': errors.password }">
                <label for="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  class="form-control"
                  v-model="password"
                >
              </div>

              <div class="form-group" v-bind:class="{'has-success': success.password, 'has-error': errors.password }">
                <label for="repeat_password">Repeat Password</label>
                <input
                  type="password"
                  placeholder="Repeat Password"
                  class="form-control"
                  v-model="confirmPassword"
                  v-on:blur="validatePassword"
                >
              </div>

              <div class="form-group">
                <input
                  type="submit"
                  value="Save"
                  class="btn btn-primary pull-right"
                  :disabled="!formValid"
                  v-on:click="hadleSubmit"
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import {router} from '../main';
  import AuthServer from '../auth/services/auth';
  import ValidationServer from './../students/services/validate';

  export default {
    mounted() {
      this.emailAddress = localStorage.getItem('portal-confirm-email');
    },
    data () {
      return {
        firstname: '',
        lastname: '',
        emailAddress: '',
        username: '',
        password: '',
        confirmPassword: '',
        errors: {},
        success: {},
        regError: {},
      }
    },
    computed: {
      formValid () {
        return (this.firstname.trim().length && !this.errors.firstname) &&
        (this.lastname.trim().length && !this.errors.lastname) &&
        (this.emailAddress.trim().length && !this.errors.emailAddress) &&
        (this.username.trim().length && !this.errors.username) &&
        (this.password.trim().length && !this.errors.password) &&
        (this.confirmPassword.trim())
      }
    },
    methods: {
      validateUsername () {
        ValidationServer.username(this, this.username).then(isValid => {
          this.success.username = false;
          this.success.username = true
        })
        .catch(error => {
          console.log('username is invalid');
        })
      },

      validatePassword () {
        if ((this.confirmPassword.trim().length) && (this.password === this.confirmPassword)) {
          this.errors.password = false;
          this.successes.password = true
        } else {
          this.errors.password = true
        }
      },

      validateEmail () {
        ValidationServer.email(this, this.username).then(isValid => {
          this.errors.emailAddress = false;
          this.success.emailAddress = true
        })
        .catch(error => {
          this.errors.emailAdress = true
          console.log(error)
        })
      },

      validateFirstName () {
        if (this.firstname.trim().length) {
          this.errors.firstname = false;
          this.success.firstname = true
        } else {
          this.errors.firstname = true
        }
      },

      validateLastName () {
        if (this.lastname.trim().length) {
          this.errors.lastname = false;
          this.success.lastname = true
        } else {
          this.errors.lastname = true
        }
      },

      hadleSubmit () {
        const user = {
          firstName: this.firstname,
          lastName: this.lastname,
          username: this.username,
          emailAddress: this.emailAddress,
          password: this.password,
          RoleId: parseInt(localStorage.getItem('userRole')),
        };

        AuthServer.createUser(this, user).then((user) => {
          localStorage.removeItem('portal-confirm-email');
          localStorage.removeItem('userRole');
          localStorage.setItem('school-portal-user', JSON.stringify(user));
          router.push('/login');
        }).catch((err) => {
          this.regError = err;
        });
      }
    }
  }
</script>
