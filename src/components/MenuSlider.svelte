<script>
	import Carousel from 'svelte-carousel';
	import data from '../localData/menuslider.js';
</script>

<Carousel
	autoplay
	autoplayDuration={2000}
	particlesToShow={4}
	particlesToScroll={2}
	dots={false}
	arrows={false}
	swiping={false}
>
	{#each data as item}
		<img src={`src/lib/images/menu/slider/${item.image}`} alt="" srcset="" />
	{/each}
</Carousel>
