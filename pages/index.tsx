import axios from 'axios';
import type { GetStaticProps } from 'next';
import Head from 'next/head';

import { Card } from '../features/Card';
import { Header } from '../features/Header';
import { Search } from '../features/Search';

import styles from './home.module.scss';

type PokemonData = {
	name: string;
	url: string;
};

type Pokemon = {
	name: string;
	url: string;
	pokemonIndex: string;
	imageUrl: string;
};

interface PokedexProps {
	pokemons: Pokemon[];
}

export default function Home({ pokemons }: PokedexProps) {
	return (
		<>
			<Head>
				<title>Pokédex</title>
			</Head>
			<div className={styles.app}>
				<main>
					<Header />
					<Search />

					<div className={styles.cardsContainer}>
						{pokemons.map((pokemon, index) => {
							return <Card pokemon={pokemon} key={index} />;
						})}
					</div>
				</main>
			</div>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const apiData = await axios
		.get('https://pokeapi.co/api/v2/pokemon/?limit=200')
		.then((res) => res.data.results)
		.catch((error) => console.error(error));

	const pokemons = apiData.map((pokemonData: PokemonData) => {
		const pokemonIndex = pokemonData.url.split('/')[6];
		const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

		return {
			name: pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1),
			url: pokemonData.url,
			pokemonIndex: String(pokemonIndex).padStart(3, '0'),
			imageUrl,
		};
	});

	return {
		props: {
			pokemons,
		},
	};
};
