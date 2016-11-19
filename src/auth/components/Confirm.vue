<template>
    <div class="margin-top">
        <div class="col-md-5 col-md-offset-3">
          <div class="alert alert-danger" v-if="!validated">
            <h4 class="text-center">Invalid registration token provided</h4>
          </div>
        </div>
    </div>
</template>

<style>
    .margin-top {
        margin: 120px 0 0 0;
    }
</style>

<script>
  import {router} from '../../main';
  import AuthService from '../services/auth';
  export default {
    mounted() {
      this.token = router.history.current.query.token;
      this.matchUserToken().then(success => {
        if(success.success) {
          this.validated = true;
          router.push('/student');
        } else {
          this.validated = false;
        }
      })
      .catch(error => {
        this.validated = false;
      });
    },
    data() {
      return {
          token: '',
          validated: false,
      }
    },
    methods: {
      matchUserToken() {
        return new Promise((resolve, reject) => {
          AuthService.getToken(this, this.token).then(success => {
            resolve(success);
          })
          .catch(error => {
            reject(error);
          });
        });
      }
    }
  }
</script>