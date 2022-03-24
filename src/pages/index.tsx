import Head from 'next/head';

import { Header } from '../features/Header';
import { Search } from '../features/Search';
import { CardsContainer } from '../features/CardsContainer';

import { usePokemonList } from '../context/usePokemonList';

import styles from './home.module.scss';

export default function Home() {
	const { isLoading, data } = usePokemonList();

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
