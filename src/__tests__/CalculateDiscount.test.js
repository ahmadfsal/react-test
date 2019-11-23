import {calcDiscount} from '../shared/CalculateDiscount'

test('Calculate discount', () => {
  expect(calcDiscount(1000000, 50)).toBe(500000)
})