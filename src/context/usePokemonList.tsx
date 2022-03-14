import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface PokemonListProviderProps {
	children: ReactNode;
}

export const PokemonListContext = createContext({});

export function PokemonListProvider({ children }: PokemonListProviderProps) {
	const [pokemonList, setPokemonList] = useState();

	return <PokemonListContext.Provider value={{ pokemonList, setPokemonList }}>{children}</PokemonListContext.Provider>;
}

export function usePokemonList() {
	const context = useContext(PokemonListContext);
	return context;
}

// let byName = pokemons.sort(function (a, b) {
// 	if (a.name > b.name) {
// 		return 1;
// 	}
// 	if (a.name < b.name) {
// 		return -1;
// 	}
// 	// a must be equal to b
// 	return 0;
// });
// console.log(byName);
