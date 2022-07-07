import { useState } from 'react';

const useWordle = (solution) => {
	const [turn, setTurn] = useState(0);
	const [currentGuess, setCurrentGuess] = useState('');
	const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
	const [history, setHistory] = useState([]); // each guess is a string
	const [isCorrect, setIsCorrect] = useState(false);

	// format a guess into an array of letter objects
	// e.g. [{key: 'a', color: 'yellow'}]
	const formatGuess = () => {
		let solutionArray = [...solution];
		let formattedGuess = [...currentGuess].map((letter) => {
			return { key: letter, color: 'grey' };
		});

		formattedGuess.forEach((letter, index) => {
			if (solutionArray[index] === letter.key) {
				formattedGuess[index].color = 'green';
				solutionArray[index] = null;
			}
		});

		formattedGuess.forEach((letter, index) => {
			if (solutionArray.includes(letter.key) && letter.color !== 'green') {
				formattedGuess[index].color = 'yellow';
				solutionArray[solutionArray.indexOf(letter.key)] = null;
			}
		});

		return formattedGuess;
	};

	// add a new guess to the guesses state
	// update the isCorrect state if the guess is correct
	// add one to the turn state
	const addNewGuess = (formattedGuess) => {
		if (currentGuess === solution) {
			setIsCorrect(true);
		}
		setGuesses((prev) => {
			let newGuesses = [...prev];
			newGuesses[turn] = formattedGuess;
			return newGuesses;
		});
		setHistory((prev) => {
			return [...prev, currentGuess];
		});
		setTurn((prev) => {
			return prev + 1;
		});
		setCurrentGuess('');
	};

	// handle keyup event & track current guess
	// if user presses enter, add the new guess
	const handleKeyup = ({ key }) => {
		if (key === 'Enter') {
			if (turn > 5) {
				console.log('You are run out of turns');
				return;
			}

			if (history.includes(currentGuess)) {
				console.log('You already tried this word');
				return;
			}

			if (currentGuess.length !== 5) {
				console.log('Word must be five chars long');
				return;
			}

			const formatted = formatGuess();
			addNewGuess(formatted);
		}

		if (key === 'Backspace') {
			setCurrentGuess((prev) => {
				return prev.slice(0, -1);
			});
			return;
		}
		if (/^[A-Za-z]$/.test(key)) {
			if (currentGuess.length < 5) {
				setCurrentGuess((prev) => prev + key);
			}
		}
	};

	return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
