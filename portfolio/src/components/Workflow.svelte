<script lang="ts"></script>

<section class="workflow" id="workflow">
	<div class="workflow__content">
		<h2 class="workflow__title title title--underline">Workflow</h2>
		<p class="workflow__text">
			1. First I like to sit down with my client and discuss their needs. Write down keyword that
			will help along the way. Make sure me and the client are on the same page. Maybe even start
			with some small sketches that can be worked with.
		</p>
		<p class="workflow__text">
			2. After a conversation with my client I start to sketch down my ideas in adobe XD. I like to
			have a close relationship with my client. By that, I like to update my client with screenshots
			along the way. This makes it easier to change elements along the way if my client is not
			satisfied.
		</p>
		<p class="workflow__text">
			3. To make sure the product is not only pleasable for the eye, I like to make diagram to make
			sure the product also works in the best way for the user. For this I like to use the
			UML-convention. These diagrams makes it easy to test the product before its fully produced and
			before the code is implemented. As a bonus these diagrams also works as documentationfor
			further improvement of the product.
		</p>
		<p class="workflow__text">
			4. When all the preparation is done, it’s time to implement the product. Its equally as
			importen for me to update my client regularly in this phase as in the previous phases. Even
			though all the preparation should be done, experience shows that minds can change as well as
			Some elements might not turn out to be the way the client wanted. When this happens, its back
			to the “drawing board” to try and come up with a better solution that my client is satisfied
			with.
		</p>
		<p class="workflow__text full-span">
			<img src="/icons/star.svg" alt="star icon" class="star" />I like to keep my work organized.
			With that in mind I use git as its one of the best “version controls organiser”. This allows
			me to keep track of what’s been done and where I’m at. If my clients want to roll back to a
			previous version, it would be now problem as git will handle that.
		</p>
	</div>
</section>

<style scoped lang="scss">
	.workflow {
		grid-column: 1 / -1;

		display: grid;
		grid-template-columns: inherit;

		background-color: var(--clr-neutral-100);

		&__content {
			grid-column: 2 / 3;
			padding: 5rem 0;
			min-height: 100vh;
		}

		&__title {
			font-size: var(--fs-seconday-heading);
			margin-bottom: 1.5rem;
		}

		&__text {
			margin-bottom: 2rem;
			font-family: var(--ff-primary);
			font-weight: var(--fw-bold);
			opacity: 0.9;

			& .star {
				width: 2.5rem;
				float: left;
				margin: 0.75rem 1rem 0 0;
			}
		}

		&__text::first-letter {
			font-size: var(--fs-900);
			float: left;
			line-height: 1em;
		}
	}

	@media only screen and (min-width: 45rem) {
		.workflow {
			&__content {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				column-gap: 2rem;
				row-gap: 1rem;
			}

			&__title {
				grid-column: 1 / -1;
			}
		}

		.full-span {
			grid-column: 1 / -1;
		}
	}

	/* Media query */
	@media only screen and (min-width: 60rem) {
		.workflow {
			&__content {
				grid-template-columns: repeat(3, 1fr);
			}

			&__title {
				grid-column: 1 / span 1;
				grid-row: 1 / span 3;
			}

			&__title::after {
				top: 2.5rem;
			}
		}

		.full-span {
			grid-column: 2 / -1;
		}
	}
</style>
