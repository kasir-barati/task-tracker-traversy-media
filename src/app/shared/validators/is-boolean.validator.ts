import { ValidatorFn } from '@angular/forms';

export function isBoolean(message: string): ValidatorFn {
  return (control) => {
    if (typeof control.value === 'boolean') {
      return null;
    }

    return {
      invalidBoolean: true,
      message,
    };
  };
}

/**
 * You should return null in case if everything is fine
 *
 * Correct usage:
 * - function isBool(control) {
 *     if (typeof control.value === 'boolean') { return null; }
 *     return { isBool: typeof control.value !== 'boolean' }
 *   }
 *
 * Wrong usage:
 * - function isBool(control) { return { isBool: typeof control.value !== 'boolean' } }
 */
