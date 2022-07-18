<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { Project } from '../app/types/Project';

	export let projects: Project[];
</script>

<section id="projects" class="section projects">
	<div class="content">
		<h2 class="title title--secondary projects__title">Projects I've work on</h2>
		<div class="projects--wrapper">
			{#each projects as project (project.id)}
				<ProjectCard {project} alignRight={project.id % 2 != 0} />
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.projects {
		padding: 5rem 0 8rem 0;
		background-color: var(--clr-neutral-800);
    background: linear-gradient(var(--clr-neutral-900), var(--clr-neutral-800));
	}

	.projects__title {
		margin-bottom: 1.5em;
	}

	.projects--wrapper {
		display: flex;
		flex-direction: column;
		gap: 5rem;
	}

	@media screen and (min-width: 60rem) {
		.projects {
			padding-top: 8rem;
		}

		.projects--wrapper {
			gap: 10rem;
		}
	}
</style>
