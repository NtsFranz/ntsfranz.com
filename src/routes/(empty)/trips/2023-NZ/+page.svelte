<script lang="ts">
	const images = [
		'PXL_20231004_054614503.PHOTOSPHERE.jpg',
		'PXL_20231004_224535537.PHOTOSPHERE.jpg',
		'PXL_20231004_235550798.PHOTOSPHERE.jpg',
		'PXL_20231005_002558547.PHOTOSPHERE.jpg',
		'PXL_20231005_015550430.PHOTOSPHERE.jpg',
		'PXL_20231005_021032338.PHOTOSPHERE.jpg',
		'PXL_20231006_230357103.PHOTOSPHERE.jpg',
		'PXL_20231007_033759608.PHOTOSPHERE.jpg',
		'PXL_20231008_000600095.PHOTOSPHERE.jpg',
		'PXL_20231008_034355571.PHOTOSPHERE.jpg',
		'PXL_20231011_214609481.PHOTOSPHERE.jpg',
		'Q360_20231001_231912_000000_Output.jpg',
		'Q360_20231001_231917_000000_Output.jpg',
		'Q360_20231002_115834_000000_Output.jpg',
		'Q360_20231002_195216_000000_Output.jpg',
		'Q360_20231002_195220_000000_Output.jpg',
		'Q360_20231002_195226_000000_Output.jpg',
		'Q360_20231002_200130_000000_Output.jpg',
		'Q360_20231004_122140_000000_Output.jpg',
		'Q360_20231004_122151_000000_Output.jpg',
		'Q360_20231004_122200_000000_Output.jpg',
		'Q360_20231004_130642_000000_Output.jpg',
		'Q360_20231004_141505_000000_Output.jpg',
		'Q360_20231004_142341_000000_Output.jpg',
		'Q360_20231004_153448_000000_Output.jpg',
		'Q360_20231004_182303_000000_Output.jpg',
		'Q360_20231004_182314_000000_Output.jpg',
		'Q360_20231006_123341_000000_Output.jpg',
		'Q360_20231006_123349_000000_Output.jpg',
		'Q360_20231006_123356_000000_Output.jpg',
		'Q360_20231006_124323_000000_Output.jpg',
		'Q360_20231006_124333_000000_Output.jpg',
		'Q360_20231006_130554_000000_Output.jpg',
		'Q360_20231006_133354_000000_Output.jpg',
		'Q360_20231006_154049_000000_Output.jpg',
		'Q360_20231006_164647_000000_Output.jpg',
		'Q360_20231006_173948_000000_Output.jpg',
		'Q360_20231007_121549_000000_Output.jpg',
		'Q360_20231007_140043_000000_Output.jpg',
		'Q360_20231007_140057_000000_Output.jpg',
		'Q360_20231007_140121_000000_Output.jpg',
		'Q360_20231007_140148_000000_Output.jpg',
		'Q360_20231007_140156_000000_Output.jpg',
		'Q360_20231007_140219_000000_Output.jpg',
		'Q360_20231007_140229_000000_Output.jpg',
		'Q360_20231007_140239_000000_Output.jpg',
		'Q360_20231007_140251_000000_Output.jpg'
	];
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>2023 New Zealand Panoramas</title>
</svelte:head>

<div class="image-select">
	{#each images as i}
		<a href="2023-NZ/{i}">
			<div>
				<div class="preview-img" style="background-image:url('/images/trips/2023-NZ/{i}');" />
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
