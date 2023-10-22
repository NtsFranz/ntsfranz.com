<script lang="ts">
	const folder = '2023-A2Event';
	const images = [
		'PXL_20231016_152600111.PHOTOSPHERE.jpg',
		'PXL_20231017_220942684.PHOTOSPHERE.jpg',
		'Q360_20231013_202309_000000_Output.jpg'
	];
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>2023 A2 Event Panoramas</title>
</svelte:head>

<div class="image-select">
	{#each images as i}
		<a href="{folder}/{i}">
			<div>
				<div class="preview-img" style="background-image:url('/images/trips/{folder}/{i}');" />
			</div>
		</a>
	{/each}
</div>

<style>
	.image-select > a > div {
		overflow: hidden;
		float: left;
		width: 30rem;
		height: 30rem;
		margin: 0.1rem;
	}
	.image-select .preview-img {
		background-size: cover;
		background-position: center;
		transition: all 0.5s;
		height: 200%;
		width: 200%;
		position: relative;
		top: -50%;
		left: -50%;
	}
	.image-select > a:hover .preview-img {
		transform: scale(1.02);
	}
</style>
