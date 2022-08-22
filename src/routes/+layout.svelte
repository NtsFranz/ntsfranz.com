<script>
  import "bulma";
</script>

<svelte:head>
  <title>Anton Franzluebbers</title>
</svelte:head>

<section class="hero">
  <div class="hero-body is-flex is-align-items-center">
    <figure class="image is-128x128 mr-4">
      <img src="/profile_1024.png" class="is-rounded " />
    </figure>
    <div>
      <p class="title">Anton Franzluebbers</p>
      <p class="subtitle">anton@uga.edu</p>
    </div>
  </div>
</section>

<div class="container">

  <slot />

</div>

<style>
  .cards-container > div {
    min-width: 10em;
    max-width: 40em;
    margin: 1em;
  }
</style>
