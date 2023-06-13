<script>
	import H3 from './../stylingComponents/H3.svelte';
	import H4 from './../stylingComponents/H4.svelte';
	import data from '../localData/menuslider.js';
	import Button from './../stylingComponents/Button.svelte';
	import search from '../lib/images/logos/search.svg';
	import Slider from '@bulatdashiev/svelte-slider';
	import Carousel from './Carousel.svelte';
	import InnerH3 from '../stylingComponents/inner/innerH3.svelte';
	let value = [10, 100];
</script>

<div class="container">
	<div class="section">
		<div class="heading">Search</div>

		<div class="search-container">
			<input type="text" placeholder="Search" />
			<div class="search-image">
				<img src={search} alt="" />
			</div>
		</div>
	</div>
	<div class="section">
		<div class="heading">Filter</div>
		<div class="slider">
			Price: ${value[0]} - ${value[1]}
			<Slider max="200" step="10" bind:value range order />
			<Button text={'Reset'} />
		</div>
	</div>
	<div class="section">
		<div class="heading">Categories</div>
		<div class="tags-container">
			<div class="tags">Main Cousre</div>
			<div class="tags">Apetizers</div>
			<div class="tags">Mocktail</div>
		</div>
	</div>
	<div class="section">
		<div class="heading">Tags</div>
		<div class="tags-container">
			<div class="tags">Continental</div>
			<div class="tags">Low Sugar</div>
			<div class="tags">Aroma</div>
			<div class="tags">High Protein</div>
		</div>
	</div>
	<div class="section">
		<Carousel autoplay="2000" perPage="1" duration="600">
			{#each data as item}
				<div class="image-container">
					<img src={`src/lib/images/menu/slider/${item.image}`} alt="" srcset="" />
					<div class="info">
						<H3 heading={item.name} />
						<InnerH3 heading={`Price :$${item.price}`} />
					</div>
				</div>
			{/each}
		</Carousel>
	</div>
</div>

<style>
	:root {
		--track-bg: #aaa;
		--progress-bg: #dcca87;
		--thumb-bg: #dcca87;
	}
	.image-container img{
        height: 25vw;
    }
	.tags-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		align-items: flex-start;
	}
	.tags {
		color: #aaa;
		font-size: 20px;
		margin: 10px 10px;
		padding: 8px;
		background-color: #242424;
		transition: all 0.5s ease-in-out;
	}
	.tags:hover {
		cursor: pointer;
		scale: 1.1;
		color: #dcca87;
	}
	.slider {
		color: white;
		font-family: 'Noto Serif Georgian', serif;
		font-size: medium;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.section {
		margin-bottom: 4rem;
	}
	.heading {
		font-family: 'Noto Serif Georgian', serif;
		font-weight: 300;
		color: white;
		margin: 1rem 0;
		font-size: 22px;
	}
	.container {
		padding: 1rem;
		background-color: #000;
	}
	.search-container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		position: relative;
	}
	.search-container::before {
		content: '';
		position: absolute;
		top: 95%;
		right: 0;
		bottom: 0;
		left: 0;
		scale: 0;
		background-color: #dcca87;
		transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
		transform-origin: left;
	}
	.search-container:hover::before {
		scale: 1;
	}
	.search-image {
		width: 20px;
	}
	input {
		width: 80%;
		padding: 5px;
		background-color: black;
		border: none;
	}
	input:focus {
		outline: none;
	}
	img {
		width: 100%;
		object-fit: cover;
	}
</style>
