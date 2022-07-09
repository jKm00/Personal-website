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
	<div class="event__icon--wrapper">
		{#each event.icons as icon}
			<img class="event__icon" src={icon.path} alt={icon.alt} />
		{/each}
	</div>
	<h3 class="event__year">{event.year}</h3>
	<p class="event__desc">{event.text}</p>
</div>

<style scoped lang="scss">
	.event {
		text-align: center;

		&__icon {
			max-width: 4rem;

			&--wrapper {
				display: flex;
				justify-content: center;
				gap: 1rem;
			}
		}

		&__year {
			font-family: var(--ff-special);
			font-weight: var(--fw-bold);
		}

		&__desc {
			font-family: var(--ff-special);
		}
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
