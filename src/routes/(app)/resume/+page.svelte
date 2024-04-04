<script lang="ts">
	import ResumeCard from '$lib/components/containers/ResumeCard.svelte';
	import { experiences } from '$lib/data/resume';
	import { educations } from '$lib/data/resume';
</script>

<section class="section">
	<div class="content">
		<section class="resume">
			<header class="resume__header">
				<a href="mailto: joakimedvardsen2000@gmail.com">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
						><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
							d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
						/></svg
					>joakimedvardsen2000@gmail.com
				</a>
				<a href="tel:901-59-363">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
						><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
							d="M320 0H64C37.5 0 16 21.5 16 48v416C16 490.5 37.5 512 64 512h256c26.5 0 48-21.5 48-48v-416C368 21.5 346.5 0 320 0zM240 447.1C240 456.8 232.8 464 224 464H159.1C151.2 464 144 456.8 144 448S151.2 432 160 432h64C232.8 432 240 439.2 240 447.1z"
						/></svg
					>+47 901 59 363
				</a>
				<a href="https://goo.gl/maps/e5LFTmGjxTodWSxz7" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
						><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
							d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
						/></svg
					>Trondheim, NO
				</a>
				<a href="https://www.linkedin.com/in/joakim-edvardsen-665043220/" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
						><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
							d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
						/></svg
					>linkedin.com/in/joakim-edvardsen
				</a>
				<a href="https://edvardsen.dev">
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
						><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
						/></svg
					>edvardsen.dev
				</a>
			</header>
			<!-- Section -->
			<section class="resume__section">
				<h2 class="resume__section__title title title--secondary">Work experience</h2>
				<!-- Articles -->
				{#each experiences as experience}
					<ResumeCard item={experience} small={false} />
				{/each}
			</section>
			<!-- Section -->
			<section class="resume__section">
				<h2 class="resume__section__title title title--secondary">Education</h2>
				<!-- Article -->
				{#each educations as education}
					<ResumeCard item={education} small={true} />
				{/each}
			</section>
		</section>
	</div>
</section>

<style lang="scss">
	.content {
		display: flex;
		justify-content: center;
	}

	.resume {
		--row-gap: 3rem;
		--column-gap: 0;
		margin: 8rem 0;
		font-family: var(--ff-body);
		max-width: 55rem;

		&__header {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			margin-bottom: 4rem;

			& a {
				display: flex;
				align-items: center;
				gap: 1rem;
				color: var(--clr-neutral-000);
				text-decoration: none;

				& svg {
					width: 1rem;
					fill: var(--clr-accent-400);
				}
			}

			& a:hover,
			& a:focus {
				text-decoration: underline;
			}
		}

		&__section {
			display: flex;
			flex-direction: column;
			row-gap: var(--row-gap);
			column-gap: var(--column-gap);

			&__title {
				margin-bottom: -1em;
			}
		}

		&__section:not(:last-child) {
			margin-bottom: 5rem;
		}
	}

	@media only screen and (min-width: 45rem) {
		.resume {
			margin: 10rem 0;

			&__header {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				justify-content: start;
				margin-bottom: 5rem;
			}
		}
	}

	@media screen and (min-width: 55rem) {
		.resume {
			--row-gap: 4rem;
			--column-gap: 1rem;
			--column-one: 10rem;
			--column-two: 1fr;

			&__header {
				margin-left: calc(var(--column-one) + var(--column-gap));
			}

			&__section {
				display: grid;
				grid-template-columns: var(--column-one) var(--column-two);

				&__title {
					grid-column: 2 / span 1;
				}
			}

			.resume__section:not(:last-child) {
				margin-bottom: 7rem;
			}
		}
	}
</style>
