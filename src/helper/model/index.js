import { RESPONSE_STATUS } from '../../helper/enum'
import { getAllKeysExcept } from '../../utils/lib'

const updateMany = async (model, data, options) => {
  const { primaryId } = options
  const results = []

  for (const input of data) {
    const values = getAllKeysExcept(input, [primaryId])
    const options = {
      where: {
        [primaryId]: input[primaryId],
      },
    }

    const response = await model.update(values, options)

    const result = response[0]?
      RESPONSE_STATUS.ENUM.SUCCESS :
      RESPONSE_STATUS.ENUM.FAIL

    results.push(result)
  }

  return results
}

export {
  updateMany,
}
