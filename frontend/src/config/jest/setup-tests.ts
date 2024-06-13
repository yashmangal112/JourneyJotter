// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });

// setup-tests.ts
import { TextEncoder, TextDecoder } from 'util';
import dotenv from 'dotenv';

dotenv.config();

(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;

Object.defineProperty(global, 'import.meta', {
  value: {
    env: {
      VITE_API_PATH: process.env.VITE_API_PATH,
    },
  },
});
