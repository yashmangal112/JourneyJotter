// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post( import.meta.env.VITE_API_PATH + '/api/auth/email-password/signup', () => {
    return new HttpResponse(null, {
      status: 200,
    });
  }),
];
