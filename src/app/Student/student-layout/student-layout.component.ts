import { Component } from '@angular/core';
import { StudentnavbarComponent } from "../studentnavbar/studentnavbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-layout',
  imports: [StudentnavbarComponent,RouterModule],
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.css'
})
export class StudentLayoutComponent {

}
