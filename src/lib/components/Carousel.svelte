<script lang="ts">
	import { onMount } from 'svelte';
	import type { Image } from '$lib/types/image';

	export let images: Image[];
	export let spacingBottom: number; // in rem

	let carouselWidth: number;
	let currentSlide = 0;
	let gap = 10; // in px
	let autoScroll = true;
	let progress = 0;

	onMount(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

		// Only create intervall if prefers reduced motion is false
		// and if there are more than one image
		if (!mediaQuery.matches && images.length > 1) {
			setInterval(() => {
				if (autoScroll) {
					progress = (progress + 0.1) % 100;
					// Change to next slide when progess reaches 100%
					if (Math.round(progress * 100) / 100 === 100) {
						next();
					}
				}
			}, 1);
		}
	});

	/**
	 * Slides to the next iamge
	 */
	const next = () => {
		currentSlide = (currentSlide + 1) % images.length;
	};

	/**
	 * Slides to the previous image
	 */
	const prev = () => {
		currentSlide--;
		if (currentSlide < 0) {
			currentSlide = images.length - 1;
		}
	};

	/**
	 * Changes to the images with the index given
	 * @param index the index of the image to slide to
	 */
	const change = (index: number) => {
		currentSlide = index;
	};

	/**
	 * Calculates the amount the images has to slide
	 */
	$: transformAmount = currentSlide * carouselWidth + gap * currentSlide;
</script>

<div class="carousel--wrapper">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		on:mouseenter={() => (autoScroll = false)}
		on:mouseleave={() => (autoScroll = true)}
		bind:clientWidth={carouselWidth}
		style={`gap: ${gap}px; margin-bottom: ${spacingBottom}rem`}
		class="carousel"
	>
		{#if images.length === 0}
			<p class="title error-msg">Could not load the images 😢</p>
		{:else}
			{#each images as image}
				<img
					on:dragstart|preventDefault={() => {
						return false;
					}}
					style="transform: translateX({-transformAmount}px); {image.fit
						? `--objectFit:${image.fit}`
						: ''}"
					class="carousel__item unselectable"
					src={image.path}
					alt={image.alt}
				/>
			{/each}
			<div style={`transform: scaleX(${progress}%)`} class="carousel__progress-bar" />
		{/if}
	</div>
	<!-- Controls -->
	{#if images.length > 1}
		<div class="controls">
			<button on:click={prev} class="controls__navigation controls__navigation--prev"
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
					><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
						d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
					/></svg
				></button
			>
			<button on:click={next} class="controls__navigation controls__navigation--next"
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
					><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
						d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
					/></svg
				></button
			>
			<div class="controls__pagination">
				{#each images as dot, i}
					<button
						on:click={() => change(i)}
						value={i}
						class="dot"
						class:active={currentSlide === i}
					/>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.carousel--wrapper {
		display: grid;
		margin-bottom: 1rem;
	}

	.carousel {
		--spacing: 1rem;
		--themeColor: var(--clr-accent-400);
		display: flex;
		aspect-ratio: 16 / 8;
		overflow: hidden;
		position: relative;
		background-color: var(--card-bg-light);

		& .error-msg {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		&__item {
			--objectFit: cover;
			flex-grow: 1;
			flex-shrink: 0;
			flex-basis: 100%;
			object-fit: var(--objectFit);

			pointer-events: none;

			transition: transform 500ms ease-in-out;
		}

		&__progress-bar {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 0.2rem;
			background-color: var(--clr-accent-400);
			transform-origin: left;
		}
	}

	.controls {
		--color: var(--clr-neutral-200);
		display: flex;
		gap: 0.25rem;
		align-items: center;

		&__navigation {
			--size: 2rem;
			display: grid;
			place-items: center;
			height: var(--size);
			width: var(--size);

			background-color: transparent;
			border: 2px var(--color) solid;
			border-radius: 100vw;

			transition:
				background-color 100ms ease-in-out,
				border 100ms ease-in-out;

			& svg {
				width: 0.6rem;
				fill: var(--color);
			}

			&--prev {
				left: var(--spacing);
			}

			&--next {
				right: var(--spacing);
			}
		}

		&__navigation:hover,
		&__navigation:focus-visible {
			background-color: var(--clr-accent-200);
			color: var(--foreground);
			border: 1px solid var(--clr-accent-200);
		}

		&__pagination {
			display: flex;
			gap: 0.5rem;
			bottom: var(--spacing);
			margin-inline: 0.5rem;

			& > * {
				--size: 0.75rem;
				height: var(--size);
				width: var(--size);
				border: none;
				border-radius: 100%;
				background-color: var(--color);
			}

			& .active {
				background-color: var(--clr-accent-200);
			}
		}
	}
</style>
