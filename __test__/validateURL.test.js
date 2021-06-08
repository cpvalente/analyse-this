import { validateURL } from '../src/client/js/URLUtils';

const testPass = 'http://www.theguardian.com/somearticle';
const testFail = 'some random stuff';

test('validates url to true', () => {
  expect(validateURL(testPass)).toBe(true);
});

test('validates url to false', () => {
  expect(validateURL(testFail)).toBe(false);
});
