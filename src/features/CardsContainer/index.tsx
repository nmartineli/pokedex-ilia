import { usePokemonList } from '../../context/usePokemonList';
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
	const { noResults } = usePokemonList();

	if (noResults) {
		return (
			<div className={styles.errorMessage}>
				<h2>Sorry, no data found. Try again!</h2>
			</div>
		);
	}

	return (
		<div className={styles.cardsContainer}>
			{props.pokemonData.map((pokemon, index) => {
				return <Card pokemon={pokemon} key={index} />;
			})}
		</div>
	);
}
