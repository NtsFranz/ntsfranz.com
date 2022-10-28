<script>
  import "bulma";
  import FeatureCard from "$lib/components/FeatureCard.svelte";
  import { feature_cards } from "$lib/js/feature_cards";
  import { onDestroy, onMount } from "svelte";

  let feature_cards_shuffled = shuffle(feature_cards);

  // https://stackoverflow.com/a/2450976
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  let slideshow;

  let inter;
  onMount(() => {
  });

  onDestroy(() => {
    if (inter) clearInterval(inter);
  });
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


<div id="slideshow" class="slideshow">
	<div class="is-flex is-justify-content-center cards-container">
		{#each feature_cards_shuffled as card}
			<div>
				<FeatureCard data={card} />
			</div>
		{/each}
	</div>
	<script>
    let slideshow = document.getElementById("slideshow");

    let reversing = false;

    setInterval(() => {
      if (slideshow.scrollWidth - slideshow.scrollLeft - slideshow.offsetWidth <= 0) {
        reversing = true;
      }

      if (slideshow.scrollLeft <= 0) {
        reversing = false;
      }
      slideshow.scrollLeft += 5 * (reversing ? -1 : 1);
    }, 33);
	</script>
</div>

<style>

  .slideshow {
    width: 100%;
    margin-top: 4em;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .slideshow > div {
    width: fit-content;
  }

  .slideshow > div > div {
    width: 40em;
    margin: 1em;
  }

  @media only screen and (max-width: 700px) {
    .buttons {
      flex-direction: column;
      align-items: normal;
    }

    .slideshow > div > div {
      width: 20em;
    }
  }
</style>