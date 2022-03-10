import type { NextPage } from 'next';
import Head from 'next/head';
import { Card } from '../features/Card';
import { Header } from '../features/Header';
import { Search } from '../features/Search';

import styles from './home.module.scss';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Pokedex</title>
			</Head>
			<div className={styles.app}>
				<main>
					<Header />
					<Search />
					<div className={styles.cardsContainer}>
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</main>
			</div>
		</>
	);
};

export default Home;
