import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassService } from '../../service/class.service';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [],
  providers: [
    ClassService
  ],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.scss'
})
export class InscripcionComponent implements OnInit{
  classes: any[]

  constructor(
    private readonly userService: ClassService
  ) {}

  ngOnInit(){
    this.userService.getClasses().subscribe({
      next: (classes) => {
        console.log(classes)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
  
}
