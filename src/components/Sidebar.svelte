<script>
	import H4 from './../stylingComponents/H4.svelte';

	import InnerH3 from '../stylingComponents/inner/innerH3.svelte';
	import search from '../lib/images/logos/search.svg';
	import blogStore from '../stores/blogStore.js';
	import { onMount } from 'svelte';


	let data = [];
	onMount(() => {
		blogStore.subscribe((value) => {
			data = value;
		});
	});
</script>

<div class="sidebar glow">
	<div>
		<div class="search">
			<input type="" placeholder="Search" />
			<img src={search} class="search-icon" alt="" />
		</div>
		<div class="categories">
			<div class="title-tags">
				<InnerH3 heading={'All Categories'} />
				<div class="category-tags">
					<div class="category-tags-single">Baking</div>
					<div class="category-tags-single">Cooking Tips</div>
					<div class="category-tags-single">Photography</div>
				</div>
			</div>
			<div class="title-tags">
				<InnerH3 heading={'Popular Tags'} />
				<div class="popular-tags">
					<div class="category-tags-single">
						<button class="search-tags"> Baking </button>
					</div>
					<div class="category-tags-single">
						<button class="search-tags"> Cooking </button>
					</div>
					<div class="category-tags-single">
						<button class="search-tags"> Grilling </button>
					</div>
				</div>
			</div>
			<div class="title-tags">
				<InnerH3 heading={'Popular Tags'} />
				<div class="popular-tags">
					<div class="category-tags-single">
						<button class="search-tags"> Baking </button>
					</div>
					<div class="category-tags-single">
						<button class="search-tags"> Cooking </button>
					</div>
					<div class="category-tags-single">
						<button class="search-tags"> Grilling </button>
					</div>
				</div>
			</div>
			<div class="title-tags">
				<InnerH3 heading={'Popular Tags'} />
				<div class="popular-tags">
					<div class="category-tags-single">
						<button class="search-tags"> Baking </button>
					</div>
					<div class="category-tags-single">
						<button class="search-tags"> Cooking </button>
					</div>
					<div class="category-tags-single">
						<button class="search-tags"> Grilling </button>
					</div>
				</div>
			</div>
			<div class="carousel">
		
			</div>
		</div>
	</div>
</div>

<style>
	
	.search-icon {
		width: 20px;
	}
	.popular-tags {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	}
	.search-tags {
		padding: 10px;
		border: none;
		background-color: #242424;
		color: #aaa;
	}

	.title-tags {
		font-size: calc(0.8em + 1vw);
		font-family: 'Noto Serif Georgian', serif;
		font-weight: 300;
		margin: 40px 0;
		color: #dcca87;
	}

	.sidebar {
		background-color: black;
	}
	.category-tags-single {
		font-size: 16px;
		font-family: 'Noto Serif Georgian', serif;
		font-weight: 400;
		color: #aaa;
		margin: 20px 0;
	}
	.search {
		position: relative;
		display: flex;
	}
	.search input {
		width: 100%;
		padding: 5px;
		background-color: #000;
		border: none;
		color: #aaa;
	}
	.search::before {
		content: '';
		position: absolute;
		background-color: #dcca87;
		top: 95%;
		left: 0;
		right: 0;
		bottom: 0;
		transform: scaleX(0);
		transform-origin: left;
		transition: 0.4s all;
	}
	.search:hover::before {
		transform: scaleX(1);
	}
	input:focus {
		outline: none;
	}
</style>
