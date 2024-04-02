<script lang="ts">
	import type { Project, ProjectTmp } from '$lib/types/project';
	import ProjectCard from '../containers/ProjectCard.svelte';

	export let projects: ProjectTmp[];

	$: reversedProjects = [...projects].reverse();
</script>

<section id="projects" class="section projects">
	<div class="content">
		<h2 class="title title--secondary projects__title">Projects I've worked on</h2>
		<div class="projects--wrapper">
			{#each reversedProjects as project, index (project.id)}
				<ProjectCard {project} alignRight={index % 2 == 0} />
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
