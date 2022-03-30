import Image from 'next/image';
import { useState } from 'react';
import { usePokemonList } from '../../context/usePokemonList';
import styles from './styles.module.scss';

interface PokemonDataUpdated {
	name: string;
	url: string;

	pokemonIndex: string;
	imageUrl: string;
	type: string;
}

export function Header() {
	const { data, setData, sortByName, setSortByName } = usePokemonList();

	function orderByName(data: PokemonDataUpdated[]) {
		let byName = data.sort(function (a, b) {
			if (a.name > b.name) {
				return 1;
			}
			if (a.name < b.name) {
				return -1;
			}

			return 0;
		});
		return byName;
	}

	function orderByNumber(data: PokemonDataUpdated[]) {
		let byNumber = data.sort(function (a, b) {
			if (a.pokemonIndex > b.pokemonIndex) {
				return 1;
			}
			if (a.pokemonIndex < b.pokemonIndex) {
				return -1;
			}

			return 0;
		});
		return byNumber;
	}

	function handleSortPokemon() {
		setSortByName(!sortByName);

		if (!sortByName) {
			const byName = orderByName(data);
			setData(byName);
		}

		if (sortByName) {
			const byNumber = orderByNumber(data);
			setData(byNumber);
		}
	}

	return (
		<header className={styles.header}>
			<div className={styles.header__logoContainer}>
				<Image src="/images/icon.svg" alt="Logo Pokéball" width={24} height={24} />
				<h1>Pokédex</h1>
			</div>
			<button className={styles.header__reorderButton} type="submit" onClick={handleSortPokemon}>
				{sortByName ? (
					<Image src="/images/sort-by-number.svg" alt="" width={20} height={32} />
				) : (
					<Image src="/images/sort-by-letter.svg" alt="" width={20} height={32} />
				)}
			</button>
		</header>
	);
}
