import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true, // Importante para pipes reutilizables modernos
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string,
    limit: number = 20,
    ellipsis: string = '...'
  ): string {
    if (!value || value.length <= limit) {
      return value;
    }
    return value.substring(0, limit) + ellipsis;
  }
}
