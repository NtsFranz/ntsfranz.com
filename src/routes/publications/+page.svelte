<script>
  import PublicationCard from "$lib/PublicationCard.svelte";
  import { publications } from "$lib/publications";
</script>

<div class="tabs">
  <ul>
    <li class="is-active"><a href="/publications">Publications</a></li>
    <li><a href="/lab_projects">Lab Projects</a></li>
    <li><a href="/personal_projects">Personal Projects</a></li>
    <li><a href="/class_projects">Class Projects</a></li>
  </ul>
</div>

<p class="title is-2">Publications</p>
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