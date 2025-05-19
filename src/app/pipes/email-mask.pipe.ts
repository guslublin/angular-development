import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'emailMask', standalone: true })
export class EmailMaskPipe implements PipeTransform {
  transform(email: string): string {
    const [local, domain] = email.split('@');
    if (local.length < 3) return `***@${domain}`;
    const visible = local.slice(0, 2);
    return `${visible}***@${domain}`;
  }
}
