import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [solution, setSolution] = useState(null);
	useEffect(() => {
		fetch('http://localhost:3001/solutions')
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				const randomSolution = json[Math.floor(Math.random() * json.length)];
				setSolution(randomSolution.word);
			});
	}, [setSolution]);
	return (
		<div className='App'>
			<h1>Word game</h1>
			<div>The solution will be {solution}</div>
		</div>
	);
}

export default App;
