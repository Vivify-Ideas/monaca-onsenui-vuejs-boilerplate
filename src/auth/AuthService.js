import axios from 'axios';

export default class AuthService {

  constructor () {
    this.authenticated = this.isAuthenticated()
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  login (loginData) {
    return axios.post('/Users/login', loginData).then(({data}) => {
      if (data && data.id) {
        this.setSession(data)
      }
    })
  }

  signup (signupData) {
    return axios.post('/Users', signupData).then(() => {
      return this.login({email: signupData.email, password: signupData.password});
    })
  }

  setSession (authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.ttl * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.id)
    localStorage.setItem('expires_at', expiresAt)

    axios.defaults.params = {access_token: authResult.id};
  }

  logout () {
    return axios.post('/Users/logout').then(() => {
      axios.defaults.params = {};
      // Clear access token from local storage
      localStorage.removeItem('access_token')
      localStorage.removeItem('expires_at')
    });
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}
