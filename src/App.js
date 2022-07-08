import { useEffect, useState } from 'react';
import './App.css';
import Wordle from './components/wordle.component';

const solutions = [
	{ id: 1, word: 'ninja' },
	{ id: 2, word: 'spade' },
	{ id: 3, word: 'pools' },
	{ id: 4, word: 'drive' },
	{ id: 5, word: 'relax' },
	{ id: 6, word: 'times' },
	{ id: 7, word: 'train' },
	{ id: 8, word: 'cores' },
	{ id: 9, word: 'pours' },
	{ id: 10, word: 'blame' },
	{ id: 11, word: 'banks' },
	{ id: 12, word: 'phone' },
	{ id: 13, word: 'bling' },
	{ id: 14, word: 'coins' },
	{ id: 15, word: 'hello' },
];
function App() {
	const [solution, setSolution] = useState(null);

	useEffect(() => {
		const randomSolution =
			solutions[Math.floor(Math.random() * solutions.length)];
		setSolution(randomSolution.word);
	}, []);

	return (
		<div className='App'>
			<h1>Word game</h1>
			<Wordle solution={solution} />
		</div>
	);
}

export default App;
