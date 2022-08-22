<script>
  import BaseCard from "$lib/BaseCard.svelte";
</script>

<div class="tabs">
  <ul>
    <li><a href="/publications">Publications</a></li>
    <li><a href="/lab_projects">Lab Projects</a></li>
    <li class="is-active"><a href="/personal_projects">Personal Projects</a></li>
    <li><a href="/class_projects">Class Projects</a></li>
  </ul>
</div>

<p class="title is-2">Personal Projects</p>
<p class="subtitle"></p>
<div class="is-flex is-flex-wrap-wrap is-justify-content-center cards-container">

  <div>
    <BaseCard data={{
              title: "Spark",
              subtitle: "PC Companion App for Echo VR",
              coverImg: "/images/personal_projects/spark_main_screen.png",
              squareImg: "https://ignitevr.gg/images/logos/secondary.png",
            }}>
      <div>
        <span class="tag is-info">Windows</span>
      </div>
      <br>
      <div class="buttons">
        <a href="https://ignitevr.gg/spark/" target="_blank" class="button is-light is-link">Download and Features</a>
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
    </BaseCard>
  </div>

  <div>
    <BaseCard data={{
              title: "Spark Mini",
              subtitle: "Multiplatform Companion App for Echo VR",
              coverImg: "https://echopedia.gg/images/9/97/Spark_mini_main.jpg",
              squareImg: "https://ignitevr.gg/images/logos/secondary.png",
            }}>
      <div>
        <span class="tag is-info">iOS</span>
        <span class="tag is-info">Android</span>
        <span class="tag is-info">Linux</span>
      </div>
      <br>
      <div class="buttons">
        <a href="https://echopedia.gg/wiki/Spark_Mini" target="_blank" class="button is-light is-link">
          Wiki (with download links)
        </a>
      </div>
      <p>A multiplatform version of Spark that is built with Flutter.</p>
      <p>Just like the main Spark application, it interacts with Echo VR's API over the local network to show detailed
        stats about matches in progress.</p>
      <p>It can be used to share and join links to private matches, making it particularly useful at LAN events.</p>
    </BaseCard>
  </div>

  <div>
    <BaseCard data={{
              title: "Ignite Metrics",
              subtitle: "Data Collection and Analysis Efforts for Echo VR",
              coverImg: "/images/personal_projects/throws_topdown.png",
              squareImg: "https://ignitevr.gg/images/logos/secondary.png",
            }}>
      <div class="buttons">
        <a href="https://metrics.ignitevr.gg/" target="_blank" class="button is-light is-link">metrics.ignitevr.gg</a>
        <a href="https://api.ignitevr.gg/" target="_blank" class="button is-light is-link">api.ignitevr.gg</a>
      </div>
      <p>The Ignite Metrics website is a portal for accessing the data collected through our 24/7 Echo Arena spectator
        stream and the hundreds of users using Spark in their matches.</p>
      <p>Player stats pages show detailed information for dozens of types event in every recorded match they play.</p>
      <p>A replay analysis page allows users to select local replay files created with Spark to get detailed insights
        into their matches.</p>
      <p>The public API is used by several other community projects.</p>
      <p>I also made a relatively popular Discord bot that responds with player information from the same database.</p>
    </BaseCard>
  </div>


  <div>
    <BaseCard data={{
              title: "Echopedia",
              subtitle: "The source for EchoVR history and community knowledge.",
              coverImg: "https://echopedia.gg/images/9/90/Echopedia_Logo.png",
              squareImg: "https://echopedia.gg/images/manual/echopedia-logo_512.png",
            }}>
      <div class="buttons">
        <a href="https://echopedia.gg" target="_blank" class="button is-light is-link">echopedia.gg</a>
      </div>
      <p>The Echopedia is a traditional community wiki based on MediaWiki for Echo VR, however I set it up manually on a
        private server to avoid the advertisements and platform restrictions of using a service like Fandom.</p>
      <p>Part of the Echopedia effort was scraping and organizing the thousands of players from multiple historical
        league websites to generate team and player pages automatically.</p>
      <p>An interactive block map shows user-voted callouts for blocks throughout the Arena, allowing newer players to
        learn. Users can vote or submit block names using Discord Oauth.</p>
      <p>I created many other pages on the site, such as server location history maps for Arena, speedrunning guides for
        Lone Echo and Lone Echo II, and usage guides for Spark and Spark Mini.</p>
    </BaseCard>
  </div>

</div>

<style>
  .cards-container > div {
    min-width: 10em;
    max-width: 40em;
    margin: 1em;
  }
</style>

