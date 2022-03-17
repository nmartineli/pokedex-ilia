import Image from 'next/image';
import styles from './styles.module.scss';

export default function PokemonHeader() {
	return (
		<nav className={styles.pokemonHeader}>
			<div>
				<Image src="/images/arrow-left.svg" alt="" width={24} height={32} />
				<h1>Bulbasaur</h1>
			</div>
			<h2>#001</h2>
		</nav>
	);
}
