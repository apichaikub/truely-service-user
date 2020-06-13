import users from './users'

export default async ({ User }) => {
  try {
    for (const user of users) {
      await User.create(user)
    }
  } catch (e) {
    throw new Error(e)
  }
}
