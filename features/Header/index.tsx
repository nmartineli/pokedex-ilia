import Image from 'next/image';
import styles from './styles.module.scss';

export function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.logoContainer}>
				<Image src="/images/icon.svg" alt="Logo Pokéball" width={24} height={24} />
				<h1>Pokédex</h1>
			</div>
			<a>
				<Image src="/images/sort-by-number.svg" alt="" width={20} height={32} />
			</a>
		</header>
	);
}
