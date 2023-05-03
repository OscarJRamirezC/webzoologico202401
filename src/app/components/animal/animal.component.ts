import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {
  animalList: any = [];

  constructor(private animalService: AnimalService) {

  }

  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
    });
  }
  ngOnInit() {
    this.getAllAnimals();
  }



}
