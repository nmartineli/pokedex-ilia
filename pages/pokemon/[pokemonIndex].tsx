import axios from 'axios';
import { GetServerSideProps } from 'next';

import PokemonAbout from '../../features/PokemonAbout';
import PokemonHeader from '../../features/PokemonHeader';
import PokemonHero from '../../features/PokemonHero';

import styles from './styles.module.scss';

interface PokemonHeaderInfo {
	name: string;
	idNumber: string;
}

interface PokemonHeroInfo {
	imageUrl: string;
	alt: string;
}

interface PokemonAboutInfo {
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
}

interface CompletedColor {
	rock: string;
	ghost: string;
	steel: string;
	water: string;
	grass: string;
	psychic: string;
	ice: string;
	dark: string;
	fairy: string;
	normal: string;
	fighting: string;
	flying: string;
	poison: string;
	ground: string;
	bug: string;
	fire: string;
	electric: string;
	dragon: string;
}

interface BarColor {
	rock: string;
	ghost: string;
	steel: string;
	water: string;
	grass: string;
	psychic: string;
	ice: string;
	dark: string;
	fairy: string;
	normal: string;
	fighting: string;
	flying: string;
	poison: string;
	ground: string;
	bug: string;
	fire: string;
	electric: string;
	dragon: string;
}

export default function PokemonPage({
	pokemonHeaderInfo,
	pokemonHeroInfo,
	pokemonAboutInfo,
}: {
	pokemonHeaderInfo: PokemonHeaderInfo;
	pokemonHeroInfo: PokemonHeroInfo;
	pokemonAboutInfo: PokemonAboutInfo;
}) {
	return (
		<div className={[styles.page, styles[`${pokemonAboutInfo.types[0]}`]].join(' ')}>
			<PokemonHeader pokemonHeaderInfo={pokemonHeaderInfo} />
			<PokemonHero pokemonHeroInfo={pokemonHeroInfo} />
			<PokemonAbout pokemonAboutInfo={pokemonAboutInfo} />
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const pokemonIndex = context.query.pokemonIndex as string;

	async function getPokemonStatsData(pokemonIndex: string) {
		const data = await axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`)
			.then((response) => response.data)
			.catch((error) => console.log(error));

		return data;
	}

	async function getPokemonDescription(pokemonIndex: string) {
		const data = await axios
			.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`)
			.then((response) => response.data.flavor_text_entries[9].flavor_text)
			.catch((error) => console.log(error));

		return data;
	}

	// Pokemon Stats

	const pokemonStatsData = await getPokemonStatsData(pokemonIndex);

	// Pokemon Stats -> Pokemon Header

	const pokemonHeaderInfo = {
		name: pokemonStatsData.name.charAt(0).toUpperCase() + pokemonStatsData.name.slice(1),
		idNumber: String(pokemonStatsData.id).padStart(3, '0'),
	};

	// Pokemon Stats -> Pokemon Hero

	const pokemonHeroInfo = {
		imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`,
		alt: `${pokemonStatsData.name} official artwork.`,
	};

	// Pokemon Stats -> Pokemon About

	const pokemonDescription = await getPokemonDescription(pokemonIndex);

	let pokemonTypes = [];
	const pokemonTypesData = pokemonStatsData.types;
	if (pokemonTypesData.length == 2) {
		pokemonTypes = [pokemonStatsData.types[0].type.name, pokemonStatsData.types[1].type.name];
	} else {
		pokemonTypes = [pokemonStatsData.types[0].type.name];
	}

	let pokemonMoves = [];

	for (let i = 0; i <= 2; i++) {
		const move =
			pokemonStatsData.moves[i].move.name.charAt(0).toUpperCase() +
			pokemonStatsData.moves[i].move.name.slice(1).replace('-', ' ');
		pokemonMoves.push(move);
	}

	const type = pokemonStatsData.types[0].type.name;

	const completedColor: CompletedColor = {
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

	const barColor: BarColor = {
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

	const completedColorCode: string = completedColor[type];

	const barColorCode = barColor[type];

	const pokemonAboutInfo = {
		types: pokemonTypes,
		weight: pokemonStatsData.weight / 10,
		height: pokemonStatsData.height / 10,
		moves: pokemonMoves,
		description: pokemonDescription,
		stats: {
			hp: pokemonStatsData.stats[0].base_stat,
			atk: pokemonStatsData.stats[1].base_stat,
			def: pokemonStatsData.stats[2].base_stat,
			satk: pokemonStatsData.stats[3].base_stat,
			sdef: pokemonStatsData.stats[4].base_stat,
			spd: pokemonStatsData.stats[5].base_stat,
			completedColorCode,
			barColorCode,
		},
	};

	return {
		props: { pokemonHeaderInfo, pokemonHeroInfo, pokemonAboutInfo },
	};
};
