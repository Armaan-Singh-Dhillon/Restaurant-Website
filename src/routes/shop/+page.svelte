<script>
	import Button from './../../stylingComponents/Button.svelte';
	import back from '../../lib/images/background/blog-inner.avif';
	import InnerH1 from './../../stylingComponents/inner/innerH1.svelte';
	import ShopBar from '../../components/shopBar.svelte';
	import InnerH3 from './../../stylingComponents/inner/innerH3.svelte';
	import Star from '../../stylingComponents/Star.svelte';
	import H3 from '../../stylingComponents/H3.svelte';
	import fadeScale from '../../stylingComponents/fadescale.js';
	import { cubicInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import dishStore from '../../stores/dishes.js';
	import isLoading from '../../stores/globalLoader.js';
	import { paginate, LightPaginationNav } from 'svelte-paginate';
	import H4 from '../../stylingComponents/H4.svelte';
	let items = [];

	let localLoading = true;
	let currentPage = 1;
	let pageSize = 6;
	$: paginatedItems = paginate({ items, pageSize, currentPage });

	isLoading.set(true);
	onMount(() => {
		dishStore.subscribe((val) => {
			items = val;
		});
		localLoading = false;

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

		{#each paginatedItems as item, index}
			<div class="item">
				<div class="image-container">
					<img src={item.image} alt="" />
				</div>
				<a href={`/shop/${item.id}`}>
					<div>
						<H3 heading={item.name} />
					</div>
				</a>

				<div class="star-container">
					<Star starData={item.reviews.averageRating} />
				</div>
				<div class="tag-container">
					{#each item.tags as item}
						<div class="tags">{item}</div>
					{/each}
				</div>
				<div class="price">
					<H4 heading={`Price :$${item.price}`} />
				</div>
			</div>
		{/each}
	</div>
{/if}
<LightPaginationNav
	totalItems={items.length}
	{pageSize}
	{currentPage}
	limit={1}
	showStepOptions={true}
	on:setPage={(e) => (currentPage = e.detail.page)}
/>

<style>
	.tag-container {
		display: flex;
		flex-wrap: wrap;
	}
	.tags {
		background-color: #242424;
		color: #aaa;
		font-family: 'Noto Serif Georgian', serif;
		font-size: calc(0.6em + 0.6vw);
		padding: 5px;
		margin: 0.2rem 0.5rem;
		transition: all 0.5s ease-in-out;
	}
	.tags:hover {
		color: #dcca87;
		cursor: pointer;
		scale: 1.1;
	}
	.mydiv {
		position: absolute;
		display: flex;
		left: 50%;
		bottom: 0;
	}
	a {
		text-decoration: none;
	}
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
		grid-column: span 2 / auto;
		grid-row: span 2 / auto;
	}
	.item {
		grid-column: span 2 / auto;
		max-height: 450px;
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
