import AuthService from '../services/authService'
import { AuthenticationError } from 'apollo-server-express'
import { USER_ROLE } from '../helper/enum'
import { getToken } from '../helper/auth'

const getAuth = async (accessToken) => {
  try {
    if (!accessToken) {
      throw Error()
    }

    const authService = new AuthService()
    const [tokenType, tokenValue] = getToken(accessToken)
    const { data } = await authService.verifyToken(tokenType, tokenValue)

    return {
      userId: data.results.userId,
      role: data.results.role,
      scopes: data.results.scopes,
    }
  } catch (error) {
    return null
  }
}

const isLoggedIn = (root, args, { user }) => {
  if (user === null) {
    throw new AuthenticationError('Unauthorized')
  }
}

const isAdmin = (root, args, { user }) => {
  if (user.role !== USER_ROLE.ENUM.ADMIN) {
    throw new AuthenticationError('Admin role is required')
  }
}

const hasPermissionProductWrite = (root, args, { user }) => {
  const requireScope = 'product.write'
  if (!user.scopes.includes(requireScope)) {
    throw new AuthenticationError(`scope ${requireScope} is required`)
  }
}

export {
  getAuth,
  isLoggedIn,
  isAdmin,
  hasPermissionProductWrite,
}
