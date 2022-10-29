<script>
  import BaseCard from "$lib/components/BaseCard.svelte";
  import NavTabs from "$lib/components/NavTabs.svelte";
</script>


<NavTabs index={2} />

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
				<a href="https://github.com/NtsFranz/Spark" target="_blank" class="button is-light is-link">GitHub</a>
			</div>
			<p>Spark is a Windows desktop program that can record, process, and upload EchoVR data from either a local
				EchoVR client or an Oculus Quest on the same network.</p>
			<p>It has been used extensively by members of the competitive Echo Arena community as well as league
				casters. Currently it has several thousand installs and over 100 daily active users.</p>
			<p>Spark is an essential tool for league casters, providing facilities for organizing players into matches,
				spectator camera control, and custom overlays.</p>
			<p>Selected features:</p>
			<ul>
				<li>Clickable spark:// links that let users share their match in Discord</li>
				<li>Spectate Me, which launches Echo VR in spectator mode, following their specific player on Quest</li>
				<li>Server selector GUI for creating private matches in a specific region</li>
				<li>Event log for a wide variety of events that happen during the game</li>
				<li>.butter and .echoreplay file creation for use in the Replay Viewer</li>
				<li>Discord Rich Presence</li>
				<li>+ many more. Check the feature list on the Download page</li>
			</ul>

			<hr>
			<p>Tools Used:</p>
			<ul>
				<li>.NET 6 WPF (using C#)</li>
				<li>Native Windows APIs for window placement and border removal of overlays</li>
			</ul>
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
				<a href="https://github.com/NtsFranz/Spark-Mini" target="_blank" class="button is-light is-link">GitHub</a>
			</div>
			<p>A multiplatform version of Spark that is built with Flutter.</p>
			<p>Just like the main Spark application, it interacts with Echo VR's API over the local network to show detailed
				stats about matches in progress.</p>
			<p>It can be used to share and join links to private matches, making it particularly useful at LAN events.</p>
			<p>Spark Mini has fewer features than the desktop version of Spark due to the lack of ability to run Echo VR on phones, but here is a subset of Spark Mini's features:</p>
			<ul>
				<li>Server Location</li>
				<li>Exact throwing speed readout</li>
				<li>Player stats and pings</li>
				<li>Match hosting to post matches to a board</li>
				<li>Joining and creating spark:// links</li>
				<li>Private match rule presets</li>
			</ul>
			<hr>
			<p>Tools Used: Flutter</p>
		</BaseCard>
	</div>

	<div>
		<BaseCard data={{
              title: "Ignite Metrics",
              subtitle: "Data Collection and Analysis Efforts for Echo VR",
              coverImg: "/images/personal_projects/throws_topdown.png",
              squareImg: "https://ignitevr.gg/images/logos/secondary.png",
            }}>
			<div>
				<span class="tag is-info">Web</span>
			</div>
			<br>
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
			<hr>
			<p>Tools Used:</p>
			<ul>
				<li>FastAPI (Python)</li>
				<li>Flask (Python)</li>
				<li>Svelte (JS Web Framework)</li>
				<li>Hugo (Static site generator)</li>
				<li>three.js (3D visualizations in the browser)</li>
				<li>Oracle Cloud</li>
			</ul>
		</BaseCard>
	</div>


	<div>
		<BaseCard data={{
              title: "Echopedia",
              subtitle: "The source for EchoVR history and community knowledge.",
              coverImg: "/images/personal_projects/echopedia_with_background.webp",
              coverImgFit: true,
              squareImg: "https://echopedia.gg/images/manual/echopedia-logo_512.png",
            }}>
			<div>
				<span class="tag is-info">Web</span>
			</div>
			<br>
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
			<hr>
			<p>Tools Used:</p>
			<ul>
				<li>MediaWiki</li>
				<li>Python (web scraping and automatic page generation using MediaWiki API)</li>
				<li>Oracle Cloud</li>
			</ul>
		</BaseCard>
	</div>


	<div>
		<BaseCard data={{
              title: "Replay Viewer",
              subtitle: "3D replay file playback software for Echo VR",
              coverImg: "/images/personal_projects/replay_cover_landscape.webp",
              coverImgFit: true,
              squareImg: "/images/personal_projects/replay_logo_512.webp",
            }}>
			<div>
				<span class="tag is-info">Windows</span>
			</div>
			<br>
			<div class="buttons">
				<a href="https://echopedia.gg/wiki/Replay_Viewer" target="_blank" class="button is-light is-link">Wiki</a>
				<a href="https://github.com/robidasdavid/Demo-Viewer" target="_blank" class="button is-light is-link">GitHub</a>
			</div>
			<p>The Replay Viewer is a collaborative project started by other members of the Echo VR community, but I added a
				significant part of the current feature set.</p>
			<p>Some of the features I added or contributed to were:</p>
			<ul>
				<li>a VR mode for immersive playback and visualization</li>
				<li>slow motion playback with frame interpolation</li>
				<li>player highlighting and connection visualizations for analysis</li>
				<li>scoreboards that match the ingame displays</li>
				<li>significant visual upgrades</li>
				<li>replay file trimming interface</li>
				<li>live data viewing from a local game</li>
			</ul>
			<hr>
			<p>Tools Used:</p>
			<ul>
				<li>Unity</li>
				<li>Blender</li>
			</ul>
		</BaseCard>
	</div>


	<div>
		<BaseCard data={{
              title: "Butter Replay Files",
              subtitle: "Custom binary replay file format for the Echo VR API",
              coverImg: "/images/personal_projects/Butter-Replays.png",
              coverImgFit: true,
              squareImg: "/images/personal_projects/butter_small.png",
            }}>
			<div>
				<span class="tag is-info">C#</span>
				<span class="tag is-info">JS</span>
			</div>
			<br>
			<div class="buttons">
				<a href="https://github.com/NtsFranz/Butter-Replays" target="_blank" class="button is-light is-link">GitHub</a>
				<a href="https://www.nuget.org/packages/ButterReplays" target="_blank" class="button is-light is-link">Nuget Package</a>
			</div>
			<p>The .butter replay file format was created as a way to reduce the file size of stored replay files.</p>
			<p>Previously, replay files were stored as zipped JSON data, which is remarkably efficient at compressing the
				highly repeated data included in the API response for every frame of the replay.</p>
			<p>Butter uses techniques that mimic video compression to reduce the file size of zipped JSON data by an
				additional 1/5 before generic compression. Features include frame diffs for each continuously changing number,
				inclusion bitmasks for numbers that don't change often, smallest-3 compression for rotations, and keyframes to
				be able to reduce the numeric precision of the numbers to the highest degree possible.</p>
			<hr>
			<p>Tools Used:</p>
			<ul>
				<li>C# (Replay file creator and reader library used in both Spark and the Replay Viewer)</li>
				<li>JS (Web-based replay reader)</li>
			</ul>
		</BaseCard>
	</div>


	<div>
		<BaseCard data={{
              title: "Player Count Graphing",
              subtitle: "CCU visualizations for Gorilla Tag",
              coverImg: "/images/personal_projects/player_count_2_black.webp",
              coverImgFit: false,
              squareImg: "/images/personal_projects/gt_logo.webp",
            }}>
			<div>
				<span class="tag is-info">Discord</span>
				<span class="tag is-info">REST API</span>
			</div>
			<br>
			<div class="buttons">
				<a href="https://github.com/NtsFranz/Photon-Player-Count" target="_blank" class="button is-light is-link">GitHub</a>
				<a href="http://ntsfranz.crabdance.com" target="_blank" class="button is-light is-link">API</a>
			</div>
			<p>Originally, this Discord bot was intended to show if any other people were playing the game, so that people would have someone else to play with. As the game grew, then exploded in popularity, it became a way for people share in the excitement that came with new CCU peaks every day.</p>
			<p>Every Gorilla Tag client sends the current user count to a server when they join and leave. The design of the data collection was great for small populations, but has caused challenges at scale.</p>
			<p>Approximately 20-30 requests are sent to the server per second, and a lot of the data is inaccurate due to delayed sending when the headset goes to sleep, so I had to make heavy use of caching and filtering algorithms and secondary tables.</p>
			<hr>
			<p>Tools Used:</p>
			<ul>
				<li>Python</li>
				<ul>
					<li>discord.py</li>
					<li>Flask (not currently)</li>
					<li>FastAPI (REST API)</li>
				</ul>
				<li>SQLite (not currently)</li>
				<li>MySQL (MariaDB)</li>
				<li>Google Cloud Platform (not currently)</li>
				<li>Oracle Cloud</li>
			</ul>
		</BaseCard>
	</div>

</div>

<style>
</style>

