<script lang="ts">
	import { onMount } from 'svelte';

	const map = ['front', 'back', 'left', 'right', 'top', 'bottom'];
	const memojis = [
		'/assets/img/memojis/memoji-computer.png',
		'/assets/img/memojis/memoji-brofist.png',
		'/assets/img/memojis/memoji-greeting-two.png',
		'/assets/img/memojis/memoji-greeting.png',
		'/assets/img/memojis/memoji-star.png',
		'/assets/img/memojis/memoji-thinking.png'
	];

	let selected = 0;

	$: console.log(selected);

	onMount(() => {
		let interval = setInterval(() => {
			selected = (selected + 1) % 6;
		}, 2000);

		return () => clearInterval(interval);
	});
</script>

<div class="scene">
	<div class="cube" data-show={map[selected]}>
		{#each memojis as memoji, index}
			<div class="cube__face {map[index]}">
				<img class="cube__img" src={memoji} alt="Memoji" />
			</div>
		{/each}
	</div>
</div>

<style scoped>
	.scene {
		--size: 200px;
		width: var(--size);
		height: var(--size);
		perspective: 600px;
	}

	.cube {
		--translateZ: calc(var(--size) / 2);
		height: 100%;
		width: 100%;
		position: relative;
		transform-style: preserve-3d;
		transform: translateZ(calc(var(--translateZ) * -1));
		transition: transform 1s;
	}

	.cube[data-show='front'] {
		transform: translateZ(calc(var(--translateZ) * -1)) rotateY(0deg);
	}

	.cube[data-show='right'] {
		transform: translateZ(calc(var(--translateZ) * -1)) rotateY(-90deg);
	}

	.cube[data-show='left'] {
		transform: translateZ(calc(var(--translateZ) * -1)) rotateY(90deg);
	}

	.cube[data-show='back'] {
		transform: translateZ(calc(var(--translateZ) * -1)) rotateY(180deg);
	}

	.cube[data-show='top'] {
		transform: translateZ(calc(var(--translateZ) * -1)) rotateX(-90deg);
	}

	.cube[data-show='bottom'] {
		transform: translateZ(calc(var(--translateZ) * -1)) rotateX(90deg);
	}

	.cube__face {
		--hue: 0;
		display: grid;
		place-items: center;
		background-color: hsl(0 0% 11% / 1);
		height: 100%;
		width: 100%;
		position: absolute;
	}

	.front {
		--hue: 0;
		transform: rotateX(0deg) translateZ(var(--translateZ));
	}

	.right {
		--hue: 60;
		transform: rotateY(90deg) translateZ(var(--translateZ));
	}

	.back {
		--hue: 120;
		transform: rotateY(180deg) translateZ(var(--translateZ));
	}

	.left {
		--hue: 180;
		transform: rotateY(-90deg) translateZ(var(--translateZ));
	}

	.top {
		--hue: 240;
		transform: rotateX(90deg) translateZ(var(--translateZ));
	}

	.bottom {
		--hue: 300;
		transform: rotateX(-90deg) translateZ(var(--translateZ));
	}

	.cube__img {
		width: 100%;
	}
</style>
