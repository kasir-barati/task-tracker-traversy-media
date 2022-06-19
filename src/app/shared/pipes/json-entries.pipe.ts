import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonEntries',
})
export class JsonEntriesPipe implements PipeTransform {
  transform(value: { [x: string]: any }): [string, any][] {
    return Object.entries(value);
  }
}
