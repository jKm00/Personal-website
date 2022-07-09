<script lang="ts">
	import TimelineEvent from './TimelineEvent.svelte';

	let events = [
		{
			icons: [
				{ path: '/icons/html5-original.svg', alt: 'html5 logo' },
				{ path: '/icons/css3-original.svg', alt: 'css3 logo' }
			],
			year: '2016',
			text: 'Started basic with the web',
			placement: 'first'
		},
		{
			icons: [{ path: '/icons/javascript-original.svg', alt: 'javascript logo' }],
			year: '2017',
			text: 'Learned some basic JS by myself',
			placement: 'second'
		},
		{
			icons: [
				{ path: '/icons/python-original.svg', alt: 'python logo' },
				{ path: '/icons/java-original.svg', alt: 'java logo' },
				{ path: '/icons/git-original.svg', alt: 'git logo' }
			],
			year: '2020',
			text: 'Started on my batchelor where i learned about object oriented programming',
			placement: 'third'
		},
		{
			icons: [
				{ path: '/icons/spring-original.svg', alt: 'spring logo' },
				{ path: '/icons/react-original.svg', alt: 'react logo' },
				{ path: '/icons/mysql-original.svg', alt: 'mysql logo' },
				{ path: '/icons/postgresql-original.svg', alt: 'postgresql logo' },
				{ path: '/icons/docker-original.svg', alt: 'docker logo' },
				{ path: '/icons/nginx-original.svg', alt: 'nginx logo' }
			],
			year: '2021',
			text: 'Got more into web development',
			placement: 'fourth'
		},
		{
			icons: [
				{ path: '/icons/vuejs-original.svg', alt: ' logo' },
				{ path: '/icons/svelte-original.svg', alt: ' logo' },
				{ path: '/icons/typescript-original.svg', alt: ' logo' }
			],
			year: '2022',
			text: 'Looked into more front-end frameworks and fell in love with typescript',
			placement: 'fifth'
		}
	];
</script>

<div class="timeline">
	{#each events as event (event.year)}
		<TimelineEvent {event} />
	{/each}
</div>

<style scoped lang="scss">
	.timeline {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-areas:
			'first . third . fifth'
			'. second . fourth .';
		row-gap: 1.5rem;
		padding: 0 2rem;
		position: relative;
	}

	.timeline::before {
		content: 'Timeline';
		display: block;
		position: absolute;
		left: 5%;
		top: 54%;
		font-family: var(--ff-special);
		text-transform: lowercase;
		opacity: 0.7;
	}

	.timeline::after {
		content: '';
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 90%;
		height: 0.3rem;
		background-color: var(--clr-main-400);
	}
</style>
