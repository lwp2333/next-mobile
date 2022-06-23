/**
 *
 * @param min 最小数
 * @param max 最大数
 * @returns 范围内随机数
 */
export const randNum = (min: number, max: number) => Math.floor(Math.random()) * (max - min + 1) + min

/**
 *
 * @returns uuid
 */
export const generateUUID = () => {
  return URL.createObjectURL(new Blob()).substr(-36)
}
