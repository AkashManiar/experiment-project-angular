import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DogsServiceService} from "../../services/dogs-service.service";
import {Dog} from "../../models/dogs-model";
import {Observable} from "rxjs";
import {DogDetailsComponent} from "../dog-details/dog-details.component";

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [CommonModule, DogDetailsComponent],
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit, OnDestroy {

  constructor(private dogsService: DogsServiceService) { }

  ngOnInit(): void {
    this.dogList$ = this.dogsService.getDogs();
  }

  ngOnDestroy() {
  }

  dogList$: Observable<Array<Dog>> | undefined;

}
