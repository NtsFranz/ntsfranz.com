<script lang="ts">
	import '$lib/panellum/pannellum';
	import { onMount } from 'svelte';

	export let imagePath: string;

	onMount(() => {
		pannellum.viewer('panorama', {
			type: 'equirectangular',
			panorama: imagePath,
			autoLoad: true,
			compass: false,
			autoRotate: -2
		});
	});
</script>

<div id="panorama" />

<style>
	@import '$lib/panellum/pannellum.css';

	:global(body) {
		margin: 0;
	}

	#panorama {
		margin: 0;
		width: 100%;
		height: 100vh;
	}
</style>
