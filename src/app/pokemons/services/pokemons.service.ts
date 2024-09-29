import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Pokemon, PokemonApiResponse, SimplePokemon} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private http = inject(HttpClient);

  public loadPage(pageNumber: number): Observable<SimplePokemon[]> {
    if (pageNumber !== 0) {
      --pageNumber;
    }

    pageNumber = Math.max(0, pageNumber);

    return this.http.get<PokemonApiResponse>(`https://pokeapi.co/api/v2/pokemon?offset=${pageNumber * 20}&limit=20`)
      .pipe(
        map(resp => {
          const simplePokemons: SimplePokemon[] = resp.results.map(
            (pokemon) => ({
              id: pokemon.url.split('/').at(-2) ?? '',
              name: pokemon.name,
            })
          );

          return simplePokemons;
        })
      );
  }

  public loadPokemon(id: string) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
