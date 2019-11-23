export function moneyConverter(input) {
  if (input !== null && typeof input !== 'undefined') {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }
  return String(input)
}
