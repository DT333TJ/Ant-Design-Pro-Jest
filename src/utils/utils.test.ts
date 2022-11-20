import { isUrl, sumFunc } from './utils';

describe('isUrl tests', (): void => {
  it('should return false for invalid and corner case inputs', (): void => {
    expect(isUrl([] as any)).toBeFalsy();
    expect(isUrl({} as any)).toBeFalsy();
    expect(isUrl(false as any)).toBeFalsy();
    expect(isUrl(true as any)).toBeFalsy();
    expect(isUrl(NaN as any)).toBeFalsy();
    expect(isUrl(null as any)).toBeFalsy();
    expect(isUrl(undefined as any)).toBeFalsy();
    expect(isUrl('')).toBeFalsy();
  });

  it('should return false for invalid URLs', (): void => {
    expect(isUrl('foo')).toBeFalsy();
    expect(isUrl('bar')).toBeFalsy();
    expect(isUrl('bar/test')).toBeFalsy();
    expect(isUrl('http:/example.com/')).toBeFalsy();
    expect(isUrl('ttp://example.com/')).toBeFalsy();
  });

  it('should return true for valid URLs', (): void => {
    expect(isUrl('http://example.com/')).toBeTruthy();
    expect(isUrl('https://example.com/')).toBeTruthy();
    expect(isUrl('http://example.com/test/123')).toBeTruthy();
    expect(isUrl('https://example.com/test/123')).toBeTruthy();
    expect(isUrl('http://example.com/test/123?foo=bar')).toBeTruthy();
    expect(isUrl('https://example.com/test/123?foo=bar')).toBeTruthy();
    expect(isUrl('http://www.example.com/')).toBeTruthy();
    expect(isUrl('https://www.example.com/')).toBeTruthy();
    expect(isUrl('http://www.example.com/test/123')).toBeTruthy();
    expect(isUrl('https://www.example.com/test/123')).toBeTruthy();
    expect(isUrl('http://www.example.com/test/123?foo=bar')).toBeTruthy();
    expect(isUrl('https://www.example.com/test/123?foo=bar')).toBeTruthy();
  });
});

describe('sumFunc tests', (): void => {
  expect(sumFunc()).toBe(0)
  expect(sumFunc('a123')).toBe(0)
  expect(sumFunc('','a123')).toBe(0)
  expect(sumFunc('a123', 'a321')).toBe(0)
  expect(sumFunc(false, false)).toBe(0)
  expect(sumFunc(true, true)).toBe(0)
  expect(sumFunc(true, false)).toBe(0)
  expect(sumFunc(false, true)).toBe(0)
  expect(sumFunc('-123', false)).toBe(0)
  expect(sumFunc('-123', '2')).toBe(0)
  expect(sumFunc(1, '2')).toBe(1)
  expect(sumFunc(1, 1)).toBe(2)
  expect(sumFunc(0.1, 0.1)).toBeCloseTo(0.2)
  expect(sumFunc(0.1, 0.2)).toBeCloseTo(0.3)
})
