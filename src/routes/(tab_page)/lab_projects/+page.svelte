<script>
  import NavTabs from "$lib/components/NavTabs.svelte";
  import BaseCard from "$lib/components/BaseCard.svelte";
</script>


<NavTabs index={1} />

<p class="title is-2">Lab Projects</p>
<p class="subtitle">Projects worked on as part of the Virtual Experiences Laboratory at UGA. The projects may or may not
	be associated with publications.</p>
<div class="is-flex is-flex-wrap-wrap is-justify-content-center cards-container">


	<div>
		<BaseCard data={{
              title: "conVRged",
              subtitle: "Multi-purpose VR meeting application",
              coverImg: "/images/convrged_cover.jpg",
              squareImg: "/images/conVRged_logo.png",
              coverImgFit:true,
            }}>
			<div>
				<span class="tag is-info">PC VR</span>
				<span class="tag is-info">Meta Quest</span>
				<span class="tag is-info">Windows 2D</span>
			</div>
			<br>
			<div class="buttons">
				<a
					href="https://vel.engr.uga.edu/projects/virtual-family-room/"
					target="_blank" class="button is-light is-link">
					Project Page
				</a>
				<a href="https://www.oculus.com/experiences/rift/2885779951483038" target="_blank"
				   class="button is-light is-link">
					Oculus Rift Store Page (Requires Access)
				</a>
				<a href="https://www.oculus.com/experiences/quest/4385132461504154/" target="_blank"
				   class="button is-light is-link">
					Meta Quest Store Page (App Lab)
				</a>
			</div>
			<p>Also previously known as Virtual Family Room (VFR)</p>
			<p>Users join other users in a meeting space to meet and to collaborate. Whiteboards, presentation screens, and
				shared activities help users engage with each other. conVRged has an advantage over passive communication
				technologies, such as video chat, because it provides an increased sense of participation and engagement.</p>
		</BaseCard>
	</div>


	<div>
		<BaseCard data={{
              title: "ENGREDUVR",
              subtitle: "Land Surveying Training application",
              coverImg: "/images/engreduvr_landscape.png",
              squareImg: "/images/engreduvr_logo.png",
              coverImgFit:true,
            }}>
			<div>
				<span class="tag is-info">PC VR</span>
				<span class="tag is-info">Meta Quest</span>
				<span class="tag is-info">Windows 2D</span>
				<span class="tag is-info">MacOS 2D</span>
				<span class="tag is-info">Linux 2D</span>
			</div>
			<br>
			<div class="buttons">
				<a
					href="https://vel.engr.uga.edu/projects/facilitating-social-embodied-learning-in-virtual-reality-for-engineering-education/"
					target="_blank" class="button is-light is-link">
					Project Page
				</a>
				<a href="https://www.oculus.com/experiences/rift/2503704179658581/" target="_blank"
				   class="button is-light is-link">
					Oculus Rift Store Page (Requires Access)
				</a>
			</div>
			<p>Engineering Education in VR at UGA</p>
			<p>Land Surveying</p>
			<ul>
				<li>Work together with fellow students or instructors over the internet to practice land surveying.</li>
				<li>Accurate simulation of land surveying equipment.</li>
				<li>Take notes and perform calculations with a virtual whiteboard.</li>
			</ul>
			<p>Statics</p>
			<ul>
				<li>Practice statics problems with the benefit of 3D problem visualization.</li>
			</ul>
		</BaseCard>
	</div>


	<div>
		<BaseCard data={{
              title: "VEL Apps Hub",
              subtitle: "An installer/updater for apps created in the Virtual Experiences Laboratory at the University of Georgia",
              coverImg: "/images/vel_apps_hub.png",
              squareImg: "/images/vel_logo.png",
            }}>
			<div>
				<span class="tag is-info">Windows</span>
				<span class="tag is-info">MacOS</span>
			</div>
			<br>
			<div class="buttons">
				<a
					href="https://www.microsoft.com/store/productId/9PKLX3T7RD5V"
					target="_blank" class="button is-light is-link">
					Microsoft Store Page
				</a>
				<a href="https://vel.engr.uga.edu/vel-apps-hub/" target="_blank"
				   class="button is-light is-link">
					Website
				</a>
			</div>
			<p>The creation of this app allowed for easy distribution and management of updates for other applications
				developed for various studies on multiple platforms.</p>
			<p>In particular, entire classes of students were tasked with using ENGREDUVR on their personal laptops using VEL
				Apps Hub.</p>
		</BaseCard>
	</div>


	<div>
		<BaseCard data={{
              title: "DataFoldvr",
              subtitle: "Point Cloud Annotation Tool",
              coverImg: "/images/datafoldvr_cover.jpg",
              squareImg: "/images/datafoldvr_logo.png",
              coverImgFit:true,
            }}>
			<div>
				<span class="tag is-info">PC VR</span>
			</div>
			<br>
			<div class="buttons">
				<a href="https://vel.engr.uga.edu/projects/datafoldvr/" target="_blank"
				   class="button is-light is-link">
					Website
				</a>
			</div>
			<p>Point cloud rendering and annotation tools for VR. Rendering is done with a continuous level of detail system
				that optimizes the task area and the center of the view while maintaining high framerates for VR. Annotation is
				performed in realtime on the GPU using compute shaders, and the resulting annotations can be exported to the
				disk for use in training data for machine learning algorithms.</p>
		</BaseCard>
	</div>


	<div>
		<BaseCard data={{
              title: "NERVE-Dawg",
              subtitle: "Practice the neurological examination on a dog in VR",
              coverImg: "/images/nerve_dawg.jpg",
              squareImg: "/images/uga_logo.webp",
              coverImgFit:true,
            }}>
			<div>
				<span class="tag is-info">PC VR</span>
			</div>
			<br>
			<div class="buttons">
				<a href="https://vel.engr.uga.edu/projects/nerve-dawg-immersive-vr/" target="_blank"
				   class="button is-light is-link">
					Website
				</a>
				<a href="https://www.oculus.com/experiences/rift/2234630543235800/" target="_blank"
				   class="button is-light is-link">
					Oculus Store Page (requires access)
				</a>
			</div>
			<p>Used in cooperation with the School of Veterinary Medicine to train the procedure of the neurological
				examination.</p>
			<p>A study was performed comparing a reality-based user interface to a menu-based approach.</p>
		</BaseCard>
	</div>


	<div>
		<BaseCard data={{
              title: "PuttVR",
              subtitle: "Golf Simulation with Haptic Prop",
              coverImg: "/images/puttvr_cover.png",
              squareImg: "/images/puttvr_logo.jpg",
              coverImgFit:true,
            }}>
			<div>
				<span class="tag is-info">PC VR</span>
			</div>
			<br>
			<div class="buttons">
				<a href="https://vel.engr.uga.edu/projects/vr-putting-simulator/" target="_blank"
				   class="button is-light is-link">
					Website
				</a>
			</div>
			<p>Used to evaluate performance benefits of a haptic prop for training in VR in a putting application.</p>
			<p>Was also later used in mapping large-scale environments to the virtual world before augmented virtuality
				approaches became common.</p>
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