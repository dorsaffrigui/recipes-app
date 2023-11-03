import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../models/recipe';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: Recipe;
  errorMessage!: string;

  constructor(private route: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    this.recipesService.getRecipeById(productId).subscribe({
      next: (recipe) => {
        this.recipe = recipe;
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
  }
}
