<script lang="ts">
	import ErrorPage from '$lib/components/feedback/ErrorPage.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import { Status } from '$lib/types/status';
	import Stats from '$lib/components/Stats.svelte';

	export let data;

	$: ({ project } = data);
</script>

<div class="section">
	{#if !project}
		<ErrorPage />
	{:else}
		<article class="project content" id="project">
			<!-- TODO: Change to swiper -->
			<Carousel images={project.images} spacingBottom={0.5} />
			<Stats stats={project.stack} alignRight={false} />
			<div class="title--wrapper">
				<p class="text">
					Status: <span
						class:completed={project.status === Status.FINISHED}
						class:in-progress={project.status === Status.IN_PROGRESS}>{project.status}</span
					>
				</p>
				<h1 class="title">{project.title}</h1>
				<div class="contributers">
					<ul class="horizontal-list authors">
						<li class="horizontal-list__item">Authors:</li>
						{#each project.contributers as contributer}
							<li class="horizontal-list__item">
								<a class="horizontal-list__link" href={contributer.githubLink} target="_blank"
									>{contributer.name}</a
								>
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<div class="features">
				<h2 class="title">Features</h2>
				<ul class="vertical-list">
					{#each project.features as feature}
						<li class="vertical-list__item">{feature}</li>
					{/each}
				</ul>
			</div>
			<div id="project-text">
				{#each project.content as content}
					<section class="content-section">
						{#if content.title}
							<h2 class="title">{content.title}</h2>
						{/if}
						{#each content.text as paragraph}
							<p class="paragraph">{paragraph}</p>
						{/each}
					</section>
				{/each}
			</div>
			{#if project.resources}
				<section class="resources">
					<h3 class="resource-header title">Resources:</h3>
					<ul class="vertical-list">
						{#each project.resources as resource}
							<li class="vertical-list__item">
								{resource.label}
								<a class="resource-link" href={resource.link} target="_blank">{resource.link}</a>
							</li>
						{/each}
					</ul>
				</section>
			{/if}
		</article>
	{/if}
</div>

<style lang="scss">
	.section {
		background-color: var(--clr-neutral-800);
	}

	.project {
		min-height: 100vh;
		margin: 5rem 0;
		padding-bottom: 5rem;
		font-family: var(--ff-primary);

		& .title--wrapper {
			margin: 3rem 0 2.5rem;

			& .title {
				font-size: var(--fs-600);
				margin: 0.5rem 0;
			}
		}

		& .features {
			margin-bottom: 4rem;

			& .title {
				margin-bottom: 1em;
			}
		}

		& .content-section {
			margin-bottom: 4rem;

			& .title {
				margin-bottom: 1rem;
			}

			& .paragraph {
				margin-bottom: 2rem;
				max-width: 80ch;
				line-height: 2.5em;
			}
		}

		& .vertical-list {
			list-style-type: disc;
			margin-left: 1em;
			font-size: var(--fs-350);

			&__item:not(:last-child) {
				margin-bottom: 0.5rem;
			}
		}

		& .horizontal-list {
			display: flex;
			flex-wrap: wrap;
			align-items: end;
			gap: 1rem;

			&__item {
				color: var(--clr-neutral-400);
				font-size: var(--fs-350);
			}

			&__link {
				color: var(--clr-neutral-400);
				font-size: var(--fs-350);
				text-decoration: none;
			}

			&__link:hover,
			&__link:focus {
				color: var(--clr-accent-400);
				text-decoration: underline;
			}
		}

		& .resources {
			margin-bottom: 2rem;
		}

		& .resource-header {
			margin-bottom: 1em;
		}

		& .resource-link {
			color: var(--clr-accent-400);
		}

		.completed {
			color: var(--clr-accent-400);
		}

		.in-progress {
			color: orange;
		}
	}
</style>
