import { getLocaleContent } from './portfolio-content';

export function validateContactForm(values, locale = 'en') {
  const errors = {};
  const content = getLocaleContent(locale);
  const validationMsgs = content.contact.form.validation;

  // Name validation
  if (!values.name || values.name.trim() === '') {
    errors.name = validationMsgs.nameRequired;
  } else if (values.name.length > 120) {
    errors.name = validationMsgs.nameLength;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email || values.email.trim() === '') {
    errors.email = validationMsgs.emailRequired;
  } else if (!emailRegex.test(values.email)) {
    errors.email = validationMsgs.emailInvalid;
  } else if (values.email.length > 255) {
    errors.email = validationMsgs.emailLength;
  }

  // Message validation
  if (!values.message || values.message.trim() === '') {
    errors.message = validationMsgs.messageRequired;
  } else if (values.message.length > 5000) {
    errors.message = validationMsgs.messageLength;
  }

  return errors;
}
