// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
    { id: 2, name: 'Ana Gómez', email: 'ana@example.com' }
  ];
  private nextId = 3;

  getUsers(): Observable<User[]> {
    return of(this.users).pipe(delay(500)); // simula delay de API
  }

  addUser(user: Omit<User, 'id'>): Observable<User> {
    const newUser: User = { id: this.nextId++, ...user };
    this.users.push(newUser);
    return of(newUser).pipe(delay(300));
  }

  deleteUser(id: number): Observable<boolean> {
    this.users = this.users.filter(u => u.id !== id);
    return of(true).pipe(delay(200));
  }

  getUserById(id: number): Observable<User | undefined> {
    const user = this.users.find(u => u.id === id);
    return of(user);
  }

  updateUser(id: number, data: Partial<User>): Observable<User | undefined> {
    const user = this.users.find(u => u.id === id);
    if (user) {
      Object.assign(user, data);
    }
    return of(user).pipe(delay(300));
  }
}
