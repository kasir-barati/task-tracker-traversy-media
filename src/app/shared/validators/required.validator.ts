import { ValidatorFn, Validators } from '@angular/forms';

export function required(message: string): ValidatorFn {
  return (control) => {
    const error = Validators.required(control);

    return error ? { ...error, message } : null;
  };
}
