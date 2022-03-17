import PokemonAbout from '../../features/PokemonAbout';
import PokemonHeader from '../../features/PokemonHeader';
import PokemonHero from '../../features/PokemonHero';
import styles from './styles.module.scss';

export default function PokemonPage() {
	return (
		<div className={styles.app}>
			<PokemonHeader />
			<PokemonHero />
			<PokemonAbout />
		</div>
	);
}
