<script>
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


  <div class="tabs">
    <ul>
      <li><a href="/publications">Publications</a></li>
      <li><a>Lab Projects</a></li>
      <li><a>Personal Projects</a></li>
      <li><a>Class Projects</a></li>
    </ul>
  </div>

<style>
  .cards-container > div {
    min-width: 10em;
    max-width: 40em;
    margin: 1em;
  }
</style>