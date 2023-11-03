import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../models/recipe';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule]
})
export class RecipeCardComponent {

  @Input() recipe!: Recipe;

  @Output() cardClicked = new EventEmitter<number>();

  goToPage(recipeId: number) {
    this.cardClicked.emit(recipeId);
  }

}
