<script>
  import "bulma"

  import PublicationCard from "$lib/PublicationCard.svelte";
  import { publications } from "$lib/publications";
  import { Tab, TabList, TabPanel, Tabs } from "$lib/Tabs/tabs.js";
  import { lab_projects } from "$lib/lab_projects";
  import { personal_projects } from "$lib/personal_projects";
  import { class_projects } from "$lib/class_projects";
  import PersonalProjectCard from "$lib/PersonalProjectCard.svelte";
</script>

<svelte:head>
  <title>Anton Franzluebbers</title>
</svelte:head>

<section class="hero">
  <div class="hero-body">
    <p class="title">
      Anton Franzluebbers
    </p>
    <p class="subtitle">
      anton@uga.edu
    </p>
  </div>
</section>

<div class="container">

  <slot/>

</div>

<style>
  .cards-container > div {
    min-width: 10em;
    max-width: 40em;
    margin: 1em;
  }
</style>
