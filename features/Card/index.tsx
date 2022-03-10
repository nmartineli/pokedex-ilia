import Image from 'next/image';

import styles from './styles.module.scss';

type Props = {
	pokemon: {
		name: string;
		url: string;
		pokemonIndex: string;
		imageUrl: string;
	};
};

export function Card({ pokemon }: Props) {
	return (
		<section className={styles.cardContainer}>
			<p>#{pokemon.pokemonIndex}</p>
			<div className={styles.cardImageContainer}>
				<Image src={pokemon.imageUrl} alt="Placeholder" width={72} height={72} className={styles.cardImage} />
			</div>
			<div className={styles.cardNameContainer}>
				<h2>{pokemon.name}</h2>
			</div>
		</section>
	);
}
