import Pokemon from "../model/entities/pokemon";

export type RootStackParamList = {
  Home: undefined;
  Details: { pokemon: Pokemon };
};
