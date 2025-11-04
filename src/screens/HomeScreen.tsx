import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Alert, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import Pokemon from "../model/entities/pokemon";
import PokedexService from "../model/services/pokedexServices";
import PokemonCard from "../components/PokemonCard";
import { RootStackParamList } from "../types/navigation";

type Navigation = NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<Navigation>();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const service = new PokedexService();

  useEffect(() => {
    loadPokemons();
  }, []);

  async function loadPokemons() {
    try {
      const data = await service.getPokemons(20, offset);
      setPokemons((prev) => [...prev, ...data]);
      setOffset((prev) => prev + 20);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os Pokémons.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id.toString() + item.name}
        renderItem={({ item }) => (
          <PokemonCard
            pokemon={item}
            onPress={() => navigation.navigate("Details", { pokemon: item })}
          />
        )}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
  },
});

export default HomeScreen;