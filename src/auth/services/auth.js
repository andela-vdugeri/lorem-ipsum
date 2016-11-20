'use strict';
import config from '../../../config/config.json';

class AuthServer {
  constructor(config) {
    this.config = config;
  }

  getToken(context, token) {
    const email = localStorage.getItem('portal-confirm-email');
    const endpoint = config.apiUrl + '/tokens/match';
    const payload = {
      token,
      email
    };
    console.log(payload);
    return new Promise((resolve, reject) => {
      context.$http.post(endpoint, payload).then(success => {
        resolve(success.data);
      })
      .catch(error => {
        reject(error.data);
      });
    });
  }

  checkMailDup(context, email) {
    const endpoint = config.apiUrl + '/users/email';
    const payload = {
      email,
    };
    return new Promise((resolve, reject) => {
      context.$http.post(endpoint, payload).then(res => {
        reject(res.data);
      }).catch(err => {
        resolve(err.data);
      });
    });
  }

  checkTokenDup(context, email) {
    const endpoint = config.apiUrl + '/tokens/email/find';
    const payload = {
      email
    };
    return new Promise((resolve, reject) => {
      context.$http.post(endpoint, payload).then(res => {
        reject(res.data);
      }).catch(err => {
        resolve(err);
      });
    });
  }

  createUser(context, user) {
    const endpoint = config.apiUrl + '/users';
    return new Promise((resolve, reject) => {
      context.$http.post(endpoint, {user}).then((res) => {
        resolve(res.data);
      }).catch((err) => {
        console.log(err);
        reject(err);
      });
    });
  }

  login(context, user) {
    const endpoint = config.apiUrl + '/'
  }
}


export default new AuthServer(config);
