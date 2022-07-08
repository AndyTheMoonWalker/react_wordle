import { useEffect } from 'react';
import useWordle from '../hooks/wordle';
import Grid from './grid/grid.component';
import Keyboard from './keyboard/keyboard.component';

const Wordle = ({ solution }) => {
	const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
		useWordle(solution);

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup);
		return () => window.removeEventListener('keyup', handleKeyup);
	}, [handleKeyup]);
	return (
		<div>
			<Grid currentGuess={currentGuess} guesses={guesses} turn={turn}></Grid>
			<Keyboard usedKeys={usedKeys}></Keyboard>
		</div>
	);
};

export default Wordle;
