<script lang="ts">
	export let data = {};
</script>

<a href="/{data.page}#{data.title}">
	<div class="card">
		<div class="card-image">
			<figure class="image is-16by9">
				<img src={data.coverImg} alt="cover" class:coverFit={data.coverImgFit} class="coverImg">
			</figure>
		</div>
		<div class="card-content">
			<div class="media">
				<div class="media-left">
					<figure class="image is-64x64">
						<img src={data.squareImg} alt="conference logo">
					</figure>
				</div>
				<div class="media-content">
					<p class="title is-4">{data.title}</p>
					<p class="subtitle is-6">{data.subtitle}</p>
				</div>
			</div>

		</div>
	</div>
</a>

<style>
  .card {
    border-radius: 0.5rem;
  }

  .card-image {
    background-color: #ddd;
  }

  .card-image:first-child img {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .card-image > figure > img {
    object-fit: contain;
  }

  .card-image .coverFit {
    object-fit: cover;
  }
</style>