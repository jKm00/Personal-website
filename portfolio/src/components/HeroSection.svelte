<script lang="ts"></script>

<section id="hero" class="section">
	<div class="content">
		<div class="card">
			<h1 class="title">
				Joakim Edvardsen<br />
				Enjoying the life as a <span class="highlighted">developer</span>
			</h1>
			<h2>Something cool</h2>
		</div>
		<a href="/#about" class="link start-align link--dark-hover">Read more</a>
	</div>
</section>

<style lang="scss">
	.section {
		align-items: center;
		min-height: 100vh;

		background-size: 300% 300%;
		background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
		animation: background-animation 10s ease infinite;

		& .content {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}

	@keyframes background-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
