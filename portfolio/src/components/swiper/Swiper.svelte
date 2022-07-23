<script lang="ts">
	import { onMount } from 'svelte';

	/* Porps */
	export let maxWidth: string = '100%';
	export let maxHeight: string = '100%';
	export let colorTheme: string = '#fff';
	export let spacing: string = '1rem';
	export let navigation: boolean = true;

	/* Styles based on props */
	let styles = {
		maxWidth: maxWidth,
		maxHeight: maxHeight,
		colorTheme: colorTheme,
		spacing: spacing
	};

	$: cssStyles = Object.entries(styles)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');

	/* Swiper logic */
	let swiper: HTMLElement;
	let swiperWidth: number;
	let currentSlide = 0;
	let numberOfItems: number;

	onMount(() => {
		numberOfItems = swiper.childElementCount;
	});

	$: translateAmount = swiperWidth * currentSlide;

	const next = () => {
		currentSlide = (currentSlide + 1) % numberOfItems;
	};

	const prev = () => {
		currentSlide--;
		if (currentSlide < 0) {
			currentSlide = numberOfItems - 1;
		}
	};

	$: console.log(translateAmount);
</script>

<section bind:clientWidth={swiperWidth} class="swiper" style={cssStyles}>
	<div bind:this={swiper} class="swiper-carousel">
		<slot />
	</div>
	{#if navigation}
		<button on:click={prev} class="navigation-button" data-prev
			><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
				><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
					d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
				/></svg
			></button
		>
		<button on:click={next} class="navigation-button" data-next
			><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
				><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
					d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
				/></svg
			></button
		>
	{/if}
</section>

<style lang="scss">
	.swiper {
		.swiper-carousel {
			display: flex;
			max-height: var(--maxHeight);
			max-width: var(--maxWidth);
			overflow: hidden;
			position: relative;
		}

		:global(.swiper-carousel > *) {
			flex-grow: 1;
			flex-shrink: 0;
			flex-basis: 100%;
		}

		& .navigation-button {
			display: grid;
			place-items: center;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			--size: 2.5rem;
			background-color: transparent;
			border: none;
			height: var(--size);
			width: var(--size);
			border-radius: 100px;

			& svg {
				width: 0.75rem;
				fill: var(--colorTheme);
			}

			&[data-next] {
				right: var(--spacing);
			}

			&[data-prev] {
				left: var(--spacing);
			}
		}

		& .navigation-button:hover,
		& .navigation-button:focus-visible {
			background-color: rgba(0, 0, 0, 0.7);
		}
	}
</style>
