import { getLocaleContent } from './portfolio-content';

export function validateContactForm(values, locale = 'en') {
  const errors = {};
  const validation = getLocaleContent(locale).contact.form.validation;
  const name = values.name?.trim() || '';
  const email = values.email?.trim() || '';
  const message = values.message?.trim() || '';

  if (!name) errors.name = validation.nameRequired;
  else if (name.length > 120) errors.name = validation.nameLength;

  if (!email) errors.email = validation.emailRequired;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = validation.emailInvalid;
  else if (email.length > 255) errors.email = validation.emailLength;

  if (!message) errors.message = validation.messageRequired;
  else if (message.length > 5000) errors.message = validation.messageLength;

  return errors;
}
