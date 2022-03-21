import Image from 'next/image';
import styles from './styles.module.scss';

interface PokemonHeaderProps {
	pokemonHeaderInfo: { name: string; idNumber: string };
}

export default function PokemonHeader({ pokemonHeaderInfo }: PokemonHeaderProps) {
	return (
		<nav className={styles.pokemonHeader}>
			<div>
				<Image src="/images/arrow-left.svg" alt="" width={24} height={32} />
				<h1>{pokemonHeaderInfo.name}</h1>
			</div>
			<h2>#{pokemonHeaderInfo.idNumber}</h2>
		</nav>
	);
}
