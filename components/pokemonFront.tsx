'use client'

// import { useEffect, useState } from 'react';
import Image from 'next/image';
// import { Pokemon } from "@/types/pokemon";
import { GetPokemon } from '@/hooks/get-pokemon';

export default function PokemonFront() {
    const { pokemon: pokemon } = GetPokemon(1);

    // const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [pokemon, setPokemon] = useState<Pokemon>();

    // const getPokemon = async (id: number) => {
    //     setIsLoading(true);
    //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    //     const pokemon = await response.json();
    //     setPokemon(pokemon);
    //     setIsLoading(false);
    // }

    // useEffect(() => {
    //     getPokemon(1);
    // }, []);

    return (
        <div>
            <Image
                src={pokemon?.sprites?.front_default || ''}
                width={500}
                height={500}
                alt="sample"
            />
        </div>
    )
}
