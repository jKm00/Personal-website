<script lang="ts">
</script>

<div class="swiper-item">
	<slot class="swiper-item-child" />
</div>

<style lang="scss">
	.swiper-item {
		display: block;
		width: 100%;
		max-height: 100%;
	}

	:global(.swiper-item > *) {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
</style>
