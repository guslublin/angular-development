// src/app/components/user-card/user-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../services/user.service';
import { HoverHighlightDirective } from '../../directives/hover-highlight.directive';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, HoverHighlightDirective],
  template: `
    <div class="card mb-2" [appHoverHighlight]="'#f8f9fa'">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 class="card-title mb-0">{{ user.name }}</h5>
          <small class="text-muted">{{ user.email }}</small>
        </div>
        <div>
          <button class="btn btn-sm btn-primary me-2" (click)="edit.emit(user)">Editar</button>
          <button class="btn btn-sm btn-danger" (click)="remove.emit(user)">Eliminar</button>
        </div>
      </div>
    </div>
  `
})
export class UserCardComponent {
  @Input() user!: User;
  @Output() edit = new EventEmitter<User>();
  @Output() remove = new EventEmitter<User>();
}
