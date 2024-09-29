import {ChangeDetectionStrategy, Component, effect, inject, OnInit, signal} from '@angular/core';
import {PokemonListComponent} from "../../pokemons/components/pokemon-list/pokemon-list.component";
import {PokemonListSkeletonComponent} from "./ui/pokemon-list-skeleton/pokemon-list-skeleton.component";
import {PokemonsService} from "../../pokemons/services/pokemons.service";
import {SimplePokemon} from "../../pokemons/interfaces";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";
import {map, tap} from "rxjs";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-pokemons-page',
  standalone: true,
  imports: [
    PokemonListComponent,
    PokemonListComponent,
    PokemonListSkeletonComponent,
    RouterLink
  ],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PokemonsPageComponent {

  private pokemonsService = inject(PokemonsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);

  public pokemons = signal<SimplePokemon[]>([]);

  public currentPage = toSignal<number>(
    this.route.params.pipe(
      map((params) => params['page'] ?? '1'),
      map((page) => (isNaN(+page) ? 1 : +page)),
      map((page) => Math.max(1, page))
    )
  );

  public loadOnPageChanged = effect(
    () => {
      this.loadPokemons(this.currentPage());
    },
    {
      allowSignalWrites: true
    }
  );

  /*public isLoading = signal(true);
  private appRef = inject(ApplicationRef);

  private $appState = this.appRef.isStable.subscribe( isStable => {
    console.log(isStable);
  });*/

  /*ngOnInit(): void {
    this.loadPokemons();
  }*/

  public loadPokemons(page = 0) {
    this.pokemonsService.loadPage(page)
      .pipe(
        tap(() => this.title.setTitle(`Pokemons SSR - Page ${page}`))
      )
      .subscribe(pokemons => {
        this.pokemons.set(pokemons);
      });
  }
}
