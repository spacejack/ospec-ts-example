import o from 'ospec'

o.spec('test1', () => {
  o('equals', () => {
    o(1).equals(1)
    o('a').equals('a')
    o(Number.NaN).equals(Number.NaN)
  })
})

o.run()
