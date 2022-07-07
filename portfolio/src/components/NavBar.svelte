<script lang="ts">
	let isOpen = false;

	const toggleNav = (): void => {
		isOpen = !isOpen;
	};
</script>

<nav class="nav">
	<a href="/" class="logo--link"><img src="/img/logo.png" alt="logo" class="logo" /></a>
	<div class={isOpen ? 'hamburger hamburger-open' : 'hamburger'} on:click={toggleNav}>
		<span class="line upper" />
		<span class="line middle" />
		<span class="line lower" />
	</div>
	<ul class={isOpen ? 'nav__list nav__list--open' : 'nav__list'}>
		<li class="nav__item"><a href="index.html#header" class="nav__link">Home</a></li>
		<li class="nav__item">
			<a href="#about" class="nav__link about--nav"
				>About<img src="img/icons/arrow-down.svg" alt="arrow down" class="arrow-down" /></a
			>
			<ul class="nav__list--sub">
				<li class="nav__item"><a href="#about" class="nav__link me">Me, myself and I</a></li>
				<li class="nav__item"><a href="#languages" class="nav__link">Languages</a></li>
				<li class="nav__item"><a href="#workflow" class="nav__link">Workflow</a></li>
			</ul>
		</li>
		<li class="nav__item"><a href="#portfolio" class="nav__link">Portfolio</a></li>
		<a href="/contact" class="btn contact--btn">Contact</a>
	</ul>
</nav>

<style lang="scss">
	.nav {
		grid-column: 2 / 3;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 75px;
	}

	/* 6.1.1 Hamburger */
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
			background: #000;
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

		&-open {
			position: fixed;
			right: 2em;
		}

		&-open .line {
			background: #ccc;
		}

		&-open .upper {
			transform: translateY(10px) rotate(45deg);
		}

		&-open .middle {
			opacity: 0;
		}

		&-open .lower {
			transform: translateY(-10px) rotate(-45deg);
		}
	}

	/* 6.1.2 Nav list */

	.nav__list {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		padding: 5em 2em;
		background: var(--clr-black-100);

		font-size: 1.75em;
		font-family: var(--ff-btn);
		text-transform: uppercase;

		position: fixed;
		inset: 0;
		overflow: auto;
		z-index: 50;

		transform: translateX(100%);
		transition: transform 150ms ease-out;

		&--open {
			transform: translateX(0);
		}

		&--sub {
			margin: 0.5em 0 0 1em;
		}

		& .nav__link {
			display: block;
			padding: 0.5em 1em;
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);

			color: var(--clr-white);
			text-decoration: none;

			transition: background 150ms ease-in-out, color 150ms ease-in-out;
		}

		& .nav__link:hover,
		& .nav__link:focus {
			background: var(--clr-lime);
			color: var(--clr-black-200);
		}
	}

	.arrow-down {
		display: none;
	}

	.contact--btn {
		background: var(--clr-lime);
		width: 150px;
		margin: 0 auto;
		color: var(--clr-black-200);
	}

	@media only screen and (min-width: 870px) {
		/*
        Media query > 870px: 6.1 Nav
    */
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

			font-size: 1.25em;

			transform: translateX(0);
			transition: none;
		}

		.nav__item {
			position: relative;
		}

		.nav__item:hover .about,
		.nav__item:focus .about {
			background: var(--clr-white);
			border-radius: 5px 5px 0 0;
			color: var(--clr-purple);
		}

		.nav__link {
			padding: 1em 2em;
			border-bottom: none;
			border-radius: 5px;

			color: var(--clr-black-200);
		}

		.nav__link:hover,
		.nav__link:focus {
			background: var(--clr-white);
			color: var(--clr-purple);
		}

		.nav__item:hover .nav__list--sub {
			display: flex;
		}

		.nav__list--sub {
			display: none;
			align-items: center;
			background: var(--clr-white);
			border-radius: 5px;
			margin: 0;
			padding: 1em 0;
			position: absolute;
			transform: translateX(-43%);
		}
	}
</style>
