<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, params }) => {
		const response = await fetch('../api/projects/' + params.id);
		const data = await response.json();

		if (response.ok) {
			return {
				props: {
					project: data.project
				}
			};
		}
		return {
			props: {
				status: response.status,
				error: data.error
			}
		};
	};
</script>

<script lang="ts">
	import type { Project } from '../../app/types/Project';
	import Stats from '../../components/Stats.svelte';
	import Swiper from '../../components/swiper/Swiper.svelte';
	import SwiperItem from '../../components/swiper/SwiperItem.svelte';

	export let status: number | undefined = undefined;
	export let error: string | undefined = undefined;
	export let project: Project;
</script>

<div class="section">
	{#if error}
		<div class="error--wrapper content">
			<h1 class="title">{status}: {error}</h1>
			<a sveltekit:prefetch href="/" class="link">Back to home page</a>
		</div>
	{:else}
		<article class="project content" id="project">
			<!-- TODO: Change to swiper -->
			<Swiper maxHeight={'500px'} colorTheme={'#20c997'}>
				{#each project.images as image}
					<SwiperItem>
						<img src={image.path} alt={image.alt} loading="lazy" />
					</SwiperItem>
				{/each}
			</Swiper>
			<Stats stats={project.stack} alignRight={false} />
			<div class="title--wrapper">
				<p class="text">Status: <span class="highlighted">{project.status}</span></p>
				<h1 class="title">{project.title}</h1>
				<div class="contributers">
					<ul class="horizontal-list">
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
			<section id="project-text">
				{#each project.text as paragraph}
					<p class="paragraph">{paragraph}</p>
				{/each}
			</section>
			<a class="github-link" href={project.githubLink} target="_blank"
				>Go check out the repo for yourself!</a
			>
		</article>
	{/if}
</div>

<style lang="scss">
	.section {
		background-color: var(--clr-neutral-800);
	}

	.error--wrapper {
		display: grid;
		justify-items: center;
		align-content: center;
		height: 100vh;

		& h1 {
			margin-bottom: 1em;
		}
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
			margin-bottom: 2.5rem;

			& .title {
				margin-bottom: 1em;
			}
		}

		& .paragraph {
			margin-bottom: 2rem;
			max-width: 80ch;
			line-height: 2.5em;
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
				color: var(--clr-neutral-500);
				font-size: var(--fs-350);
			}

			&__link {
				color: var(--clr-neutral-500);
				font-size: var(--fs-350);
				text-decoration: none;
			}

			&__link:hover,
			&__link:focus {
				color: var(--clr-accent-400);
				text-decoration: underline;
			}
		}

		& .github-link {
			color: var(--clr-accent-400);
		}
	}
</style>
