<script>
  import "bulma";
</script>

<svelte:head>
	<title>Anton Franzluebbers</title>
</svelte:head>

<section class="hero">
	<div class="hero-body is-flex is-align-items-center">
		<a href="/">
			<figure class="image is-128x128 mr-4">
				<img src="/profile_1024.png" class="is-rounded " />
			</figure>
		</a>
		<div>
			<p class="title">Anton Franzluebbers</p>
			<p class="subtitle">anton@uga.edu</p>
		</div>
	</div>
</section>

<div class="container">

	<slot />

</div>

<style global>
  :global(div.cards-container > div) {
    min-width: 10em;
    max-width: 39em;
    flex-basis: 30rem;
    flex-grow: 1;
    flex-shrink: 1;
    margin: 1em;
  }

  .container {
    padding: .3rem;
  }

  @media only screen and (max-width: 700px) {
    .title {
      font-size: 1.5rem;
    }

    .subtitle {
      font-size: 1rem;
    }
  }
</style>
