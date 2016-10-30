<template>
  <div class="container margin-top">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="panel panel-default">
         <div class="panel-heading">
           Register User
         </div>
         <div class="panel-body">
           <div v-if="message.error || message.success" class="help-block" :class="{'alert alert-danger': message.error, 'alert alert-success': message.success}">
             adadada
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
  export default {
    data() {
      return {
        message: {},
        email: '',
      };
    },
    methods: {
      handleClick() {
        MailService.sendMail(this, this.email).then(res => {
          this.message.success = true;
        })
        .catch(err => {
          this.message.error = true;
        });
      }
    }
  }
</script>