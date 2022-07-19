<script lang="ts">
	interface Svg {
		file: string;
		alt: string;
	}

	interface Framework {
		svg: Svg;
		title: string;
		desc: string;
		link: string;
	}

	export let framework: Framework;
</script>

<a class="card" href={framework.link} target="_blank">
	<img
		class="card__img"
		src={'/icons/' + framework.svg.file}
		alt={framework.svg.alt}
		loading="lazy"
	/>
	<h3 class="card__title title">{framework.title}</h3>
	<p class="card__desc">{framework.desc}</p>
</a>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		color: var(--clr-neutral-000);
		text-decoration: none;

		&__img {
			max-width: 2rem;
		}

		&__desc {
			font-family: var(--ff-primary);
			font-size: var(--fs-300);
		}
	}

	@media only screen and (min-width: 45rem) {
		.card {
			&__img {
				max-width: 3rem;
				margin-bottom: 2rem;
			}

			&__desc {
				font-size: var(--fs-400);
			}
		}
	}
</style>
