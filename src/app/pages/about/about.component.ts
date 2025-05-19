// src/app/pages/about/about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-5 text-center">
      <h1>Acerca de esta App</h1>
      <p class="lead">Esta es una aplicación Angular para gestionar usuarios.</p>
    </div>
  `,
  styles: []
})
export class AboutComponent {}
