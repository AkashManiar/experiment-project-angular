import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.scss']
})
export class DogDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
