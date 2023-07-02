<script>
	import H1 from './../stylingComponents/H1.svelte';
	import H4 from './../stylingComponents/H4.svelte';
	import H3 from './../stylingComponents/H3.svelte';
	import InnerH3 from '../stylingComponents/inner/innerH3.svelte';
	import data from '../localData/exclusiveMenu.js';
	import P from '../stylingComponents/P.svelte';
</script>

<div class="header">
	<H4 heading={'Our Menu'} />
	<H1 heading={'Exclusive Menu'} />
</div>

<div class="container">
	{#each data as item}
		<div class="card">
			<div class="image-container">
				<img src={item.image} alt="" />
			</div>
			<div class="info">
				<InnerH3 heading={item.title} />

				<P paragraph={item.subTitle} />
				<H3 heading={`$${item.price}`} />
			</div>
		</div>
	{/each}
</div>

<style>
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		row-gap: 5rem;
		column-gap: 8rem;
	}

	.info {
		padding: 2rem;
	}
	.image-container img {
		width: 100%;
	}
</style>
