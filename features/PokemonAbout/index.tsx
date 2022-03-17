import PokemonStats from '../PokemonStats';
import styles from './styles.module.scss';

export default function PokemonAbout() {
	return (
		<main className={styles.about}>
			<div className={styles.about_content}>
				<section className={styles.about_content__type}>
					<h3>Grass</h3>
					<h3>Poison</h3>
				</section>

				<section>
					<h2>About</h2>
					<div className={styles.about_content__table}>
						<div>
							<p>6,9 kg</p>
							<h4>Weight</h4>
						</div>
						<div>
							<p>0,7 m</p>
							<h4>Height</h4>
						</div>
						<div>
							<p>
								Chlorophyll <br /> Overgrow
							</p>

							<h4>Moves</h4>
						</div>
					</div>
					<p>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
				</section>
				<PokemonStats />
			</div>
		</main>
	);
}
