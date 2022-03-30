import { useState } from 'react';
import { usePokemonList } from '../../context/usePokemonList';
import styles from './styles.module.scss';

export function Search() {
	const { data, setData, setNoResults, completeData } = usePokemonList();
	const [query, setQuery] = useState<string | undefined>();

	function handleQuery(event: React.ChangeEvent<HTMLInputElement>) {
		let rawQuery = event.target.value;
		if (rawQuery !== '') {
			setQuery(rawQuery.charAt(0).toUpperCase() + rawQuery.slice(1));
		} else {
			setNoResults(false);
			setData(completeData);
		}
	}

	function handleSearch(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		let results = data.filter((pokemon) => pokemon.name === query);

		if (results.length === 0) {
			setNoResults(true);
		}

		setData(results);
	}

	return (
		<form onSubmit={handleSearch}>
			<input type="text" placeholder="Procurar" className={styles.searchInput} onChange={handleQuery} />
		</form>
	);
}
