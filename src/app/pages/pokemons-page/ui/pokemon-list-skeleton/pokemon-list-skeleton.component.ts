import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PokemonCardComponent} from "../../../../pokemons/components/pokemon-card/pokemon-card.component";

@Component({
  selector: 'app-pokemon-list-skeleton',
  standalone: true,
  imports: [
    PokemonCardComponent
  ],
  templateUrl: './pokemon-list-skeleton.component.html',
  styleUrl: './pokemon-list-skeleton.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListSkeletonComponent {

}
