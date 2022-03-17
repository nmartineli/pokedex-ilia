import axios from 'axios';
import { useEffect, useState } from 'react';
import { usePokemonList } from '../../src/context/usePokemonList';
import { Card } from '../Card';

import styles from './styles.module.scss';

interface PokemonData {
	name: string;
	url: string;
}

interface PokemonDataUpdated extends PokemonData {
	pokemonIndex: string;
	imageUrl: string;
	type: string;
}

export function CardsContainer() {
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
						url: pokemonData.url,
						pokemonIndex: String(pokemonIndex).padStart(3, '0'),
						imageUrl,
						type,
					};
				})
			);
			setData(pokemonUpdatedData);
			console.log(pokemonUpdatedData);
			setLoading(false);
		}
		loadData();
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (!data) return <p>No profile data</p>;

	return (
		<div className={styles.cardsContainer}>
			{data.map((pokemon, index) => {
				return <Card pokemon={pokemon} key={index} />;
			})}
		</div>
	);
}
