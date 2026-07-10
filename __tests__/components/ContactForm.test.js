import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '@/components/ContactForm';
import { getLocaleContent } from '@/lib/portfolio-content';

const content = getLocaleContent('en');

describe('ContactForm Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders form fields and submit button', () => {
    render(<ContactForm locale="en" content={content} />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  test('shows validation errors on empty fields submission', async () => {
    render(<ContactForm locale="en" content={content} />);
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });

  test('submits form successfully and resets inputs', async () => {
    global.fetch.mockResolvedValueOnce({
      status: 201,
      json: async () => ({ message: 'Contact message saved.' }),
    });

    render(<ContactForm locale="en" content={content} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello world' } });

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/thank you! your message has been sent successfully/i)).toBeInTheDocument();
    });

    expect(screen.getByLabelText(/name/i).value).toBe('');
    expect(screen.getByLabelText(/email address/i).value).toBe('');
    expect(screen.getByLabelText(/message/i).value).toBe('');
  });
});
