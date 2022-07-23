<script lang="ts">
	import Stats from '../../Stats.svelte';

	const stats = [
		{
			label: 'Born',
			value: '15.02.2000'
		},
		{
			label: 'Citizen',
			value: 'Norwegian'
		},
		{
			label: 'Favorite movie',
			value: 'Star wars: Revenge of the Sith'
		}
	];
</script>

<section id="about" class="section about">
	<div class="content two-column--big">
		<img
			class="about__img rounded"
			src="/img/me/me-hiking-compressed.jpg"
			alt="Joakim Edvardsen"
			loading="lazy"
		/>
		<div class="section__text">
			<h2 class="title title--secondary about__title">About</h2>
			<div class="card about__card">
				<p class="text">
					I'm a full stack developer from Norway. I'm currently in my third and final year of my
					batchelor degree in computer science and are thinking of appling for a master in computer
					technology.
				</p>
				<p class="text">
					Started fiddeling with programming when I was 16 and have loved it every since. Besides
					developing, I enjoy some computer games and going to the gym to hang out with friends and
					to work out.
				</p>
				<p class="text">
					More and more I find my self learning about knew technologies and the ability to solve
					problems in an afficient and elegant way.
				</p>
			</div>
			<Stats {stats} alignRight={false} />
		</div>
	</div>
</section>

<style lang="scss">
	.two-column--big {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.about {
		padding: 3rem 0;
		margin: 2rem 0 5rem 0;

		&__img {
			width: 100%;
			max-height: 30rem;
			object-fit: cover;
			margin: auto;
		}

		&__title {
			margin-bottom: 1em;
		}

		&__card {
			margin-bottom: 1em;
		}

		& p {
			margin-bottom: 1em;
		}
	}

	@media screen and (min-width: 60rem) {
		.two-column--big {
			flex-direction: row;
			align-items: center;
		}
	}
</style>
