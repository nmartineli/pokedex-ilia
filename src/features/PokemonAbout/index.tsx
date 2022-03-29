import PokemonStats from '../PokemonStats';
import styles from './styles.module.scss';
import typeStyles from './typeStyles.module.scss';

interface PokemonAboutProps {
	pokemonAboutInfo: {
		types: string[];
		weight: number;
		height: number;
		moves: string[];
		description: string;
		stats: {
			hp: number;
			atk: number;
			def: number;
			satk: number;
			sdef: number;
			spd: number;
			completedColorCode: string;
			barColorCode: string;
		};
	};
}

export default function PokemonAbout({ pokemonAboutInfo }: PokemonAboutProps) {
	return (
		<main className={styles.about}>
			<div className={styles.about_content}>
				<section className={styles.about_content__type}>
					{pokemonAboutInfo.types.length > 1 ? (
						<>
							<h3 className={typeStyles[`${pokemonAboutInfo.types[0]}`]}>
								{pokemonAboutInfo.types[0].charAt(0).toUpperCase() + pokemonAboutInfo.types[0].slice(1)}
							</h3>
							<h3 className={typeStyles[`${pokemonAboutInfo.types[1]}`]}>
								{pokemonAboutInfo.types[1].charAt(0).toUpperCase() + pokemonAboutInfo.types[1].slice(1)}
							</h3>
						</>
					) : (
						<h3 className={typeStyles[`${pokemonAboutInfo.types[0]}`]}>
							{pokemonAboutInfo.types[0].charAt(0).toUpperCase() + pokemonAboutInfo.types[0].slice(1)}
						</h3>
					)}
				</section>

				<section>
					<h2 className={styles[`${pokemonAboutInfo.types[0]}`]}>About</h2>
					<div className={styles.about_content__table}>
						<div>
							<p>{pokemonAboutInfo.weight} kg</p>
							<h4>Weight</h4>
						</div>
						<div>
							<p>{pokemonAboutInfo.height} m</p>
							<h4>Height</h4>
						</div>
						<div>
							<p>
								{pokemonAboutInfo.moves[0]} <br /> {pokemonAboutInfo.moves[1]}
							</p>

							<h4>Moves</h4>
						</div>
					</div>
					<p className={styles.about_content__description}>{pokemonAboutInfo.description}</p>
				</section>
				<section>
					<h2 className={styles[`${pokemonAboutInfo.types[0]}`]}>Base Stats</h2>
					<PokemonStats pokemonStats={pokemonAboutInfo.stats} />
				</section>
			</div>
		</main>
	);
}
