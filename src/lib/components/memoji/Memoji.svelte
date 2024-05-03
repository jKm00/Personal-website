<script lang="ts">
	import { SvelteComponent, onMount } from 'svelte';
	import EyeWrapper from './EyeWrapper.svelte';
	import { browser } from '$app/environment';

	let imgElement: HTMLImageElement;
	let eyeWrapper: SvelteComponent;

	let eyeSize = 30;
	let eyeGap = 53;

	onMount(() => {
		if (browser && imgElement) {
			// I don't like this, but it was the only
			// solution I found to making sure the image
			// had loaded before calculating the eye size
			const interval = setInterval(() => {
				if (imgElement.clientWidth > 0 && imgElement.clientHeight > 0) {
					calculateEyeSize();
					eyeWrapper.updateEyeWrapperCoords();
					eyeWrapper.calculatePupilPosition();
					clearInterval(interval);
				}
			});
		}
	});

	function calculateEyeSize() {
		const imgWidth = imgElement.clientWidth;

		if (imgWidth < 370) {
			eyeSize = 25;
		} else {
			eyeSize = 30;
		}

		eyeGap = 0.19 * imgWidth - 24.52;
	}
</script>

<svelte:window on:resize={calculateEyeSize} />

<div class="memoji-wrapper">
	<img
		bind:this={imgElement}
		src={'/assets/img/memojis/memoji-computer-no-eyes-transparent.png'}
		alt="Joakim Edvardsen emoji"
	/>
	<div class="eye-wrapper">
		<EyeWrapper bind:this={eyeWrapper} {eyeGap} {eyeSize} />
	</div>
</div>

<style scoped>
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
</style>
