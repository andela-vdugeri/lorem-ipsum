<template>
  <div class="container margin-top">
    <div class="row">
      <div class="col-md-7 col-md-offset-5">
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
  import ValidationServer from './../students/services/validate'
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
          this.success.username = true
        })
        .catch(error => {
          this.errors.username = true
          console.log(error)
        })
      },

      validatePassword () {
        if ((this.confirmPassword.trim().length) && (this.password === this.confirmPassword)) {
          this.successes.password = true
        } else {
          this.errors.password = true
        }
      },

      validateEmail () {
        ValidationServer.email(this, this.username).then(isValid => {
          this.success.emailAddress = true
        })
        .catch(error => {
          this.errors.emailAdress = true
          console.log(error)
        })
      },

      validateFirstName () {
        if (this.firstname.trim().length) {
          this.success.firstname = true
        } else {
          this.errors.firstname = true
        }
      },

      validateLastName () {
        if (this.lastname.trim().length) {
          this.success.lastname = true
        } else {
          this.errors.lastname = true
        }
      },

      hadleSubmit () {
        console.log('Staff saved')
      }
    }
  }
</script>