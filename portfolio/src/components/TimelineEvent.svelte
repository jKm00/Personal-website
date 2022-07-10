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
		top: -1.8rem;
		left: 50%;
		z-index: 1;
		transform: translateX(-50%);
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		background-color: var(--clr-accent-400);
	}

	.event:nth-child(odd) {
		justify-content: end;

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
		bottom: -2.3rem;
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

	/* Media query */
	@media only screen and (max-width: 92.6254rem) {
		.event::after {
			top: -2.5rem;
		}

		.event:nth-child(odd):after {
			bottom: -1.4rem;
		}
	}

	@media only screen and (max-width: 78.6875rem) {
		.event::after {
			top: -1.8rem;
		}

		.event:nth-child(odd):after {
			bottom: -2.2rem;
		}
	}

	@media only screen and (max-width: 66.874rem) {
		.event::after {
			top: -2.4rem;
		}

		.event:nth-child(odd)::after {
			bottom: -1.5rem;
		}
	}
</style>
