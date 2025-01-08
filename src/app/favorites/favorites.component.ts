import { Component } from '@angular/core';
import recipesData from '../../assets/recipes.json';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent {
  recipes = recipesData;
}
