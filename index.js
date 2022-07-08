const submitButton = document.querySelector('.cta-submit');
const scoreElements = document.querySelectorAll('.score');
const ratingResult = document.querySelector('.rating__container--result');
const userScore = document.getElementById('userScore');

scoreElements.forEach((score) => {
	score.addEventListener('click', () => {
		if (score.classList.contains('score-selected')) {
			score.classList.toggle('score-selected');
		} else {
			resetStatus();
			score.classList.toggle('score-selected');
		}
	});
});

const resetStatus = () =>
	scoreElements.forEach((score) => score.classList.remove('score-selected'));

const submitScore = () => {
	const scoreSelected = document.querySelector('.score.score-selected');
	const ratingSelection = document.querySelector('.rating__container');

	if (!scoreSelected) {
		submitButton.classList.add('error-shake');
	} else {
		userScore.textContent = `You selected ${scoreSelected.textContent} out of 5`;
		ratingResult.classList.remove('hide');
		ratingSelection.classList.add('hide');
	}
	setTimeout(() => {
		submitButton.classList.remove('error-shake');
	}, 1000);
};

submitButton.addEventListener('click', submitScore);
