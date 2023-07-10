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
					Computer engineer student at NTNU Ålesund. Soon to be professional full stack developer
				</p>
				<a
					in:fade={{ duration: duration, delay: 450 }}
					href="mailto: joakimedvardsen2000@gmail.com"
					class="link start-align">Take contact</a
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

	@media screen and (min-width: 45rem) {
		.hero {
			& img {
				width: auto;
				margin: 0;
			}
		}
	}
</style>
