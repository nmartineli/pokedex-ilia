import Head from 'next/head';

import { Header } from '../features/Header';
import { Search } from '../features/Search';
import { CardsContainer } from '../features/CardsContainer';
import ThreeDots from '../features/Loader';

import { usePokemonList } from '../context/usePokemonList';

import styles from './home.module.scss';

export default function Home() {
	const { isLoading, data } = usePokemonList();

	if (!data) return <p>No profile data</p>;

	if (isLoading)
		return (
			<>
				<Head>
					<title>Pokédex</title>
				</Head>
				<div className={styles.app}>
					<main>
						<Header />
						<ThreeDots />
					</main>
				</div>
			</>
		);

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
