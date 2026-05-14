import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Description} from './description/description';
import {PrepTime} from './prep-time/prep-time';
import {Instructions} from './instructions/instructions';
import {Nutrition} from './nutrition/nutrition';
import {Ingredients} from './ingredients/ingredients';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Description, PrepTime, Nutrition, Instructions, Ingredients],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  omelette = './images/image-omelette.jpeg';
  protected readonly title = signal('recipe-page');
}
