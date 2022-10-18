<script>
  import NavTabs from "$lib/components/NavTabs.svelte";
  import BaseCard from "$lib/components/BaseCard.svelte";
</script>


<NavTabs index={3} />

<p class="title is-2">Class Projects</p>
<p class="subtitle">Projects completed as part of some undergraduate/graduate level class at the University of
	Georgia</p>
<div class="is-flex is-flex-wrap-wrap is-justify-content-center cards-container">

	<div>
		<BaseCard data={{
              title: "CSCI 4800: Human Computer Interaction",
              subtitle: "Design of a trail mapping app",
              coverImg: "/images/hci_project_image.webp",
              squareImg: "/images/uga_logo.webp",
            }}>
			<div class="buttons">
				<a href="https://cobweb.cs.uga.edu/~anton/HCI/" target="_blank" class="button is-light is-link">
					Project Page
				</a>
				<a href="https://cobweb.cs.uga.edu/~anton/HCI/Active/" target="_blank" class="button is-light is-link">
					Demo
				</a>
			</div>
			<p>Group Members:</p>
			<ul>
				<li>Anton Franzluebbers</li>
				<li>Ashley Kim</li>
				<li>Carson Roberts</li>
				<li>Karolina Sabonaityte</li>
				<li>Savannah Willis</li>
			</ul>
			<p>Spring 2019</p>
		</BaseCard>
	</div>


	<div>
		<BaseCard data={{
              title: "CSEE 2210: Computer Systems Engineering II",
              subtitle: "Parking Monitor",
              coverImg: "/images/parking_monitor.jpg",
              squareImg: "/images/uga_logo.webp",
            }}>
			<div class="buttons">
				<a href="https://parking-monitor.firebaseapp.com/" target="_blank" class="button is-light is-link">Project Page</a>
				<a href="https://github.com/AntonFranzluebbers/Parking-Monitor" target="_blank" class="button is-light is-link">GitHub Page</a>
			</div>
			<p>Group Members:</p>
			<ul>
				<li>Anton Franzluebbers</li>
				<li>Ryan Charnoky</li>
				<li>Nithin Jino</li>
			</ul>
			<p>Spring 2016</p>
		</BaseCard>
	</div>

</div>
<h2 class="title">CSCI 4070: Game Programming</h2>
<h3 class="subtitle">Spring 2017</h3>
<div class="is-flex is-flex-wrap-wrap is-justify-content-center cards-container">

	<div>
		<BaseCard data={{
              title: "Project 1",
              subtitle: "Pacman",
              coverImg: "/images/pacman.png",
              squareImg: "/images/uga_logo.webp",
            }}>
			<div class="buttons">
				<a href="https://cobweb.cs.uga.edu/~anton/projects/P1/" target="_blank" class="button is-light is-link">
					Project Page
				</a>
			</div>
			<p></p>
		</BaseCard>
	</div>

	<div>
		<BaseCard data={{
              title: "Project 2",
              subtitle: "2D Sidescroller with Box2D",
              coverImg: "/images/lorax_cover.webp",
              squareImg: "/images/uga_logo.webp",
            }}>
			<div class="buttons">
				<a href="https://cobweb.cs.uga.edu/~anton/projects/P2/" target="_blank" class="button is-light is-link">
					Project Page
				</a>
			</div>
			<p></p>
		</BaseCard>
	</div>

	<div>
		<BaseCard data={{
              title: "Project 3",
              subtitle: "Search Algorithms",
              coverImg: "/images/search_algorithms.png",
              squareImg: "/images/uga_logo.webp",
            }}>
			<div class="buttons">
				<a href="https://cobweb.cs.uga.edu/~anton/projects/P3/" target="_blank" class="button is-light is-link">
					Project Page
				</a>
			</div>
			<p>Implementation of several common search algorithms. Includes preset or uploadable maze patterns.</p>
		</BaseCard>
	</div>

	<div>
		<BaseCard data={{
              title: "Project 4",
              subtitle: "3D Unity Game",
              coverImg: "/images/unity_game.png",
              squareImg: "/images/uga_logo.webp",
            }}>
			<div class="buttons">
				<a href="https://cobweb.cs.uga.edu/~anton/projects/P1/" target="_blank" class="button is-light is-link">
					Project Page
				</a>
			</div>
			<p></p>
		</BaseCard>
	</div>
</div>

<style>
  .cards-container > div {
    min-width: 10em;
    max-width: 40em;
    margin: 1em;
	  flex-basis: 26rem;
  }
</style>