import { ValidatorFn, Validators } from '@angular/forms';

export function maxLength(
  maxLength: number,
  message: string,
): ValidatorFn {
  return (control) => {
    const error = Validators.maxLength(maxLength)(control);

    return error ? { ...error, message } : null;
  };
}
