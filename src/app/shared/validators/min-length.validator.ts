import { ValidatorFn, Validators } from '@angular/forms';

export function minLength(
  minLength: number,
  message: string,
): ValidatorFn {
  return (control) => {
    const error = Validators.minLength(minLength)(control);

    return error ? { ...error, message } : null;
  };
}
