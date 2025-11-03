import axios from "axios";
import Pokemon from "../entities/pokemon";

type PokemonListItem = {
  name: string;
  url: string;
};

type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
};

interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string | null;
  };
  types: {type:{ name: string }}[];
};

export default class PokedexService {
  static readonly BASE_URL = "https://pokeapi.co/api/v2/";

  async getPokemons(limit = 20, offset = 0): Promise<Pokemon[]> {
    try {
      const url = `${PokedexService.BASE_URL}pokemon?limit=${limit}&offset=${offset}`;
      const listResponse = await axios.get<PokemonListResponse>(url);
      const pokemonsList = listResponse.data.results;

      const detailedPokemons = await Promise.all(
        pokemonsList.map(async (pokemonItem) => {
          try {
            const pokemonResponse = await axios.get<PokemonApiResponse>(pokemonItem.url);
            const pokemonData = pokemonResponse.data;

            const pokemon: Pokemon = {
              id: pokemonData.id,
              name: pokemonData.name,
              image: pokemonData.sprites.front_default ?? null,
              height: pokemonData.height,
              weight: pokemonData.weight,
              types: pokemonData.types.map((typeInfo) => typeInfo.type.name),
            };

            return pokemon;
          } catch (error) {
            console.error(`Erro ao buscar detalhes do Pokémon ${pokemonItem.name}:`, error);
            return {
              id: -1,
              name: pokemonItem.name,
              image: null,
              height: 0,
              weight: 0,
              types: [],
            } as Pokemon;
          }
        })
      );

      return detailedPokemons;
    } catch (error) {
      console.error("Erro ao carregar lista de pokémons:", error);
      return [];
    }
  }
}
