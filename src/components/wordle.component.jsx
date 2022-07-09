import { useEffect, useState } from 'react';
import useWordle from '../hooks/wordle';
import Grid from './grid/grid.component';
import Keyboard from './keyboard/keyboard.component';
import Modal from './modal/modal.component';

const Wordle = ({ solution }) => {
	const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
		useWordle(solution);

	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup);
		if (isCorrect) {
			setTimeout(() => {
				setShowModal(true);
			}, 2000);
			window.removeEventListener('keyup', handleKeyup);
		}
		if (turn > 5) {
			setTimeout(() => {
				setShowModal(true);
			}, 2000);
			window.removeEventListener('keyup', handleKeyup);
		}

		return () => window.removeEventListener('keyup', handleKeyup);
	}, [handleKeyup, isCorrect, turn]);
	return (
		<div>
			<Grid currentGuess={currentGuess} guesses={guesses} turn={turn}></Grid>
			<Keyboard usedKeys={usedKeys}></Keyboard>
			{showModal && (
				<Modal isCorrect={isCorrect} turn={turn} solution={solution} />
			)}
		</div>
	);
};

export default Wordle;
