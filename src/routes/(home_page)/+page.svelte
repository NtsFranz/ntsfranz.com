<script>
  import "bulma";
</script>

<svelte:head>
	<title>Anton Franzluebbers</title>
</svelte:head>

<div class="container">
	<section class="hero">
		<div class="hero-body is-flex is-align-items-center is-justify-content-center">
			<figure class="image is-128x128 mr-4">
				<img src="/profile_1024.png" class="is-rounded " />
			</figure>
			<div>
				<p class="title">Anton Franzluebbers</p>
				<p class="subtitle">anton@uga.edu</p>
			</div>

		</div>

	</section>

	<div class="is-flex is-justify-content-center">

		<div class="buttons has-addons">
			<a class="button" href="/publications">Publications</a>
			<a class="button" href="/lab_projects">Lab Projects</a>
			<a class="button" href="/personal_projects">Personal Projects</a>
			<a class="button" href="/class_projects">Class Projects</a>
			<a class="button" href="/game_jams">Game Jams</a>
		</div>
	</div>


</div>

<style>
  @media only screen and (max-width: 700px) {
    .buttons {
      flex-direction: column;
      align-items: normal;
    }
  }
</style>