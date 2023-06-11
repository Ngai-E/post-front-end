import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchPassword = (password: string) :ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const confirmPassword = control.value;
      const passwordControl = control.root.get(password);
      if (passwordControl) {
        const password = passwordControl.value;
        if (confirmPassword !== password) {
          return {
            isError: true,
          };
        }
        return null;
      }
      return null;
    };
  }