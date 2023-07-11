<script lang="ts">
	import ThemeToggler from '$lib/components/ThemeToggler.svelte';

	let isOpen = false;

	/**
	 * Hides the navigation bar
	 */
	const hideNav = () => {
		isOpen = false;
	};
</script>

<header class="header">
	<div class="content">
		<a href="/" class="logo rounded">jKm</a>
		<!-- Hamburger -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="hamburger"
			class:hamburger--open={isOpen}
			on:click={() => (isOpen = !isOpen)}
			aria-controls="nav"
		>
			<span class="upper line" />
			<span class="middle line" />
			<span class="lower line" />
		</div>
		<!-- Nav -->
		<nav id="nav" class="nav" class:nav--open={isOpen}>
			<ol class="nav__list">
				<li class="nav__list__item">
					<a on:click={hideNav} class="nav__list__link link" href="/">Home</a>
				</li>
				<li class="nav__list__item">
					<a on:click={hideNav} class="nav__list__link link" href="/#about">About</a>
				</li>
				<li class="nav__list__item">
					<a on:click={hideNav} class="nav__list__link link" href="/#projects">Projects</a>
				</li>
				<li class="nav__list__item">
					<a on:click={hideNav} class="nav__list__link link" href="/resume">Resume</a>
				</li>
				<li>
					<ThemeToggler />
				</li>
			</ol>
			<!-- Nav footer. Only visible on mobile version -->
			<div class="nav__footer">
				<ul class="nav__socials">
					<li class="nav__socials__item">
						<a
							class="nav__socials__link"
							href="https://github.com/jKm00"
							aria-label="github"
							target="_blank"
							><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
								><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
									d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
								/></svg
							></a
						>
					</li>
					<li class="nav__socials__item">
						<a
							class="nav__socials__link"
							href="https://codepen.io/Jaakim"
							aria-label="codepen"
							target="_blank"
							><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
								><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
									d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"
								/></svg
							></a
						>
					</li>
					<li class="nav__socials__item">
						<a
							class="nav__socials__link"
							href="https://www.linkedin.com/in/joakim-edvardsen-665043220/"
							aria-label="linkedin"
							target="_blank"
							><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
								><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
									d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
								/></svg
							></a
						>
					</li>
					<li class="nav__socials__item">
						<a
							class="nav__socials__link"
							href="https://www.instagram.com/joakim_edvardsen/"
							aria-label="instagram"
							target="_blank"
							><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
								><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
									d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
								/></svg
							></a
						>
					</li>
				</ul>
				<p class="nav__footer__copy">Copyright &copy; 2022. All rights reserved</p>
			</div>
		</nav>
	</div>
</header>

<style scoped lang="scss">
	.header {
		--duration: 300ms;

		grid-column: 2 / 3;
		display: grid;
		grid-template-columns: inherit;
		align-items: center;
		padding: 1rem 0;
		position: absolute;
		left: 0;
		right: 0;

		& .content {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	.hamburger {
		position: absolute;
		top: 1rem;
		right: 1rem;
		z-index: 100;

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.5rem;
		width: 3rem;
		cursor: pointer;

		& .line {
			display: block;
			background-color: var(--clr-neutral-000);
			width: 100%;
			height: 0.25rem;
			border-radius: 50vh;

			transition: transform var(--duration) ease-in-out, opacity var(--duration) ease-in-out;
		}
	}

	.hamburger--open {
		position: fixed;

		& .upper {
			transform: rotate(45deg) translate(0.5rem, 0.5rem);
		}

		& .middle {
			opacity: 0;
		}

		& .lower {
			transform: rotate(-45deg) translate(0.5rem, -0.5rem);
		}
	}

	.nav {
		position: fixed;
		inset: 0;
		left: 20%;
		z-index: 50;
		transform: translateX(110%);

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 4rem 2rem;
		box-shadow: -5px 0 20px rgba(0, 0, 0, 0.5);

		background-color: var(--clr-neutral-800);

		transition: transform var(--duration) ease-in-out;

		&__list {
			display: flex;
			flex-direction: column;
			gap: 2rem;

			color: var(--clr-accent-400);

			&__link {
				display: inline-block;
			}
		}

		&__socials {
			display: flex;
			justify-content: center;
			gap: 1rem;
			margin-bottom: 0.5rem;

			& svg {
				height: 1.5rem;
				fill: var(--clr-neutral-000);

				transition: fill 100ms ease-in-out;
			}

			& svg:hover,
			& svg:focus {
				fill: var(--clr-accent-400);
			}
		}

		&__footer__copy {
			font-family: var(--ff-body);
			font-size: var(--fs-300);
			text-align: center;
			color: var(--clr-neutral-500);
		}
	}

	.nav--open {
		transform: translateX(0%);
	}

	@media only screen and (min-width: 45rem) {
		.hamburger {
			display: none;
		}

		.nav {
			position: static;
			transform: translateX(0);
			padding: 0;
			box-shadow: none;
			background-color: transparent;

			&__list {
				flex-direction: row;
				gap: 2rem;

				&__item {
					position: relative;
				}

				&__item:not(:last-child)::after {
					content: '';
					display: block;
					width: 2px;
					height: 30%;
					border-radius: 50vh;
					position: absolute;
					top: 50%;
					right: -1rem;
					transform: translateY(-50%);
					background-color: var(--clr-accent-400);
				}
			}

			&__footer {
				display: none;
			}
		}
	}
</style>
