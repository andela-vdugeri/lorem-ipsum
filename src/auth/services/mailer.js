'use strict';
import config from '../../../config/config.json';

export default {
  sendMail(context, emailAddress) {
    const code = Math.ceil(Math.random() + Math.random() + Math.random()) * 1000;
    const endpoint = config.apiUrl + 'users/email/confirm';
    return new Promise((resolve, reject) => {
      var req = {
        email: emailAddress,
        activationCode: code
      };

      context.$http.post(endpoint, req).then(res => {
        localStorage.setItem('portal-confirm-email', emailAddress);
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
    });
  }
}