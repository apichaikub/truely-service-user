import { isArray, allkeysEqual } from '../../utils/lib'

const createValidator = (...tests) => {
  return (value) => {
    return tests.every((test) => test(value))
  }
}

const isValidAttributes = (attributes) => {
  const isValidFormat = (attrs) => {
    return attrs.every((attr) => {
      return allkeysEqual(attr, 'string')
    })
  }
  const isValid = createValidator(isArray, isValidFormat)

  return isValid(attributes)
}

export {
  createValidator,
  isValidAttributes,
}
