<script lang="ts">
	import type { Project } from '../app/types/Project';

	export let project: Project;
</script>

<div class="card shadow">
	<img class="card__img" src={project.thumbnail.path} alt={project.thumbnail.alt} />
	<div class="card__body">
		<h3 class="card__body__title">{project.title}</h3>
		<p class="card__body__desc">{project.desc}</p>
		<a class="btn" href={'/portfolio/' + project.id}>Read more</a>
	</div>
</div>

<style scoped lang="scss">
	.card {
		position: relative;
		overflow: hidden;

		&__img {
			height: 100%;
			min-height: 15rem;
			object-fit: cover;
		}

		&__body {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 2rem;
			padding: 2rem;
			background-color: var(--clr-neutral-100);
			position: absolute;
			inset: 0;
			transform: translateY(100%);
			transition: transform 200ms ease-in-out;

			&__title {
				font-family: var(--ff-special);
				font-weight: var(--fw-bold);
			}

			&__desc {
				font-family: var(--ff-primary);
				font-weight: var(--fw-bold);
				font-size: var(--fs-350);
			}

			& .btn {
				background-color: var(--clr-accent-400);
				font-size: var(--fs-250);
				color: var(--clr-neutral-100);
			}
		}
	}

	.card:hover .card__body,
	.card:focus .card__body {
		transform: translateY(0);
	}
</style>
