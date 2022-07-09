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
			text: 'Started basic with the web',
			placement: 'second'
		},
		{
			icons: [
				{ path: '/icons/python-original.svg', alt: 'python logo' },
				{ path: '/icons/java-original.svg', alt: 'java logo' },
				{ path: '/icons/git-original.svg', alt: 'git logo' }
			],
			year: '2020',
			text: 'Started basic with the web',
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
			text: 'Started basic with the web',
			placement: 'fourth'
		},
		{
			icons: [
				{ path: '/icons/vuejs-original.svg', alt: ' logo' },
				{ path: '/icons/svelte-original.svg', alt: ' logo' },
				{ path: '/icons/typescript-original.svg', alt: ' logo' }
			],
			year: '2022',
			text: 'Started basic with the web',
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
		outline: 1px solid red;
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-areas:
			'first . third . fifth'
			'. second . fourth .';
	}
</style>
