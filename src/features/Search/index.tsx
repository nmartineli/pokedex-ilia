import styles from './styles.module.scss';

export function Search() {
	return <input type="text" placeholder="Procurar" className={styles.searchInput} />;
}
