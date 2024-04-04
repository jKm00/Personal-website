<script lang="ts">
	import '../../reset.css';
	import '../../theme.css';
	import '../../utils.css';
</script>

<div class="body">
	<slot />
</div>

<style scoped>
	.body {
		display: grid;
		place-items: center;
		height: 100dvh;
	}
</style>
