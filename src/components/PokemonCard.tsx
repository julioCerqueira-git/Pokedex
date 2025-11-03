import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Pokemon from "../model/entities/pokemon";

interface PokemonCardProps {
    pokemon: Pokemon;
    onPress: () => void;
};

export default function PokemonCard ({pokemon, onPress}: PokemonCardProps) {
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

    },

    image: {

    },

    info: {

    },

    name: {

    },

    types: {

    }

});