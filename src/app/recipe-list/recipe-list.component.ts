import { Component } from '@angular/core';
import recipesData from '../../assets/recipes.json';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  allRecipes = recipesData;
  recipes = recipesData; // The imported JSON becomes an array of objects
  categories = ['All', 'Veg', 'Non-Veg', 'Icecream'];
  selectedCategory = 'All'; // Default selected category

  getStarClass(rating: number, starIndex: number): string {
    if (rating >= starIndex) {
      return 'fa-solid fa-star'; // Full star
    } else if (rating >= starIndex - 0.5) {
      return 'fa-solid fa-star-half-stroke'; // Half star
    } else {
      return 'fa-regular fa-star'; // Empty star
    }
  }

  //method to filter

  filterRecipes(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.recipes = this.allRecipes;
    } else {
      this.recipes = this.allRecipes.filter(
        (recipe) => recipe.category === category
      );
    }
  }
}
