<script lang="ts">
	import Timeline from './Timeline.svelte';
</script>

<section class="languages" id="languages">
	<div class="languages__content">
		<h2 class="languages__title title">Languages</h2>
		<div class="languages__text--wrapper">
			<p class="languages__text">
				It all started with HTML and CSS when I was about 15-years-old. I liked to design webpages
				and challenge myself with more and more difficult layouts and components.
			</p>
			<p class="languages__text">
				When I was 20, I started my batchelor where I learned all about the concepts of object
				oriented programming. This for me has been the most rewarding knowlegde as I can bring all
				these concepts into almost any language I want to try.
			</p>
			<p class="languages__text">
				In the summer of 2022 I worked for a software company where they used spring boot for their
				backend API and vue together with typescript for their frontend. I learned a lot during this
				time and started looking into other frontend frameworks.
			</p>
		</div>
	</div>
	<Timeline />
</section>

<style scoped lang="scss">
	.languages {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: inherit;
		background-color: var(--clr-neutral-100);
		min-height: 100vh;
		padding: 4em 0;
		position: relative;
		z-index: 1;

		&__content {
			grid-column: 2 / 3;
		}

		&__title {
			font-size: var(--fs-seconday-heading);
			text-align: center;
			margin-bottom: 2rem;
		}

		&__text--wrapper {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
			gap: 3rem;
			margin-bottom: 3rem;
		}

		&__text {
			font-family: var(--ff-body);
			font-weight: var(--fw-bold);
			font-size: var(--fs-350);
			line-height: 2rem;
			max-width: 40rem;
			margin-bottom: 1rem;
		}
	}
</style>
