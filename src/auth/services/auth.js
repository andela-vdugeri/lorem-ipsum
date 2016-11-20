'use strict';
import config from '../../../config/config.json';

class AuthServer {
  constructor(config) {
    this.config = config;
  }

  getToken(context, token) {
    const email = localStorage.getItem('portal-confirm-email');
    const endpoint = config.apiUrl + '/users/token/confirm';
    const payload = {
      token,
      email
    };

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
    const endpoint = config.apiUrl + '/tokens/' + email;
    return new Promise((resolve, reject) => {
      context.$http.get(endpoint).then(res => {
        reject(res.data);
      }).catch(err => {
        resolve(err.data);
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
}


export default new AuthServer(config);
