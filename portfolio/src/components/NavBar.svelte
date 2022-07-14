<script lang="ts">
</script>

<header class="header">
	<!-- <a href="/"><img src="" alt="logo" /></a> -->
	<a href="/" class="logo--tmp">jKm</a>
	<nav class="nav">
		<!-- Hamburger -->
		<ul class="nav__list">
			<li class="nav__list__item"><a class="nav__list__link link" href="/">Home</a></li>
			<li class="nav__list__item"><a class="nav__list__link link" href="/#about">About</a></li>
			<li class="nav__list__item"><a class="nav__list__link link" href="/#work">Work</a></li>
			<li class="nav__list__item">
				<a class="nav__list__link link" href="/#experience">Experience</a>
			</li>
			<li class="nav__list__item"><a class="nav__list__link link" href="/resume">Resume</a></li>
		</ul>
		<ul class="nav__socials">
			<li class="nav__socials__item"><a class="nav__socials__link link" href="">test</a></li>
			<li class="nav__socials__item"><a class="nav__socials__link link" href="">s</a></li>
			<li class="nav__socials__item"><a class="nav__socials__link link" href="">s</a></li>
			<li class="nav__socials__item"><a class="nav__socials__link link" href="">s</a></li>
		</ul>
	</nav>
</header>

<style scoped lang="scss">
	.logo--tmp {
		font-family: var(--ff-primary);
		font-size: var(--fs-600);
		font-weight: var(--fw-bold);
		text-decoration: none;
		color: var(--clr-neutral-000);
	}

	.header {
		grid-column: 2 / 3;
		display: flex;
		justify-content: space-between;
	}

	.nav {
		position: fixed;
		inset: 0;
		left: 20%;
		transform: translateX(0%);

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem;

		background-color: var(--clr-neutral-800);

		&__list {
			display: flex;
			flex-direction: column;

			&__link {
				display: inline-block;
				padding: 1rem;
			}
		}
	}
</style>
