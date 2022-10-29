<script>
  import NavTabs from "$lib/components/NavTabs.svelte";
  import BaseCard from "$lib/components/BaseCard.svelte";
</script>

<NavTabs index={4} />

<p class="title is-2">Game Jams</p>
<p class="subtitle">24 or 48 hours dedicated to creating a game from scratch.</p>
<div class="is-flex is-flex-wrap-wrap is-justify-content-center cards-container">

	<div>
		<BaseCard data={{
              title: "Jungle Jim",
              subtitle: "Jam: Athens Game Jam 2019\nAward: Best Game Design",
              coverImg: "https://img.itch.zone/aW1nLzIwMTUwMzkucG5n/original/1H%2FqTz.png",
              coverImgFit: true,
              squareImg: "https://www.accgov.com/ImageRepository/Document?documentID=35163",
            }}>
			<div>
				<span class="tag is-info">Windows</span>
			</div>
			<br>
			<div class="buttons">
				<a href="https://ntsfranz.itch.io/jungle-jim" target="_blank" class="button is-light is-link">Project Page</a>
			</div>
			<p>Can you run (physically) and jump (virtually) across this jungle gym? Can you find out who Jim is? An
				experimental use of a large play area and VR backpack to eliminate the need for a horizontal movement system
				while remaining a platformer. </p>
		</BaseCard>
	</div>

	<div>
		<BaseCard data={{
              title: "Child's Play",
              subtitle: "Jam: Global Game Jam 2019",
              coverImg: "/images/childs_play_cover_2.png",
              coverImgFit: true,
              squareImg: "/images/ggj.webp",
            }}>
			<div>
				<span class="tag is-info">Windows</span>
			</div>
			<br>
			<div class="buttons">
				<a href="https://globalgamejam.org/2019/games/childs-play" target="_blank" class="button is-light is-link">Project
					Page</a>
			</div>
			<p>2-Player Asymmetric Tower Defense A VR player defends their toy fortress using bubble guns, yoyos, bouncy
				balls, and other formidable weapons of pretend destruction. Meanwhile, another non-VR player creates and
				commands their seemingly endless legion of toy soldiers, model cars, and plastic dinosaurs to try and capture
				the ultimate prize: A precious doll house. Who will win this ultimate battle of epic proportions?? </p>

			<p>
				Group:
			</p>
			<ul>
				<li>Anton Franzluebbers</li>
				<li>Brook Burgh</li>
				<li>Catherine Ball</li>
			</ul>
		</BaseCard>
	</div>

	<div>
		<BaseCard data={{
              title: "SuperViRus",
              subtitle: "Jam: Global Game Jam 2018",
              coverImg: "/images/supervirus_cover.png",
              coverImgFit: true,
              squareImg: "/images/ggj.webp",
            }}>
			<div>
				<span class="tag is-info">Windows</span>
			</div>
			<br>
			<div class="buttons">
				<a href="https://globalgamejam.org/2018/games/supervirus" target="_blank" class="button is-light is-link">Project
					Page</a>
				<a href="https://youtu.be/k8BIPBW1GhM" target="_blank" class="button is-light is-link">Video</a>
			</div>
			<p>
				Create a super-virus by connecting two regular viruses together! Compete against your friends to get the fastest
				speed!
			</p>
			<p>
				It sounds like mad scientist, but it plays like 3D Twister. SuperViRus is the premiere
				immersive virus-creating experience to date! With no button input, it's easy for anyone to pick up, but with
				surprising and contorting levels, it's hard for anyone to master. SuperViRus is a challenging and hilarious
				experience for players of all shape, size, and age!
			</p>
			<p>
				Group:
			</p>
			<ul>
				<li>Anton Franzluebbers</li>
				<li>Brook Burgh</li>
				<li>Catherine Ball</li>
			</ul>
		</BaseCard>
	</div>


</div>

<style>
</style>