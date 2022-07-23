<script lang="ts">
	import ResumeCard from '../components/pages/resumePage/ResumeCard.svelte';

	const experiences = [
		{
			title: 'Goods Flow Co-worker',
			start: '21. Oktober 2019',
			end: '31. Juli 2020',
			place: 'Trondheim',
			desc: 'Worked at Ikea Leangen as a logistics and customer relations employee. Was hired as a seasonal employee. I learned a lot about how a large store works in operation and how each individual can contribute to creating good customer experiences.'
		},
		{
			title: 'Part-time Salesman at YX / 7-eleven',
			start: '10. Mai 2018',
			end: '1. August 2019',
			place: 'Vestby',
			desc: 'Fisrt started as a summer aid and received training in May. Then continued as extra help in the evenings and on weekends. I gained a lot of experience in the work environment, but also learned a lot about how to treat customers and how a store / kiosk is run. At the station there was a lot of varied work, which meant that new problems constantly arose that had to be solved.'
		},
		{
			title: 'Supervisor at ASP (SFO)',
			start: '30. Mars 2016',
			end: '3. Mai 2016',
			place: 'Vestby',
			desc: 'In 10th grade as part of my optional subject (technology), one day a week for five weeks, we supervised children in coding. It was a great success as the children learnt a lot, had a tun of fun and was very interested throughout.'
		},
		{
			title: 'Working week at the Norwegian Military Media Center',
			start: '23. Februar 2015',
			end: '28. Februar 2015',
			place: 'Oslo',
			desc: "In 9th grade, we had a work week where we were to be deployed in a place where we wanted. I got the opportunity to work with the military's media center for a week. There I got to see how they worked and got to participate in various activities such as interviewing people on the street, see how their website was built and test out new cameras."
		}
	];
	const educations = [
		{
			title: 'Computer science',
			start: '17. August 2020',
			end: '',
			place: 'NTNU, Ålesund',
			desc: "Bachelor's degree in computer science"
		},
		{
			title: 'Preperatory course for engineering',
			start: '19. August 2019',
			end: '5. Juni 2020',
			place: 'NTNU, Trondheim',
			desc: 'Mathematics and physics preperatory course for engineering'
		},
		{
			title: 'Highschool',
			start: '9. August 2016',
			end: '13. Juni 2019',
			place: 'Drømtorp, Ski',
			desc: 'Media and communication with German as third language'
		}
	];
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
					>Ålesund, NO
				</a>
				<a href="https://www.linkedin.com/in/joakim-edvardsen-665043220/" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
						><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
							d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
						/></svg
					>linkedin.com/in/joakim-edvardsen
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
