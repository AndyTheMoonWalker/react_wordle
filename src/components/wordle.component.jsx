import { useEffect } from 'react';
import useWordle from '../hooks/wordle';
import Grid from './grid/grid.component';
import Keyboard from './keyboard/keyboard.component';

const Wordle = ({ solution }) => {
	const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
		useWordle(solution);

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup);
		if (isCorrect) {
			window.removeEventListener('keyup', handleKeyup);
		}
		if (turn > 5) {
			window.removeEventListener('keyup', handleKeyup);
		}

		return () => window.removeEventListener('keyup', handleKeyup);
	}, [handleKeyup, isCorrect, turn]);
	return (
		<div>
			<Grid currentGuess={currentGuess} guesses={guesses} turn={turn}></Grid>
			<Keyboard usedKeys={usedKeys}></Keyboard>
		</div>
	);
};

export default Wordle;
