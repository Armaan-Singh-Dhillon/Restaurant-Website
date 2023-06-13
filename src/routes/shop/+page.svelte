<script>
	import H4 from './../../stylingComponents/H4.svelte';
	import back from '../../lib/images/background/blog-inner.avif';
	import InnerH1 from './../../stylingComponents/inner/innerH1.svelte';
	import ShopBar from '../../components/shopBar.svelte';
	import InnerH3 from './../../stylingComponents/inner/innerH3.svelte';
	import Star from '../../stylingComponents/Star.svelte';
	import H3 from '../../stylingComponents/H3.svelte';
	import burger from '../../lib/images/dishes/burger.jpg';
	import fadeScale from '../../stylingComponents/fadescale.js';
	import { cubicInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import dishStore from '../../stores/dishes.js';
	import isLoading from '../../stores/globalLoader.js'
	
	function showHandle(index) {

		items[index].show = !items[index].show;
	}
	let items = [];
	let localLoading =true
	isLoading.set(true);
	onMount(() => {
		dishStore.subscribe((val) => {
			items = val;
		});
		localLoading=false
	
		setTimeout(() => {
			isLoading.set(false);
		}, 2000);
	});
</script>
{#if !localLoading}
	<div class="back-container back">
	<div class="back-head">
		<InnerH1 heading={'Welcome To Our Shop'} />
	</div>
	<img src={back} alt="" srcset="" />
</div>

<div class="container">
	<div class="sidebar">
		<ShopBar />
	</div>
	
	{#each items as item, index}
		<div class="item">
			<div
				class="image-container"
				on:mouseenter={() => showHandle(index)}
				on:mouseleave={() => showHandle(index)}
			>
				{#if items[index].show}
					<div
						class="btn"
						transition:fadeScale={{
							duration: 1000,
							easing: cubicInOut,
							baseScale: 0.5
						}}
					>
						Select Options
					</div>
				{/if}
				<img src={`src/lib/images/dishes${item.image}.jpg`} alt="" />
			</div>
			<div>
				<H3 heading={item.name} />
			</div>
			<div class="star-container">
				<Star starData={item.reviews.averageRating} />
			</div>
			<div class="price">
				<InnerH3 heading={`Price :$${item.price}`} />
			</div>
		</div>
	{/each}
</div>
{/if}



<style>
	
	.back img {
		height: 400px;
	}
	.image-container {
		overflow: hidden;
		position: relative;
	}
	.image-container img {
		width: 100%;
		aspect-ratio: 9/10;
		object-fit: cover;
		transition: all 0.5s ease-in-out;
	}
	.image-container img:hover {
		scale: 1.4;
		opacity: 0.5;
	}
	.back-container img {
		width: 100%;
		object-fit: cover;
		opacity: 0.8;
	}
	
	.back-container {
		position: relative;
	}
	.back-head {
		position: absolute;
		z-index: 1;
		top: 50%;
		text-align: center;
		width: 100%;
		transform: translateY(-50%);
	}
	

	.btn {
		position: absolute;
		z-index: 1;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 60%; /* Assign a value */
		height: 15%; /* Assign a value */
		margin: auto auto;
		color: white;
		pointer-events: none;
		background-color: black;
		font-size: calc(0.5em + 1vw);
		font-family: 'Cormorant Upright', serif;
		padding: 1rem;
		border-top: 2px solid #dcca87;
		animation: scale 1s;
	}

	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 1vw;
		margin: 8rem 0;
	}
	
	.sidebar {
		grid-row: span 3 / auto;
		grid-column: span 2 / auto;
	}
	.item {
		grid-column: span 2 / auto;
		background-color: rgb(0, 0, 0);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 1600px) {
		.container {
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		}
	}
	@media (max-width: 768px) {
		.container {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.sidebar {
			width: 100%;
		}
	}
</style>
