import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isBoolean(
  control: AbstractControl,
): ValidationErrors | null {
  if (typeof control.value === 'boolean') {
    return null;
  }

  return {
    invalidBoolean: true,
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
