<script lang="ts">
  export let data = {};
</script>

<div class="card">
  <div class="card-image">
    <figure class="image is-3by1">
      <img src={data.coverImg} alt="cover">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img src={data.publicationImg} alt="conference logo">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{data.title}</p>
        <p class="subtitle is-6">{data.subtitle}</p>
      </div>
    </div>

    <div class="content">
      <div class="buttons">
        {#if data.publicationLink}
          <a href={data.publicationLink} target="_blank" class="button is-light is-link">Publication</a>
        {/if}
        {#if data.presentationLink}
          <a href={data.presentationLink} target="_blank" class="button is-light is-link">Presentation</a>
        {/if}
        {#if data.projectPageLink}
          <a href={data.projectPageLink} target="_blank" class="button is-light is-link">Project Page</a>
        {/if}
      </div>
      <pre><code class="">{data.bibTex}</code></pre>
      <time>{data.date}</time>
    </div>
  </div>
</div>

<style>
  .card {
    border-radius: 0.5rem;
  }

  .card-image:first-child img {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .card-image > figure > img {
    object-fit: cover;
  }
</style>