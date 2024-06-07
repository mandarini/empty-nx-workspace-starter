import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'lib-feature-game-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './feature-game-detail.component.html',
  styleUrl: './feature-game-detail.component.css',
})
export class FeatureGameDetailComponent {
  constructor(private route: ActivatedRoute) {}

  gameId$ = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('id'))
  );
}
