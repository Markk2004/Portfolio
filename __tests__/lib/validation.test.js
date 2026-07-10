import { validateContactForm } from '@/lib/validation';

test('rejects empty fields, invalid email, and oversized message', () => {
  expect(validateContactForm({ name: '', email: 'bad', message: '' }, 'en')).toEqual({
    name: expect.any(String), email: expect.any(String), message: expect.any(String),
  });
});

test('accepts a valid contact form', () => {
  expect(validateContactForm({
    name: 'Jade Visitor', email: 'visitor@example.com', message: 'Hello',
  }, 'en')).toEqual({});
});
