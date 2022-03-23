import Head from 'next/head';

import { Header } from '../features/Header';
import { Search } from '../features/Search';
import { CardsContainer } from '../features/CardsContainer';

import styles from './home.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface PokemonData {
	name: string;
	url: string;
}

interface PokemonDataUpdated extends PokemonData {
	pokemonIndex: string;
	imageUrl: string;
	type: string;
}

export default function Home() {
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

	if (isLoading) return <p>Loading...</p>;
	if (!data) return <p>No profile data</p>;

	return (
		<>
			<Head>
				<title>Pokédex</title>
			</Head>
			<div className={styles.app}>
				<main>
					<Header />
					<Search />
					<CardsContainer pokemonData={data} />
				</main>
			</div>
		</>
	);
}
