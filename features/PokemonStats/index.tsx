import ProgressBar from '@ramonak/react-progress-bar';

import styles from './styles.module.scss';

export default function PokemonStats() {
	const completedColor = {
		rock: '#b69e31',
		ghost: '#70559b',
		steel: '#b7b9d0',
		water: '#6493eb',
		grass: '#74cb48',
		psychic: '#fb5584',
		ice: '#9ad6df',
		dark: '#75574c',
		fairy: '#e69eac',
		normal: '#aaa67f',
		fighting: '#c12239',
		flying: '#a891ec',
		poison: '#a43e9e',
		ground: '#dec16b',
		bug: '#a7b723',
		fire: '#f57d31',
		electric: '#f9cf30',
		dragon: '#7037ff',
	};

	const barColor = {
		rock: '#b69e3140',
		ghost: '#70559b40',
		steel: '#b7b9d040',
		water: '#6493eb40',
		grass: '#74cb4840',
		psychic: '#fb558440',
		ice: '#9ad6df40',
		dark: '#75574c40',
		fairy: '#e69eac40',
		normal: '#aaa67f40',
		fighting: '#c1223940',
		flying: '#a891ec40',
		poison: '#a43e9e40',
		ground: '#dec16b40',
		bug: '#a7b72340',
		fire: '#f57d3140',
		electric: '#f9cf3040',
		dragon: '#7037ff40',
	};

	return (
		<section>
			<h2>Base Stats</h2>
			<div>
				<div className={styles.pokemonStats__table}>
					<h3>HP</h3>
					<p>045</p>
					<div className={styles.pokemonStats__statusBar}>
						<ProgressBar
							completed={45}
							maxCompleted={255}
							height={'4px'}
							isLabelVisible={false}
							bgColor={completedColor.grass}
							baseBgColor={barColor.grass}
						/>
					</div>
				</div>
				<div className={styles.pokemonStats__table}>
					<h3>ATK</h3>
					<p>049</p>
					<div className={styles.pokemonStats__statusBar}>
						<ProgressBar
							completed={45}
							maxCompleted={255}
							height={'4px'}
							isLabelVisible={false}
							bgColor={completedColor.grass}
							baseBgColor={barColor.grass}
						/>
					</div>
				</div>
				<div className={styles.pokemonStats__table}>
					<h3>DEF</h3>
					<p>049</p>
					<div className={styles.pokemonStats__statusBar}>
						<ProgressBar
							completed={45}
							maxCompleted={255}
							height={'4px'}
							isLabelVisible={false}
							bgColor={completedColor.grass}
							baseBgColor={barColor.grass}
						/>
					</div>
				</div>
				<div className={styles.pokemonStats__table}>
					<h3>SATK</h3>
					<p>065</p>
					<div className={styles.pokemonStats__statusBar}>
						<ProgressBar
							completed={45}
							maxCompleted={255}
							height={'4px'}
							isLabelVisible={false}
							bgColor={completedColor.grass}
							baseBgColor={barColor.grass}
						/>
					</div>
				</div>
				<div className={styles.pokemonStats__table}>
					<h3>SDEF</h3>
					<p>065</p>
					<div className={styles.pokemonStats__statusBar}>
						<ProgressBar
							completed={45}
							maxCompleted={255}
							height={'4px'}
							isLabelVisible={false}
							bgColor={completedColor.grass}
							baseBgColor={barColor.grass}
						/>
					</div>
				</div>
				<div className={styles.pokemonStats__table}>
					<h3>SPD</h3>
					<p>045</p>
					<div className={styles.pokemonStats__statusBar}>
						<ProgressBar
							completed={45}
							maxCompleted={255}
							height={'4px'}
							isLabelVisible={false}
							bgColor={completedColor.grass}
							baseBgColor={barColor.grass}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
