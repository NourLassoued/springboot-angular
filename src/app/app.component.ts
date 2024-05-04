


//import { Component, OnInit } from '@angular/core';
import { FoodService } from './services/food.service';
import { Food } from './models/Food';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontAndBack';
  foodForm: FormGroup | undefined;
  foods: Food[] | undefined;
 
}



