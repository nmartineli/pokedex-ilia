import axios from 'axios';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface PokemonData {
	name: string;
	url: string;
}

interface PokemonDataUpdated extends PokemonData {
	pokemonIndex: string;
	imageUrl: string;
	type: string;
}

interface PokemonListProviderProps {
	children: ReactNode;
}

interface PokemonListContextData {
	data?: PokemonDataUpdated[];
	isLoading?: boolean;
}

export const PokemonListContext = createContext<PokemonListContextData>({});

export function PokemonListProvider({ children }: PokemonListProviderProps) {
	const [pokemonList, setPokemonList] = useState();

	const [data, setData] = useState<PokemonDataUpdated[]>([]);
	const [isLoading, setLoading] = useState<boolean>(false);

	async function getApiData() {
		const apiData = await axios
			.get('https://pokeapi.co/api/v2/pokemon/?limit=160')
			.then((res) => res.data.results)
			.catch((error) => console.error(error));

		return apiData;
	}

	useEffect(() => {
		setLoading(true);

		async function loadData() {
			const apiData = await getApiData();

			const pokemonUpdatedData = await Promise.all(
				apiData.map(async (pokemonData: PokemonData) => {
					const pokemonIndex = pokemonData.url.split('/')[6];
					const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

					const pokemonInformation = await axios
						.get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`)
						.then((res) => res.data)
						.catch((error) => console.error(error));

					const type = pokemonInformation.types[0].type.name;

					return {
						name: pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1),
						url: pokemonData.url.split('/')[6],
						pokemonIndex: String(pokemonIndex).padStart(3, '0'),
						imageUrl,
						type,
					};
				})
			);
			setData(pokemonUpdatedData);
			setLoading(false);
		}
		loadData();
	}, []);

	return <PokemonListContext.Provider value={{ data, isLoading }}>{children}</PokemonListContext.Provider>;
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
