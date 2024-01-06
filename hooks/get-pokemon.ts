import { useEffect, useState } from 'react';
import { Pokemon } from '@/types/pokemon';

export const GetPokemon = (id: number = 0) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [pokemon, setPokemon] = useState<Pokemon>();

    const getPokemon = async (id: number) => {
        setIsLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await response.json();
        setPokemon(pokemon);
        setIsLoading(false);
    }

    useEffect(() => {
        getPokemon(id);
    }, []);

    return {
        isLoading,
        setIsLoading,
        pokemon,
        getPokemon
    }
};
