export const calcDiscount = (actual_price, discount) => {
  const final_price =
    Number(actual_price) - Number((actual_price * discount) / 100)

  return Number(final_price)
}
