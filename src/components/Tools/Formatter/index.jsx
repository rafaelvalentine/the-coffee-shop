
export const formatAmount = num => {
  if (num === undefined) {
    return 0
  }
  if (num === null) {
    return 0
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
