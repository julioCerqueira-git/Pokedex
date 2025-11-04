import React from "react";
import { Text, Image, StyleSheet, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";

import { RootStackParamList } from "../types/navigation";

type DetailsRoute = RouteProp<RootStackParamList, "Details">;

interface DetailsScreenProps {
  route: DetailsRoute;
}

const DetailsScreen = ({ route }: DetailsScreenProps) => {
  const { pokemon } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: pokemon.image ?? "https://via.placeholder.com/200" }}
        style={styles.image}
      />
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text style={styles.text}>Altura: {pokemon.height}</Text>
      <Text style={styles.text}>Peso: {pokemon.weight}</Text>
      <Text style={styles.text}>Tipos: {pokemon.types.join(", ") || "—"}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    flexGrow: 1,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 6,
  },
});

export default DetailsScreen;