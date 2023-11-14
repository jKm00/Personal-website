<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	// TODO: randomly select memoji on load
	const IMAGES = [
		'memoji-brofist.png',
		'memoji-computer.png',
		'memoji-greeting.png',
		'memoji-greeting-two.png',
		'memoji-star.png',
		'memoji-thinking.png'
	];

	// Animation settings
	let duration = 1000;
	let yValue = 40;

	let loaded = false;

	onMount(() => {
		loaded = true;
	});
</script>

{#if loaded}
	<section id="hero" class="section section--no-spacing hero">
		<div class="content two-column">
			<div class="content__text">
				<h1 class="title title--primary title--extra">
					<span in:fly={{ y: yValue, duration: duration }}>Hi 👋, I'm</span><br />
					<div in:fly={{ y: yValue, duration: duration, delay: 100 }}>
						Joakim<br />
						Edvardsen
					</div>
				</h1>
				<h2
					in:fly={{ y: yValue, duration: duration, delay: 200 }}
					class="title title--small highlighted"
				>
					Full stack software engineer
				</h2>
				<p in:fly={{ y: yValue, duration: duration, delay: 300 }} class="text">
					Computer engineer student at NTNU Trondheim. Soon to be professional full stack developer.
				</p>
				<a
					in:fade={{ duration: duration, delay: 450 }}
					href="mailto: joakimedvardsen2000@gmail.com"
					class="cta"
					>Take contact<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
						><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
						/></svg
					></a
				>
				<a
					in:fade={{ duration: duration, delay: 500 }}
					href="https://github.com/jKm00"
					target="_blank"
					class="cta cta--secondary"
					>Check out GitHub<svg
						xmlns="http://www.w3.org/2000/svg"
						height="1em"
						viewBox="0 0 448 512"
						><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
						/></svg
					></a
				>
			</div>
			<img
				in:fly={{ y: yValue, duration: duration * 1.5 }}
				src={'/assets/img/memojis/memoji-computer.png'}
				alt="Joakim Edvardsen emoji"
			/>
		</div>
	</section>
{:else}
	<section id="hero" class="section loading-wrapper" />
{/if}

<style lang="scss">
	.section {
		align-items: center;
		min-height: 100vh;

		background-size: 300% 300%;
		// background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
		animation: background-animation 10s ease infinite;
	}

	.loading-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hero {
		& .content {
			justify-content: space-between;
			align-items: center;
		}

		& h1 {
			margin-bottom: 1em;
		}

		& h2 {
			margin-bottom: 1em;
		}

		& p {
			margin-bottom: 2rem;
		}

		& img {
			width: 25vh;
			margin: 2rem auto 0 auto;
		}
	}

	@media screen and (min-width: 50rem) {
		.hero {
			& img {
				width: auto;
				margin: 0;
			}
		}
	}
</style>
