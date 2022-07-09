<script lang="ts">
	interface Icon {
		path: string;
		alt: string;
	}

	interface Event {
		icons: Icon[];
		year: string;
		text: string;
		placement: string;
	}

	export let event: Event;
</script>

<div class={'event ' + event.placement}>
	<h3 class="event__year">{event.year}</h3>
	<p class="event__desc">{event.text}</p>
	<div class="event__icon--wrapper">
		{#each event.icons as icon}
			<img class="event__icon" src={icon.path} alt={icon.alt} />
		{/each}
	</div>
</div>

<style scoped lang="scss">
	.event {
		display: flex;
		flex-direction: column;
		gap: 1em;
		text-align: center;
		position: relative;

		&__icon {
			max-width: 3.5rem;

			&--wrapper {
				display: flex;
				justify-content: center;
				gap: 1rem;
			}
		}

		&__year {
			font-family: var(--ff-special);
			font-weight: var(--fw-bold);
			font-size: var(--fs-550);
		}

		&__desc {
			font-family: var(--ff-special);
			max-width: 20rem;
			margin: 0 auto;
		}
	}

	.event::after {
		--size: 1rem;
		content: '';
		display: block;
		position: absolute;
		top: -2rem;
		left: 50%;
		z-index: 1;
		transform: translateX(-50%);
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		background-color: var(--clr-accent-400);
	}

	.event:nth-child(odd) {
		& .event__icon {
			order: 1;
		}

		& .event__desc {
			order: 2;
		}

		& .event__year {
			order: 3;
		}
	}

	.event:nth-child(odd)::after {
		top: auto;
		bottom: -0.5rem;
	}

	.first {
		grid-area: first;
	}

	.second {
		grid-area: second;
	}

	.third {
		grid-area: third;
	}

	.fourth {
		grid-area: fourth;
	}

	.fifth {
		grid-area: fifth;
	}
</style>
