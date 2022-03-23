import ProgressBar from '@ramonak/react-progress-bar';

import styles from './styles.module.scss';

interface PokemonStatsProps {
	hp: number;
	atk: number;
	def: number;
	satk: number;
	sdef: number;
	spd: number;
	completedColorCode: string;
	barColorCode: string;
}

export default function PokemonStats({ pokemonStats }: { pokemonStats: PokemonStatsProps }) {
	return (
		<>
			<div>
				<div className={styles.pokemonStats__table}>
					<h3>HP</h3>
					<p>{pokemonStats.hp}</p>
					<div className={styles.pokemonStats__statusBar}>
						<ProgressBar
							completed={pokemonStats.hp}
							maxCompleted={150}
							height={'4px'}
							isLabelVisible={false}
							bgColor={pokemonStats.completedColorCode}
							baseBgColor={pokemonStats.barColorCode}
						/>
					</div>
				</div>
				<div className={styles.pokemonStats__table}>
					<h3>ATK</h3>
					<p>{pokemonStats.atk}</p>
					<div className={styles.pokemonStats__statusBar}>
						<ProgressBar
							completed={pokemonStats.atk}
							maxCompleted={150}
							height={'4px'}
							isLabelVisible={false}
							bgColor={pokemonStats.completedColorCode}
							baseBgColor={pokemonStats.barColorCode}
						/>
					</div>
				</div>
				<div className={styles.pokemonStats__table}>
					<h3>DEF</h3>
					<p>{pokemonStats.def}</p>
					<div className={styles.pokemonStats__statusBar}>
						<ProgressBar
							completed={pokemonStats.def}
							maxCompleted={150}
							height={'4px'}
							isLabelVisible={false}
							bgColor={pokemonStats.completedColorCode}
							baseBgColor={pokemonStats.barColorCode}
						/>
					</div>
				</div>
				<div className={styles.pokemonStats__table}>
					<h3>SATK</h3>
					<p>{pokemonStats.satk}</p>
					<div className={styles.pokemonStats__statusBar}>
						<ProgressBar
							completed={pokemonStats.satk}
							maxCompleted={150}
							height={'4px'}
							isLabelVisible={false}
							bgColor={pokemonStats.completedColorCode}
							baseBgColor={pokemonStats.barColorCode}
						/>
					</div>
				</div>
				<div className={styles.pokemonStats__table}>
					<h3>SDEF</h3>
					<p>{pokemonStats.sdef}</p>
					<div className={styles.pokemonStats__statusBar}>
						<ProgressBar
							completed={pokemonStats.sdef}
							maxCompleted={150}
							height={'4px'}
							isLabelVisible={false}
							bgColor={pokemonStats.completedColorCode}
							baseBgColor={pokemonStats.barColorCode}
						/>
					</div>
				</div>
				<div className={styles.pokemonStats__table}>
					<h3>SPD</h3>
					<p>{pokemonStats.spd}</p>
					<div className={styles.pokemonStats__statusBar}>
						<ProgressBar
							completed={pokemonStats.spd}
							maxCompleted={150}
							height={'4px'}
							isLabelVisible={false}
							bgColor={pokemonStats.completedColorCode}
							baseBgColor={pokemonStats.barColorCode}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
