import Image from 'next/image';
import styles from './styles.module.scss';

export function Card() {
	return (
		<section className={styles.cardContainer}>
			<p>#001</p>
			<div className={styles.cardImageContainer}>
				<Image src="/images/placeholder.png" alt="Placeholder" width={72} height={72} className={styles.cardImage} />
			</div>
			<div className={styles.cardNameContainer}>
				<h2>Pokémon name</h2>
			</div>
		</section>
	);
}
