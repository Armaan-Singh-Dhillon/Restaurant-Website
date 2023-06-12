<script>
	import Carousel from './Carousel.svelte';
	import data from '../localData/menuslider.js';
</script>

<div class="container">
	<Carousel autoplay="2000"  dots="false" controls="false" duration="600">
		{#each data as item}
			<img src={`src/lib/images/menu/slider/${item.image}`} alt="" srcset="" />
		{/each}
	</Carousel>
</div>
<style>
	img{
		height: 40vw;
	}
</style>
