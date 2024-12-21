import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength',
  standalone: true,
})
export class MaxLengthPipe implements PipeTransform {
  transform(value: string, maxLength: number, suffix: string = '...'): string {
    if (!value) return '';
    if (value.length <= maxLength) return value;
    return value.substring(0, maxLength) + suffix;
  }
}
