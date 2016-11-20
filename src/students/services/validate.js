import config from '../../../config/config.json';

class ValidationServer {
  constructor (config) {
    this.config = config;
    this.apiUrl = this.config.apiUrl;
  }

  username (context, username) {
    const endpoint = this.apiUrl + '/users/match/' + username;
    return new Promise((resolve, reject) => {
      context.$http.get(endpoint).then(user => {
        if (user) {
          reject();
        } else {
          resolve();
        }
      }).catch(error => {
        if(error.status === 404 ) {
            resolve({ message: 'No user with that username'});
        } else {
          reject(error);
        }
      });
    });
  }

  email (context, email) {
    const endpoint = this.apiUrl + '/users/email';
    const payload = {
      email,
    };
    
    return new Promise((resolve, reject) => {
      context.$http.post(endpoint, payload).then(user => {
        if (user) {
          reject();
        } else {
          resolve();
        }
      }).catch(error => {
        reject(error);
      });
    });
  }
}

export default new ValidationServer(config);
