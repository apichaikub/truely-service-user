import axios from 'axios'
import config from '../config'

/**
 * AuthService
 */
export default class AuthService {
  /**
   *
   * @param {String} tokenType
   * @param {String} tokenValue
   * @return { Object }
   */
  verifyToken(tokenType, tokenValue) {
    return axios({
      method: 'post',
      url: `${config.gateway.api}tokenvalidation/verify`,
      data: {
        tokenType: tokenType,
        accessToken: tokenValue,
      },
    })
  }
}
