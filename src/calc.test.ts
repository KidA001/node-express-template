// call jest.mock to mock a dependency of the module your testing
// jest.mock('redis');

import * as calc from './calc';

describe('division', () => {
  // available lifecycle methods: beforeAll, afterAll, beforeEach, afterEach

  test('4 divided by 2 is 2', () => {
    expect(calc.divide(4, 2)).toBe(2);
  });

  describe('when dividing by zero', () => {
    it('should throw an error', () => {
      expect(() => calc.divide(4, 0)).toThrowError('Cannot divide by zero!');
    });
  });

  describe('spying', () => {
    it('adds jest mock attributes without mocking functionality', () => {
      jest.spyOn(calc, 'divide');
      calc.divide(4, 2);
      expect(calc.divide).toHaveBeenCalled();
    });
  });

  describe('mocking', () => {
    it('creates a new mock function', () => {
      const mockFn = jest.fn().mockReturnValue(-1);
      expect(mockFn()).toBe(-1);
      expect(mockFn).toHaveBeenCalled();
    });
  });
});
