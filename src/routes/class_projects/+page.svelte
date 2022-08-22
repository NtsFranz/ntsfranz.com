<script>
  import PublicationCard from "$lib/PublicationCard.svelte";
  import { publications } from "$lib/publications";
</script>

<div class="tabs">
  <ul>
    <li><a href="/publications">Publications</a></li>
    <li><a href="/lab_projects">Lab Projects</a></li>
    <li><a href="/personal_projects">Personal Projects</a></li>
    <li class="is-active"><a href="/class_projects">Class Projects</a></li>
  </ul>
</div>

<p class="title is-2">Class Projects</p>
<p class="subtitle">Projects completed as part of some undergraduate/graduate level class at the University of
  Georgia</p>
<div class="is-flex is-flex-wrap-wrap is-justify-content-center cards-container">


</div>

<style>
  .cards-container > div {
    min-width: 10em;
    max-width: 40em;
    margin: 1em;
  }
</style>