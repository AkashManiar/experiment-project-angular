import { Injectable } from '@angular/core';
import {Dog} from "../models/dogs-model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DogsServiceService {

  constructor() { }

  dogList: Array<Dog> = [
    {
      name: "Nashville",
      age: 5,
      breed: "Dalmesian",
      owner: "Nathe",
    },
    {
      name: "Nebraska",
      age: 15,
      breed: "Dalmesian",
      owner: "Nathe",
    },
    {
      name: "Bruno",
      age: 5,
      breed: "Doberman",
      owner: "Akash",
    },
  ]

  public getDogs(): Observable<Array<Dog>> {
    return of(this.dogList);
  }
}
