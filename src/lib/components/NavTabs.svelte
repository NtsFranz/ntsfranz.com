<script>
	import { pages } from '$lib/js/page_naviation';

	export let index = -1;
</script>

<div class="tabs">
	<ul>
		{#each pages as p, i}
			<li class:is-active={i === index}><a href="/{p.url}">{p.name}</a></li>
		{/each}
	</ul>
</div>
