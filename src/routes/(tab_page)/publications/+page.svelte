<script>
  import PublicationCard from "$lib/components/PublicationCard.svelte";
  import { publications } from "$lib/js/publications";
  import NavTabs from "$lib/components/NavTabs.svelte";
</script>

<NavTabs index={0} />

<p class="title">Publications</p>
<p class="subtitle">Oldest First</p>
<div class="is-flex is-flex-wrap-wrap is-justify-content-center cards-container">

	{#each publications as pub}
		<div>
			<PublicationCard data={pub} />
		</div>
	{/each}

</div>

<style>
  .cards-container > div {
    min-width: 10em;
    max-width: 40em;
    margin: 1em;
  }
</style>