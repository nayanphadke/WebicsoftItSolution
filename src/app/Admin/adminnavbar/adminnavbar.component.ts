import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-adminnavbar',
  imports: [],
  templateUrl: './adminnavbar.component.html',
  styleUrl: './adminnavbar.component.css'
})
export class AdminnavbarComponent {
   @Output() sidebarToggle = new EventEmitter<void>();

  onToggleSidebar() {
    this.sidebarToggle.emit();  // send event to parent
  }

}

