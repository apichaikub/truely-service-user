const isNull = (value) => {
  return value === null
}

const isString = (value) => {
  return typeof value === 'string'
}

const isArray = (value) => {
  return Array.isArray(value)
}

const isObject = (value) => {
  if (typeof value !== 'object' || isArray(value) || isNull(value)) {
    return false
  }

  return true
}

const allkeysEqual = (value, dataType) => {
  if (!isObject(value)) {
    return false
  }

  for (const key in value) {
    if (typeof value[key] !== dataType) {
      return false
    }
  }

  return true
}

const getAllKeysExcept = (values = {}, keys = []) => {
  if (!isObject(values) || !isArray(keys)) {
    return
  }

  return Object.keys(values).reduce((result, key) => {
    if (!keys.includes(key)) {
      result[key] = values[key]
    }

    return result
  }, {})
}

const pick = (obj, keys) => {
  if (!isObject(obj) || !isString(keys) && !isArray(keys)) {
    return {}
  }

  if (isString(keys)) {
    return {
      [keys]: obj[keys],
    }
  }

  return keys.reduce((result, key) => {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key]
    }
    return result
  }, {})
}

export {
  isNull,
  isString,
  isArray,
  isObject,
  allkeysEqual,
  getAllKeysExcept,
  pick,
}
