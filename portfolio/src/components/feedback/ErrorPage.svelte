<div class="wrapper">
  <h1 class="title large">404</h1>
  <h2 class="title small">These aren't the pages you're looking for</h2>
  <a class="link" sveltekit:prefetch href="/">Back home</a>
</div>

<style scoped lang="scss">
  .wrapper {
    grid-column: 1 / -1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    & .large {
      font-size: clamp(10rem, 20vw, 20rem);
      color: var(--clr-accent-400)
    }

    & .small {
      font-size: clamp(0.75rem, 1.5vw, 2rem);
      margin-bottom: 3rem;
    }
  }
</style>