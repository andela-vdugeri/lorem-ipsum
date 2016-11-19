'use strict';
import config from '../../../config/config.json';

export default {
  getToken,
  checkMailDup,
};

function getToken(context, token) {
  const email = localStorage.getItem('portal-confirm-email');
  const endpoint =  `${config.apiUrl}users/token/confirm`;
  const payload = {
    token,
    email
  };

  return new Promise((resolve, reject) => {
    context.$http.post(endpoint, payload).then(success => {
      console.log('service', success.data);
      resolve(success.data);
    })
    .catch(error => {
      reject(error.data);
    });
  });
}

function checkMailDup(context, email) {
  const endpoint = `${config.apiUrl}tokens/${email}` ;
  return new Promise((resolve, reject) => {
    context.$http.get(endpoint).then(res => {
      reject(res.data);
    }).catch(err => {
      resolve(err.data);
    });
  });
}