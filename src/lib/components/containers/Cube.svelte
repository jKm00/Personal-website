<script lang="ts">
	let selected = 'front';

	$: console.log(selected);
</script>

<div class="scene">
	<div class="cube" data-show={selected}>
		<div class="cube__face front">Front</div>
		<div class="cube__face back">Back</div>
		<div class="cube__face left">Left</div>
		<div class="cube__face right">Right</div>
		<div class="cube__face top">Top</div>
		<div class="cube__face bottom">Bottom</div>
	</div>
</div>

<label>
	<input type="radio" bind:group={selected} value="front" checked />
	front
</label>
<label>
	<input type="radio" bind:group={selected} value="right" />
	right
</label>
<label>
	<input type="radio" bind:group={selected} value="left" />
	left
</label>
<label>
	<input type="radio" bind:group={selected} value="back" />
	back
</label>
<label>
	<input type="radio" bind:group={selected} value="top" />
	top
</label>
<label>
	<input type="radio" bind:group={selected} value="bottom" />
	bottom
</label>

<style scoped>
	.scene {
		--size: 300px;
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
		background-color: hsl(var(--hue) 50% 50% / 0.8);
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
</style>
