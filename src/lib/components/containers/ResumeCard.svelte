<script lang="ts">
	interface ResumeItem {
		title: string;
		company?: string;
		start: string;
		end: string;
		place: string;
		desc: string;
	}

	export let item: ResumeItem;
	export let small: boolean;
</script>

<article class="resume-card" class:resume-card--small={small}>
	<div>
		{#if item.company}
			<p class="resume-card__label"><span class="sr-only">Company: </span>{item.company}</p>
		{/if}
		<h3 class="resume-card__title title" aria-label="Role: {item.title}">
			{item.title}
		</h3>
	</div>
	<div class="resume-card__stats">
		<p class="sr-only">From {item.start} {item.end !== '' ? `to ${item.end}` : ''}</p>
		<p class="resume-card__stats__date" aria-hidden="true">
			{item.start} -
			<br />
			{item.end}
		</p>
		<p class="resume-card__stats__place">
			<span class="sr-only">Work location: </span>{item.place}
		</p>
	</div>
	<p class="resume-card__desc">{item.desc}</p>
</article>

<style lang="scss">
	.resume-card {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		column-gap: var(--column-gap);
		min-height: 5rem;

		&__title {
			color: var(--clr-accent-400);
			line-height: 1.3em;
		}

		&__label {
			font-size: 0.9rem;
		}

		&__stats {
			display: flex;
			justify-content: space-between;
			align-items: end;
			color: var(--clr-neutral-400);
		}

		&--small {
			row-gap: 0.5rem;
		}
	}

	@media screen and (min-width: 55rem) {
		.resume-card {
			grid-column: 1 / -1;
			display: grid;
			grid-template-columns: inherit;
			grid-template-areas:
				'stats title'
				'stats desc';

			&__title {
				grid-area: title;
				align-self: start;
			}

			&__stats {
				grid-area: stats;
				flex-direction: column;
				align-items: start;
			}

			&__desc {
				grid-area: desc;
				justify-self: start;
			}

			/* 
        Just to bump the text a little bit closer to the title
        so it looks cleaner
      */
			&--small {
				& .resume-card__desc {
					margin-top: -1.5rem;
				}
			}
		}
	}
</style>
