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
    return axios.post('/login', loginData).then(({data}) => {
      if (data && data.accessToken && data.idToken) {
        this.setSession(data)
      }
    })
  }

  signup (signupData) {
    return axios.post('/signup', signupData).then(({data}) => {
      if (data && data.accessToken && data.idToken) {
        this.setSession(data)
      }
    })
  }

  setSession (authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    localStorage.setItem('user_profile', JSON.stringify(authResult.profile));
    this.userProfile = authResult.profile;
  }

  logout () {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('user_profile')
    this.userProfile = null
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}
