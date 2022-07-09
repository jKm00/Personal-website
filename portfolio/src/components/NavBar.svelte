<script lang="ts">
	let isOpen = false;
	let nav: HTMLElement;

	const hideNav = () => {
		if (nav.clientWidth < 880) {
			isOpen = false;
		}
	};
</script>

<nav class="nav" bind:this={nav}>
	<a class="logo--link" href="/"><img class="logo" src="/img/logo.png" alt="logo" /></a>
	<div
		class={isOpen ? 'hamburger hamburger--open' : 'hamburger'}
		on:click={() => (isOpen = !isOpen)}
	>
		<span class="line upper" />
		<span class="line middle" />
		<span class="line lower" />
	</div>
	<ul class={isOpen ? 'nav__list nav__list--open' : 'nav__list'}>
		<li class="nav__list__item"><a on:click={hideNav} href="/" class="nav__list__link">Home</a></li>
		<li class="nav__list__item">
			<a on:click={hideNav} href="/#about" class="nav__list__link"
				>About<img
					src="/icons/arrow-down.svg"
					alt="arrow down"
					class="nav__list__link__icon arrow-down"
				/></a
			>
			<ul class="nav__list--sub">
				<li class="nav__list__item">
					<a on:click={hideNav} href="/#me" class="nav__list__link me">Me, myself and I</a>
				</li>
				<li class="nav__list__item">
					<a on:click={hideNav} href="/#languages" class="nav__list__link">Languages</a>
				</li>
				<li class="nav__list__item">
					<a on:click={hideNav} href="/#workflow" class="nav__list__link">Workflow</a>
				</li>
			</ul>
		</li>
		<li class="nav__list__item">
			<a on:click={hideNav} href="/portfolio" class="nav__list__link">Portfolio</a>
		</li>
		<a on:click={hideNav} class="btn contact--btn" href="/conteact">Contact</a>
	</ul>
</nav>

<style scoped lang="scss">
	.nav {
		grid-column: 2 / -3;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 75px;

		.hamburger {
			width: 40px;
			height: 25px;
			position: relative;
			cursor: pointer;
			z-index: 100;

			& .line {
				display: block;
				width: 100%;
				height: 5px;
				background: var(--clr-neutral-900);
				border-radius: 5px;
				position: absolute;

				transition: transform 200ms ease-in-out, opacity 200ms ease-in-out, color 200ms ease-in-out;
			}

			& .upper {
				top: 0;
			}

			& .middle {
				top: 50%;
				transform: translateY(-50%);
			}

			& .lower {
				bottom: 0;
			}
		}

		.hamburger--open {
			position: fixed;
			right: 2em;

			& .line {
				background: var(--clr-neutral-200);
			}

			& .upper {
				transform: translateY(10px) rotate(45deg);
			}

			& .middle {
				opacity: 0;
			}

			& .lower {
				transform: translateY(-10px) rotate(-45deg);
			}
		}

		&__list {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			padding: 5em 2em;
			background: var(--clr-neutral-800);

			font-size: var(--fs-500);
			font-family: var(--ff-special);
			text-transform: uppercase;

			position: fixed;
			inset: 0;
			overflow: auto;
			z-index: 50;

			transform: translateX(100%);
			transition: transform 150ms ease-out;

			&--open {
				transform: translateX(0%);
			}

			&--sub {
				margin: 0.5em 0 0 1em;
			}

			&__link {
				display: flex;
				align-items: center;
				gap: 1rem;
				padding: 0.5em 1em;
				border-bottom: 1px solid rgba(255, 255, 255, 0.2);

				color: var(--clr-neutral-100);
				text-decoration: none;

				transition: background 150ms ease-in-out, color 150ms ease-in-out;

				&__icon {
					width: 0.75em;
					transform: translateY(-25%);
					display: none;
				}
			}

			&__link:hover,
			&__link:focus {
				background: var(--clr-main-400);
				color: var(--clr-neutral-800);
			}

			& .contact--btn {
				background: var(--clr-main-400);
				width: 150px;
				margin: 0 auto;
				color: var(--clr-neutral-800);
			}
		}
	}

	/* Media query */
	@media only screen and (min-width: 50rem) {
		.hamburger {
			display: none;
		}

		.nav__list {
			flex-direction: row;
			align-items: center;
			padding: 0;
			position: static;
			background: transparent;
			overflow: visible;

			transform: translateX(0);
			transition: none;

			&__item {
				position: relative;
			}

			&__link {
				padding: 1em 2em;
				border-bottom: none;
				border-radius: 5px;
				font-size: var(--fs-nav);

				color: var(--clr-black-200);

				&__icon {
					display: block;
				}
			}

			&__link:hover,
			&__link:focus {
				background: var(--clr-neutral-100);
				color: var(--clr-accent-400);
				border-radius: 5px 5px 0 0;
			}

			&__item:hover .nav__list--sub {
				display: flex;
			}

			& .nav__list--sub {
				display: none;
				align-items: center;
				background: var(--clr-neutral-100);
				border-radius: 5px;
				margin: 0;
				padding: 0;
				position: absolute;
				transform: translateX(-43%);

				& .me {
					width: 170px;
				}

				& .nav__list__link {
					padding-top: 1rem;
					padding-bottom: 1rem;
				}
			}

			& .contact--btn {
				font-size: var(--fs-nav);
				width: 7rem;
			}
		}
	}
</style>
