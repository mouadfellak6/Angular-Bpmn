import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-selection-dialog',
  template: `
    <div class="dialog-background" *ngIf="visible">
      <div class="dialog">
        <h1>Select User</h1>
        <ul>
          <li *ngFor="let user of users" (click)="selectUser(user)">{{ user.name }}</li>
        </ul>
        <button (click)="close()">Cancel</button>
      </div>
    </div>
  `,
  styles: [`
    .dialog-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .dialog {
      background: white;
      padding: 20px;
      border-radius: 5px;
      width: 300px;
      text-align: center;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      cursor: pointer;
      padding: 10px;
      border: 1px solid #ddd;
      margin: 5px 0;
      border-radius: 3px;
      transition: background 0.3s;
    }
    li:hover {
      background: #f0f0f0;
    }
    button {
      margin-top: 10px;
    }
  `]
})
export class UserSelectionDialogComponent {
  @Input() visible: boolean = false;
  @Input() users: { id: string, name: string }[] = [];
  @Output() userSelected = new EventEmitter<{ id: string, name: string }>();
  @Output() closed = new EventEmitter<void>();

  selectUser(user: { id: string, name: string }) {
    this.userSelected.emit(user);
  }

  close() {
    this.closed.emit();
  }
}
