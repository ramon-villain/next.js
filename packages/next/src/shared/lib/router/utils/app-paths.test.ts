import { normalizeRscPath } from './app-paths'

describe('normalizeRscPath', () => {
  it('should normalize url with .rsc', () => {
    expect(normalizeRscPath('/test.rsc')).toBe('/test')
  })
  it('should normalize url with .rsc and searchparams', () => {
    expect(normalizeRscPath('/test.rsc?abc=def')).toBe('/test?abc=def')
  })
})
