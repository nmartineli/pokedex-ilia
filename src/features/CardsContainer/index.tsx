import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../Card';

import styles from './styles.module.scss';

type PokemonData = {
	name: string;
	url: string;
	pokemonIndex: string;
	imageUrl: string;
	type: string;
};

interface CardsContainerProps {
	pokemonData: PokemonData[];
}

export function CardsContainer(props: CardsContainerProps) {
	return (
		<div className={styles.cardsContainer}>
			{props.pokemonData.map((pokemon, index) => {
				return <Card pokemon={pokemon} key={index} />;
			})}
		</div>
	);
}
