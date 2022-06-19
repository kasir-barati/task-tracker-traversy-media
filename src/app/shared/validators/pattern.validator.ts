import { ValidatorFn, Validators } from '@angular/forms';

export function pattern(
  pattern: RegExp | string,
  message: string,
): ValidatorFn {
  return (control) => {
    const error = Validators.pattern(pattern)(control);

    return error ? { ...error, message } : null;
  };
}
