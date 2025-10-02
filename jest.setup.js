require('@testing-library/jest-dom');

beforeAll(() => {
  jest.useFakeTimers();
});

beforeEach(() => {
  jest.setSystemTime(new Date('2024-01-01T00:00:00Z'));
});

afterAll(() => {
  jest.useRealTimers();
});

jest.mock('uuid', () => ({
  v4: jest.fn(() => 'fixed-id'),
}));
