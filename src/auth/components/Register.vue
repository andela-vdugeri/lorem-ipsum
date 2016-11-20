<template>
  <div class="container margin-top">
    <div class="row">
      <div class="col-md-6 col-md-offset-5">
        <div class="panel panel-default">
         <div class="panel-heading">
           Register User
         </div>
         <div class="panel-body">
           <div class="alert alert-danger" v-if="error.state">
             {{ error.message }}
           </div>
           <div class="alert alert-success" v-if="success.state">
             {{ success.message }}
           </div>
           <div class="form-group">
             <label for="email-address" class="control-label">Email Address</label>
             <input
              type="text"
              id="emai-address"
              class="form-control"
              placeholder="Email Address"
              v-model="email"
            >
           </div>
           <div class="form-group">
             <label for="user-role" class="control-label">User Role</label>
             <select v-model="role" class="form-control">
               <option v-for="role in roles" v-bind:value="role.id">
                 {{role.name}}
               </option>
             </select>
           </div>
           <div class="form-group">
             <input
              type="button"
              class="btn btn-primary pull-right"
              v-on:click="handleClick"
              value="Submit"
            >
           </div>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MailService from '../services/mailer.js';
  import UserService from '../services/auth';
  export default {
    data() {
      return {
        error: {
          state: false,
          message: ''
        },
        success: {
          state: false,
          message: ''
        },
        email: '',
        roles : [
          {id: 1, name: 'Staff'},
          {id: 2, name: 'Student'}
        ],
        role: '2'
      };
    },
    methods: {
      handleClick() {
        UserService.checkMailDup(this, this.email).then(res => {
          UserService.checkTokenDup(this, this.email).then(res => {
            MailService.sendMail(this, this.email, this.role).then(res => {
              this.error.state = false;
              this.success.state = true;
              this.success.message = 'Please check your email to complete your registration';
              this.email = '';
            }).catch(err => {
              this.error.state = true;
              this.error.message = 'This email is already in use';
            });
          }).catch(err => {
            this.error.state = true;
            this.error.message = 'This email is alread in use';
          })
        }).catch(err => {
          this.error.state = true;
          this.error.message = 'This email is already in use';
        });
      }
    }
  }
</script>
