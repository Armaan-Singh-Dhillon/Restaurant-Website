<script>
	import MenuCard from '../stylingComponents/MenuCard.svelte';
	import H1 from '../stylingComponents/H1.svelte';
	import apetizers from '../localData/apetizers.js';
	import mainCourse from '../localData/Maincourse.js';
	import MenuSlider from './MenuSlider.svelte';
</script>

<div class="header">
	<H1 heading={'Appetizers'} />
</div>

<div class="menu">
	{#each apetizers as item}
		<MenuCard item={item.item} price={item.price} text={item.text} />
	{/each}
</div>
<MenuSlider />
<div class="header">
	<H1 heading={'Main Course'} />
</div>
<div class="menu">
	{#each mainCourse as item}
		<MenuCard item={item.item} price={item.price} text={item.text} />
	{/each}
</div>

<style>
	.menu {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 600px));
		gap: 4rem;
		justify-content: center;
		background-color: #000;
	}
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
