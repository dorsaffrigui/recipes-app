import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../models/recipe';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit{

  pageTitle = 'Product Detail';
  recipe!: Recipe;


  constructor(private route: ActivatedRoute, private router: Router, private recipesService: RecipesService) {
  }

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    this.recipesService.getRecipeById(productId).subscribe((recipe) => {
      this.recipe = recipe;
    });
  }
}
