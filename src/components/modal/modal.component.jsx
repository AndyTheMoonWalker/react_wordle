const Modal = ({ isCorrect, turn, solution }) => {
	return (
		<div className='modal'>
			{isCorrect && (
				<div>
					<h1>Win</h1>
					<p className='solution'>Solution is {solution}</p>
					<p>You got the solution in {turn} guesses</p>
				</div>
			)}

			{!isCorrect && (
				<div>
					<h1>Nevermind</h1>
					<p className='solution'>Solution is {solution}</p>
					<p>Better luck next time</p>
				</div>
			)}
		</div>
	);
};

export default Modal;
