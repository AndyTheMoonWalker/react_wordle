import { useEffect } from 'react';
import useWordle from '../hooks/wordle';
import Grid from './grid/grid.component';

const Wordle = ({ solution }) => {
	const { currentGuess, handleKeyup, guesses, isCorrect, turn } =
		useWordle(solution);

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup);
		return () => window.removeEventListener('keyup', handleKeyup);
	}, [handleKeyup]);
	return (
		<div>
			<Grid currentGuess={currentGuess} guesses={guesses} turn={turn}></Grid>
		</div>
	);
};

export default Wordle;
