# Why do I refactored to model-driven instead of template-driven?

- Validation
- Ease at testing
- Changes are trackable
- Dealing with error messages
- It is fun to refactor :joy:, kidding. TBH I am still learning and my gut cannot guide me to when to use template-driven approach and when to use model-driven approach.
- Template-driven forms let direct access modify data in your template, but are less explicit than reactive forms because they rely on directives embedded in the template, along with mutable data to track changes asynchronously. TBH IDK what this sentence means :sweat:

# Reactive forms

- Model-driven approach
- Handling form inputs whose values change over time
- Explicit and immutable approach to managing the state of a form at a given point in time.
- Each change to the form state returns a new state => integrated model
- Reactive form revolves around observable
- We have synchronous access to the data model

## `FromBuilder`

- Creating form control instances manually can become repetitive
- Steps to use it:
  1. Import the `FormBuilder` class.
  2. Inject the `FormBuilder` service.
  3. Create your form group in the `ngOnInit` method to make our unit test easier
- `Validators.compose` returns an object of all errors. I'm not quite sure, BTW I guess when we do not use it we should deal with many control objects. I mean it just do a normalization for us.

# How to use reactive forms?

1. Register the reactive forms module in your application

```ts
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  /* ... */
  imports: [
    /* ... */
    ReactiveFormsModule, // Add reactive form directives to the project
    /* ... */
  ],
  /* ... */
})
export class AppModule {}
```

2. Generate a new FormControl instance and save it in the component.

```ts

```

3.

# taskTextPattern

<pre>
^          Start of string
[\w\d\S\s] letters, digits, spaces, not spaces
+          one or more times (change to * to allow empty string)
$          end of string    
/i         case-insensitive
/g         global search
</pre>
