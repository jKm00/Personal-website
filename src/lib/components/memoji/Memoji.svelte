<script lang="ts">
	import { SvelteComponent, onMount } from 'svelte';
	import EyeWrapper from './EyeWrapper.svelte';
	import { browser } from '$app/environment';

	let windowWidth: number;

	let imgElement: HTMLImageElement;
	let eyeWrapper: SvelteComponent;

	let eyeSize = 30;
	let eyeGap = 53;

	$: showMovingEyes = windowWidth > 800;

	onMount(() => {
		if (browser) {
			// I don't like this, but it was the only
			// solution I found to making sure the image
			// had loaded before calculating the eye size
			const interval = setInterval(() => {
				if (imgElement.clientWidth > 0) {
					calculateEyeSize();
					eyeWrapper.updateEyeWrapperCoords();
					eyeWrapper.calculatePupilPosition();
					clearInterval(interval);
				}
			});
		}
	});

	function calculateEyeSize() {
		if (!imgElement) return;

		const imgWidth = imgElement.clientWidth;
		eyeGap = 0.19 * imgWidth - 20.52;
	}
</script>

<svelte:window on:resize={calculateEyeSize} bind:innerWidth={windowWidth} />

<div class="memoji-wrapper">
	{#if showMovingEyes}
		<img
			bind:this={imgElement}
			src={'/assets/img/memojis/memoji-computer-no-eyes-transparent.png'}
			alt="Joakim Edvardsen emoji"
		/>
		<div class="eye-wrapper">
			<EyeWrapper bind:this={eyeWrapper} {eyeGap} {eyeSize} />
		</div>
	{:else}
		<img src={'/assets/img/memojis/memoji-computer.png'} alt="Joakim Edvardsen emoji" />
	{/if}
</div>

<style scoped>
	img {
		width: 25vh;
		margin: 1rem auto 0 auto;
	}

	.memoji-wrapper {
		position: relative;
		width: fit-content;
	}

	.eye-wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -45%;
	}

	@media screen and (min-width: 50rem) {
		img {
			width: auto;
			margin: 0;
		}
	}
</style>
