import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {SimplePokemon} from "../../interfaces";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  public pokemon = input.required<SimplePokemon>();
  public readonly pokemonImage = computed(() =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon().id}.png`
  );

  /*logEffect = effect(() => {
    console.log('PokemonCardComponent', this.pokemon());
  });*/
}
