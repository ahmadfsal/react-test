import {moneyConverter} from '../shared/Formatter'

test('Number formatter to IDR currency', () => {
  expect(moneyConverter(1000000)).toBe('1.000.000')
})