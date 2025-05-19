import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../../services/user.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UserCardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  form!: FormGroup;
  users: User[] = [];
  editingUserId: number | null = null;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.loadUsers();
  }

  async loadUsers() {
    const data = await this.userService.getUsers().toPromise();
    if (data) {
      this.users = data;
    }
  }

async onSubmit() {
  if (this.form.valid) {
    const newUser: User = this.form.value;

    if (this.editingUserId) {
      await this.userService
        .updateUser(this.editingUserId, newUser)
        .toPromise();
    } else {
      await this.userService.addUser(newUser).toPromise();
    }

    this.form.reset();
    this.editingUserId = null;
    this.loadUsers();
  }
}


  onEdit(user: User) {
    this.editingUserId = user.id;
    this.form.setValue({ name: user.name, email: user.email });
  }

  onRemove(user: User) {
    // En producción, mostrarías un confirm() o modal
    this.userService.deleteUser(user.id).subscribe(() => this.loadUsers());
  }

  cancelEdit() {
    this.editingUserId = null;
    this.form.reset();
  }


}

