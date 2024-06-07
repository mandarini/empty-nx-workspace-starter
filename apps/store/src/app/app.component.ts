import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getAllGames } from '../fake-api';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@bg-hoard/ui-shared';
import { formatRating } from '@bg-hoard/util-formatters';

@Component({
  standalone: true,
  imports: [RouterModule, MatCardModule, CommonModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Board Game Hoard';
  games = getAllGames();
  formatRating = formatRating;
}
