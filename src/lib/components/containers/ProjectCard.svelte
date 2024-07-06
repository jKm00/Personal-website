<script lang="ts">
	import type { Project } from '$lib/types/project';
	import { Status } from '$lib/types/status';
	import Stats from '../Stats.svelte';

	export let project: Project;
	export let alignRight: boolean;
</script>

<div class="project" class:align-right={alignRight}>
	<a href={'/projects/' + project.id}>
		<div class="project__img--wrapper">
			<img
				class="project__img"
				src={project.thumbnail.path}
				alt={project.thumbnail.alt}
				loading="lazy"
			/>
		</div>
	</a>
	<div class="project__content">
		<p
			class="project__content__status text"
			class:completed={project.status === Status.FINISHED}
			class:in-progress={project.status === Status.IN_PROGRESS}
		>
			<span class="project__content__status--bold">Status: </span>{project.status}
		</p>
		<h3 class="project__content__title title title--third">{project.title}</h3>
		<div class="card card--light">
			<p class="card__text text">{project.desc}</p>
			<a href={'/projects/' + project.id} class="card__link link">View more details</a>
		</div>
		<p class="sr-only">Tools used in this project:</p>
		<Stats stats={project.stack} {alignRight} />
	</div>
</div>

<style lang="scss">
	.project {
		&__img--wrapper {
			position: relative;
			z-index: 1;
		}

		&__img--wrapper::after {
			content: '';
			display: block;
			position: absolute;
			inset: 0;
			background-color: #272525;
			opacity: 0.5;
			transition: opacity 150ms ease-in-out;
		}

		&__img--wrapper:hover::after {
			opacity: 0;
		}

		&__content {
			margin-top: 1rem;

			&__status {
				font-size: var(--fs-300);
			}

			&__status--bold {
				color: var(--clr-neutral-000);
			}

			&__title {
				margin-bottom: 1em;
			}

			& .card {
				display: flex;
				flex-direction: column;
				align-items: start;
				margin-bottom: 0.5em;

				&__text {
					margin-bottom: 1rem;
				}

				&__link {
					font-size: var(--fs-300);
				}
			}
		}
	}

	.completed {
		color: var(--clr-accent-400);
	}

	.in-progress {
		color: orange;
	}

	@media screen and (min-width: 60rem) {
		.project {
			position: relative;

			&__img--wrapper {
				width: 50%;
				margin-left: 50%;
			}

			&__img {
				box-shadow: var(--shadow);
			}

			&__content {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				left: 0;
				right: 45%;
				z-index: 10;
				margin-top: 0;
			}
		}

		.align-right {
			& .project__img--wrapper {
				margin-left: 0;
			}

			& .project__content {
				right: 0;
				left: 45%;

				&__status,
				&__title {
					text-align: right;
				}
			}

			& .card__link {
				align-self: end;
			}
		}
	}
</style>
