<script lang="ts">
	export let size: number;
	export let pupilCoords: { x: number; y: number };
</script>

<div class="eye" style="--size: {size}px">
	<div
		class="outer-pupil"
		style="--left: {pupilCoords.x}px; --top: {pupilCoords.y}px; --pupilSize: {(size / 3) * 2}px"
	>
		<div class="inner-pupil" style="--size: {(size / 3) * 2}" />
	</div>
</div>

<style scoped>
	.eye {
		position: relative;
		border-radius: 100%;
		width: var(--size, 2.5rem);
		height: var(--size, 2.5rem);
	}

	.outer-pupil {
		position: absolute;
		width: var(--pupilSize);
		height: var(--pupilSize);
		padding: calc(var(--pupilSize) / 4);
		background-image: linear-gradient(to bottom right, #386a85, #a9d0da);
		left: calc(50% + var(--left, 0));
		top: calc(50% + var(--top, 50%));
		translate: -50% -50%;
		border-radius: 100%;
	}

	.inner-pupil {
		background-color: #000000;
		width: 100%;
		height: 100%;
		border-radius: 100%;
	}
</style>
