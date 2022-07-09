<script lang="ts">
</script>

<header id="header" class="header">
	<div class="header__content">
		<h1 class="header__title title">
			Let me help <span class="header__title--underline">you</span> reach your audience
		</h1>
		<h3 class="header__text">Via great content, design and accessability</h3>
		<div class="header__btn--wrapper">
			<a href="#about" class="btn learn-more--btn">Learn more</a>
			<a href="#socials" class="btn socials--btn">Visit socials</a>
		</div>
	</div>
	<span class="header__cube cube--small" />
	<span class="header__cube cube--medium" />
	<span class="header__cube cube--big" />
</header>

<style scoped lang="scss">
	.header {
		--nav-size: 75px;
		grid-column: 2 / -3;
		min-height: calc(100vh - var(--nav-size));
		display: flex;
		align-items: center;
		position: relative;
		z-index: 1;

		&__title {
			font-size: var(--fs-primary-heading);

			&--underline {
				display: inline-block;
				transform: translateY(-10px);
				position: relative;
			}

			&--underline::after {
				content: '';
				display: block;
				width: 100%;
				height: 5px;
				background: var(--clr-main-400);
				position: absolute;
			}
		}

		&__text {
			margin-top: 1em;
			font-family: var(--ff-special);
			font-weight: lighter;
			font-size: var(--fs-300);
			text-transform: lowercase;
		}

		&__btn--wrapper {
			display: flex;
			gap: 0.5rem;
			margin-top: 5em;
		}

		& .btn {
			font-size: var(--fs-350);
			padding: 0.5rem 2rem;
		}

		& .learn-more--btn {
			background: var(--clr-main-400);
		}

		& .socials--btn {
			background: var(--clr-accent-400);
			color: var(--clr-neutral-100);
		}

		&__cube {
			position: absolute;
			border-radius: 10px;
			opacity: 0.4;
			width: var(--size);
			height: var(--size);
			z-index: -1;
		}

		& .cube--big {
			--size: 12rem;
			background: var(--clr-neutral-100);
			right: 3rem;
			bottom: 10rem;
		}

		& .cube--medium {
			--size: 8rem;
			background: var(--clr-accent-400);
			right: 12rem;
			bottom: 5rem;
		}

		& .cube--small {
			--size: 3rem;
			background: var(--clr-main-400);
			bottom: 3.5rem;
			right: 19rem;
		}
	}

	/* Media query */
	@media only screen and (min-width: 50rem) {
		.header {
			&__text {
				font-size: var(--fs-400);
			}

			& .cube--big {
				--size: 20rem;
				top: -7rem;
			}

			& .cube--medium {
				--size: 15rem;
				top: 9rem;
				right: 16rem;
			}

			& .cube--small {
				--size: 8rem;
				top: 22rem;
				right: 28rem;
			}
		}
	}
</style>
