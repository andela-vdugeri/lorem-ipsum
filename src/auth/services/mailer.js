'use strict';
import config from '../../../config/config.json';

export default {
  sendMail(context, emailAddress, role) {
    const code = Math.floor(Math.random() * 10000) + 1000;
    const endpoint = config.apiUrl + '/users/email/confirm';
    return new Promise((resolve, reject) => {
      var req = {
        email: emailAddress,
        activationCode: code,
        role: role,
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
};
