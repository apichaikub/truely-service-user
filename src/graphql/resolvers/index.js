import userResolvers from './user'
import meResolvers from './me'

export default [
  ...userResolvers,
  ...meResolvers,
]
