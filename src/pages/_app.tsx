import type { AppProps } from 'next/app';
import { PokemonListProvider } from '../context/usePokemonList';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<PokemonListProvider>
			<Component {...pageProps} />
		</PokemonListProvider>
	);
}

export default MyApp;
