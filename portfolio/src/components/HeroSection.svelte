<script lang="ts">
	// TODO: randomly select memoji on load
	const IMAGES = [
		'memoji-brofist.png',
		'memoji-computer.png',
		'memoji-greeting.png',
		'memoji-greeting-two.png',
		'memoji-star.png',
		'memoji-thinking.png'
	];
</script>

<!-- TODO: Come up with something clever for the texts -->
<section id="hero" class="section section--no-spacing hero">
	<div class="content two-column">
		<div class="content__text">
			<h1 class="title title--primary title--extra">
				<span>Hi 👋, I'm</span><br />
				Joakim<br />
				Edvardsen
			</h1>
			<h2 class="title title--small highlighted">Full stack software engineer</h2>
			<p class="text">
				Computer engineer student at NTNU Ålesund. Soon to be professional full stack developer
			</p>
			<a href="mailto: joakimedvardsen2000@gmail.com" class="link start-align">Take contact</a>
		</div>
		<img src={'/img/memojis/memoji-computer.png'} alt="Joakim Edvardsen emoji" />
	</div>
</section>

<style lang="scss">
	.section {
		align-items: center;
		min-height: 100vh;

		background-size: 300% 300%;
		// background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
		animation: background-animation 10s ease infinite;
	}

	.hero {
		& .content {
			justify-content: space-between;
		}

		& h1 {
			margin-bottom: 1em;
		}

		& h2 {
			margin-bottom: 1em;
		}

		& p {
			margin-bottom: 2rem;
		}

		& img {
			width: 15rem;
			margin: 2rem auto 0 auto;
		}
	}

	@media screen and (min-width: 45rem) {
		.hero {
			& img {
				width: auto;
				margin: 0;
			}
		}
	}
</style>
