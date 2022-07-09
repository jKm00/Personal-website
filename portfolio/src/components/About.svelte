<script lang="ts"></script>

<section class="about" id="about">
	<div class="about__content">
		<h2 class="about__title title title--underline">Me, myself and I</h2>
		<img class="about__img" src="/img/me-cropped-two.jpeg" alt="Me" />
		<p class="about__text">
			Hi, I’m a 21-year-old computer science student from Norway. I’m currently in my second year
			and previously have a degree in Media and Communication with a lot of design experience.
		</p>
		<div class="text--separator" />
		<p class="about__text">
			I like to explore the web, as well as new technology. I’m really interested in AI and want to
			continue my path in that direction.
		</p>
	</div>
</section>

<style scoped lang="scss">
	.about {
		grid-column: 1 / -1;
		min-height: 100vh;

		display: grid;
		grid-template-columns: inherit;
		padding: 6em 0;
		background-color: var(--clr-neutral-100);

		&__content {
			grid-column: 2 / 3;
		}

		&__title {
			font-size: var(--fs-seconday-heading);
		}

		&__img {
			width: 100%;
			height: 15rem;
			margin: 3rem 0;

			object-fit: cover;
		}

		&__text {
			font-family: var(--ff-body);
			font-size: var(--fs-body);
			text-align: center;
			font-weight: var(--fw-bold);
		}

		& .text--separator {
			height: 1px;
			width: 50%;
			margin: 3em auto;
			background: var(--clr-neutral-800);
			opacity: 0.2;
		}
	}

	/* Media query */
	@media only screen and (min-width: 50rem) {
		.about {
			&__content {
				display: grid;
				grid-template-columns: 200px 1fr;
			}

			& .title--underline::after {
				top: 8.5rem;
				width: 130%;
			}

			&__text {
				grid-column: 2 / 3;
			}
		}
	}
</style>
