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


  <div class="tabs">
    <ul>
      <li class="is-active"><a href="/publications">Publications</a></li>
      <li><a>Lab Projects</a></li>
      <li><a>Personal Projects</a></li>
      <li><a>Class Projects</a></li>
    </ul>
  </div>


  <Tabs>
    <TabList>
      <Tab>Publications</Tab>
      <Tab>Lab Projects</Tab>
      <Tab>Personal Projects</Tab>
      <Tab>Class Projects</Tab>
    </TabList>

    <TabPanel>
      <p class="title is-2">Publications</p>
      <p class="subtitle">Oldest First</p>
      <div class="is-flex is-flex-wrap-wrap is-justify-content-center cards-container">

        {#each publications as pub}
          <div>
            <PublicationCard data={pub} />
          </div>
        {/each}

      </div>
    </TabPanel>

    <TabPanel>
      <p class="title is-2">Lab Projects</p>
      <p class="subtitle">Projects worked on as part of the Virtual Experiences Laboratory at UGA. May or may not be
        associated with a publication.</p>
      <div class="is-flex is-flex-wrap-wrap is-justify-content-center cards-container">

        {#each lab_projects as elem}
          <div>
            <PublicationCard data={elem} />
          </div>
        {/each}

      </div>
    </TabPanel>

    <TabPanel>
      <p class="title is-2">Personal Projects</p>
      <p class="subtitle"></p>
      <div class="is-flex is-flex-wrap-wrap is-justify-content-center cards-container">

        <div>
          <PersonalProjectCard data={{
              title: "Spark",
              subtitle: "PC Companion App for Echo VR",
              coverImg: "/images/personal_projects/spark_main_screen.png",
              squareImg: "https://ignitevr.gg/images/logos/secondary.png",
            }}>
            <div class="buttons">
              <a href="https://ignitevr.gg/spark/" target="_blank" class="button is-light is-link">Download and
                Features</a>
              <a href="https://echopedia.gg/wiki/Spark" target="_blank" class="button is-light is-link">Wiki</a>
              <a href="https://spark-dashboard.ignitevr.gg/" target="_blank" class="button is-light is-link">Usage
                Metrics</a>
            </div>
            <p>Spark is a Windows desktop program that can record, process, and upload EchoVR data from either a local
              EchoVR client or an Oculus Quest on the same network.</p>
            <p>It has been used extensively by members of the competitive Echo Arena community as well as league
              casters.</p>
            <p>Spark is an essential tool for league casters, providing facilities for organizing players into matches,
              spectator camera control, and custom overlays.</p>
          </PersonalProjectCard>
        </div>


        <div>
          <PersonalProjectCard data={{
              title: "Ignite Metrics",
              subtitle: "Data Collection and Analysis Efforts for Echo VR",
              coverImg: "/images/personal_projects/throws_topdown.png",
              squareImg: "https://ignitevr.gg/images/logos/secondary.png",
            }}>
            <div class="buttons">
              <a href="https://metrics.ignitevr.gg/" target="_blank"
                 class="button is-light is-link">metrics.ignitevr.gg</a>
            </div>
            <p>Spark is a Windows desktop program that can record, process, and upload EchoVR data from either a local
              EchoVR client or an Oculus Quest on the same network.</p>
            <p>It has been used extensively by members of the competitive Echo Arena community as well as league
              casters.</p>
            <p>Spark is an essential tool for league casters, providing facilities for organizing players into matches,
              spectator camera control, and custom overlays.</p>
          </PersonalProjectCard>
        </div>

      </div>
    </TabPanel>

    <TabPanel>
      <p class="title is-2">Class Projects</p>
      <p class="subtitle">Projects completed as part of some undergraduate/graduate level class at the University of
        Georgia</p>
      <div class="is-flex is-flex-wrap-wrap is-justify-content-center cards-container">

        {#each class_projects as elem}
          <div>
            <PublicationCard data={elem} />
          </div>
        {/each}

      </div>
    </TabPanel>

  </Tabs>


</div>

<style>
  .cards-container > div {
    min-width: 10em;
    max-width: 40em;
    margin: 1em;
  }
</style>