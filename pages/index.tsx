import Head from 'next/head';

import { Header } from '../features/Header';
import { Search } from '../features/Search';

import styles from './home.module.scss';
import { CardsContainer } from '../features/CardsContainer';

export default function Home() {
	return (
		<>
			<Head>
				<title>Pokédex</title>
			</Head>
			<div className={styles.app}>
				<main>
					<Header />
					<Search />
					<CardsContainer />
				</main>
			</div>
		</>
	);
}
