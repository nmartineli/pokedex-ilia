import Image from 'next/image';

import styles from './styles.module.scss';

export default function PokemonHero() {
	return (
		<section className={styles.pokemonHero}>
			<div className={styles.pokemonImage}>
				<Image src="/images/placeholder.png" alt="Pokemon" width={200} height={200} />
			</div>
		</section>
	);
}
