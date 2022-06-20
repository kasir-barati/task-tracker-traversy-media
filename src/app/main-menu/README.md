# How did I create this menu?

- This component creates a vertical fixed docked to left navigation menu. I meant we need to customize it to gets compatible with other modules.

1. `ng generate @angular/material:navigation main-menu`
2. `pnpm format`
3. Remove `href`s from anchor tags because as we all know an anchor tag with `href` attribute cause refreshing page, But we do not want that. We wanna `routerLink` instead of `href`.
