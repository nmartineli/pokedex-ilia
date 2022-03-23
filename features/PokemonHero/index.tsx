import Image from 'next/image';

import styles from './styles.module.scss';

interface PokemonHeroProps {
	pokemonHeroInfo: {
		imageUrl: string;
		alt: string;
	};
}

export default function PokemonHero({ pokemonHeroInfo }: PokemonHeroProps) {
	return (
		<section className={styles.pokemonHero}>
			<div className={styles.pokemonImage}>
				<Image src={pokemonHeroInfo.imageUrl} alt={pokemonHeroInfo.alt} width={200} height={200} />
			</div>
		</section>
	);
}
