# How do I generate this beautiful module?

1. `ng generate @angular/material:address-form contact-us`
2. Some changes in the `contact-us.component.ts` because it was a bloody catastrophe. No `ngOnInit`, No appropriate error message, etc
3. `ng generate contact-us/contact-us-routes --skip-tests`.
   - Open the created file and turn the `class` keyword to `const` keyword.
   - Secondly change - `ContactUsRoutes` -> `contactUsRoutes` - the variable name to camelCase.
   - Lastly type the variable: `contactUsRoutes: Routes`.
   - Now I add routes for this contact-us.
