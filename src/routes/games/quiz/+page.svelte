<script lang="ts">
	type Question = {
		id: number;
		prompt: string;
		answer: string;
		options: string[];
	};

	const questions: Question[] = [
		{
			id: 0,
			prompt: 'What is my last name?',
			answer: 'Edvardsen',
			options: ['Edvardsen', 'Hansen', 'Larsen', 'Nilsen']
		},
		{
			id: 1,
			prompt: 'Where am I from?',
			answer: 'Norway',
			options: ['Norway', 'Sweden', 'Denmark', 'Finland']
		},
		{
			id: 2,
			prompt: 'How old am I?',
			answer: getAge('2000-02-15'),
			options: [
				getAge('2000-02-15'),
				getAge('2001-02-15'),
				getAge('1999-02-15'),
				getAge('1998-02-15')
			]
		},
		{
			id: 3,
			prompt: "What's my favorite movie?",
			answer: 'Star wars: Revenge of the Sith',
			options: [
				'Star wars: Revenge of the Sith',
				'The Lord of the Rings: The Fellowship of the Ring',
				'Inception',
				'The Matrix'
			]
		},
		{
			id: 4,
			prompt: "What's my most loved frontend framework?",
			answer: 'SvelteKit',
			options: ['SvelteKit', 'React', 'jQuery', 'Vue.js']
		},
		{
			id: 5,
			prompt: 'Which university am I taking my degree at?',
			answer: 'NTNU',
			options: ['NTNU', 'OsloMet', 'UiT', 'UiA']
		},
		{
			id: 6,
			prompt: 'When did I start with programming?',
			answer: 'At 16 year old',
			options: ['At 16 year old', 'At 15 year old', 'At 17 year old', 'At 18 year old']
		}
	] as const;

	let gameState = 'on-going' as 'on-going' | 'finished';
	let currentQuestion: Question = questions[0];
	let shuffledOptions = shuffleOptions(currentQuestion.options);
	// 0 = not guessed, -1 = wrong guess, 1 = correct guess
	let optionStatus = [0, 0, 0, 0];
	let guessStatus = new Array(questions.length).fill(0);

	function shuffleOptions(array: string[]) {
		let currentIndex = array.length;

		while (currentIndex !== 0) {
			let randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}

	function guess(option: string, index: number) {
		if (option === currentQuestion.answer) {
			optionStatus[index] = 1;
			guessStatus[currentQuestion.id] = 1;
		} else {
			optionStatus[index] = -1;
			guessStatus[currentQuestion.id] = -1;
		}
		setTimeout(() => {
			nextQuestion();
		}, 1000);
	}

	function nextQuestion() {
		const lastQuestion = questions[questions.length - 1];
		if (currentQuestion.id === lastQuestion.id) {
			finish();
			return;
		}

		optionStatus = [0, 0, 0, 0];
		currentQuestion = questions[currentQuestion.id + 1];
		shuffledOptions = shuffleOptions(currentQuestion.options);
	}

	function finish() {
		gameState = 'finished';
	}

	function resetGame() {
		currentQuestion = questions[0];
		shuffledOptions = shuffleOptions(currentQuestion.options);
		optionStatus = [0, 0, 0, 0];
		guessStatus = new Array(questions.length).fill(0);
		gameState = 'on-going';
	}

	function getAge(date: string) {
		const today = new Date();
		const birthDate = new Date(date);
		let age = today.getFullYear() - birthDate.getFullYear();
		const m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return `${age}`;
	}
</script>

<section class="section">
	<div class="content">
		{#if gameState === 'on-going'}
			<h1 class="title title--primary">Quiz</h1>
			<div class="quiz">
				<div class="quiz-title">
					<p class="text">Question {currentQuestion.id + 1} of {questions.length}</p>
					<!-- Progress bar -->
					<div class="progress-bar" style="grid-template-columns: repeat({questions.length}, 1fr)">
						{#each { length: questions.length } as _, index}
							<div
								class="bar {guessStatus[index] === 1
									? 'correct'
									: guessStatus[index] === -1
										? 'wrong'
										: currentQuestion.id === index
											? 'current'
											: ''}"
							/>
						{/each}
					</div>
					<h2 class="title title--secondary">{currentQuestion.prompt}</h2>
				</div>
				<div class="options">
					{#each shuffledOptions as option, index (option)}
						<button
							on:click={() => guess(option, index)}
							disabled={guessStatus[currentQuestion.id] !== 0}
							class="btn text {optionStatus[index] === -1
								? 'wrong'
								: optionStatus[index] === 1
									? 'correct'
									: ''}">{option}</button
						>
					{/each}
				</div>
			</div>
		{:else}
			<div class="results">
				<h1 class="title title--secondary">Results</h1>
				<p class="text">
					You got {guessStatus.filter((i) => i === 1).length} out of {questions.length} correct!
				</p>
				<div>
					<a href="/" class="cta">Back home</a>
					<button on:click={resetGame} class="cta cta--secondary">Try again</button>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	.section {
		margin-top: 8rem;
	}

	.quiz {
		margin-top: 2rem;
	}

	.quiz-title {
		margin-bottom: 1rem;
	}

	.progress-bar {
		display: grid;
		gap: 0.1rem;
		background-color: var(--clr-neutral-600);
		height: 0.5rem;
		border-radius: 100vw;
		margin-bottom: 2rem;
		overflow: hidden;
	}

	.bar {
		background-color: var(--clr-neutral-700);
	}

	.bar.current {
		background-color: var(--clr-neutral-100);
	}

	.bar.correct {
		background-color: #20c997;
	}

	.bar.wrong {
		background-color: var(--destructive);
	}

	.options {
		display: grid;
		gap: 0.5rem;
	}

	.btn {
		background-color: transparent;
		border: none;
		color: var(--foreground);
		border: 2px solid var(--foreground);
		border-radius: var(--rounding);
		cursor: pointer;
		padding: 1rem;
	}

	.wrong {
		border-color: var(--destructive);
		background-color: var(--destructive);
	}

	.correct {
		border-color: #20c997;
		background-color: #20c997;
	}

	.results {
		text-align: center;
		padding-block: 5rem;
	}

	.results p {
		margin: 0.5rem 0 2rem 0;
	}

	@media screen and (min-width: 45rem) {
		.options {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
