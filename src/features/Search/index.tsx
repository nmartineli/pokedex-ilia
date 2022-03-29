import { useState } from 'react';
import { usePokemonList } from '../../context/usePokemonList';
import styles from './styles.module.scss';

export function Search() {
	const { data, setData, completeData } = usePokemonList();
	const [query, setQuery] = useState<string | undefined>();

	function handleQuery(event: React.ChangeEvent<HTMLInputElement>) {
		let rawQuery = event.target.value;
		if (rawQuery !== '') {
			setQuery(rawQuery.charAt(0).toUpperCase() + rawQuery.slice(1));
		} else {
			setData(completeData);
		}
	}

	function handleSearch(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		let results = [];
		for (let index = 0; index < data.length; index++) {
			if (data[index].name === query) {
				results.push(data[index]);
			}
		}
		setData(results);
	}

	return (
		<form onSubmit={handleSearch}>
			<input type="text" placeholder="Procurar" className={styles.searchInput} onChange={handleQuery} />
		</form>
	);
}
