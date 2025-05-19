import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, User } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { EmailMaskPipe } from '../../pipes/email-mask.pipe';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, EmailMaskPipe],
  template: `
    <div class="container mt-4">
      <h2 class="text-primary">Detalle de Usuario</h2>
      <div *ngIf="user; else loading">
        <p><strong>Nombre:</strong> {{ user.name }}</p>
        <span class="text-muted">{{ user.email | emailMask }}</span>
      </div>
      <ng-template #loading>
        <p class="text-muted">Cargando usuario...</p>
      </ng-template>
    </div>
  `
})
export class UserDetailComponent implements OnInit {
  user!: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }
}
