<script>
	import { page } from '$app/stores';
	import PanoViewer from '$lib/components/PanoViewer.svelte';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>2023 A2 Event Panoramas</title>
</svelte:head>

<PanoViewer imagePath={`/images/trips/2023-A2Event/${$page.params.image_name}`} />
