import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroModel } from 'src/app/models';
import { HeroesService } from '../heroes.service';
@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesDetailComponent implements OnInit {
  heroId: string = '';
  hero: HeroModel | null = null;

  constructor(
    public api: HeroesService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.url.subscribe((route) => {
      this.heroId = route[0].path;
      this.api.heroesApi.findById(this.heroId).subscribe(
        (result) => {
          this.hero = result;
          this.cdr.detectChanges();
        },
        (err: Error) => {
          console.log(
            'error getting hero message: ' +
              err.message +
              ' stack: ' +
              err.stack
          );
        }
      );
    });
  }
}
