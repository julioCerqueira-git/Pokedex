import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Pokemon from "../model/entities/pokemon";

interface PokemonCardProps {
    pokemon: Pokemon;
    onPress: () => void;
};

const PokemonCard = ({pokemon, onPress}: PokemonCardProps) => {
    return (
        <TouchableOpacity style = {styles.card} onPress={onPress}>
            <Image
                source={{ uri: pokemon.image ?? "https://via.placeholder.com/80" }}
                style={styles.image}
            />

            <View style = {styles.info}>
                <Text style = {styles.name}>{pokemon.name}</Text>
                <Text style = {styles.types}>
                    Tipos: {pokemon.types.join(', ')||'-'}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    alignItems: "center",
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  types: {
    color: "#555",
    marginTop: 2,
  },
});

export default PokemonCard;