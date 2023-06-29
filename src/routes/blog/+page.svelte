<script>
	import blogStore from '../../stores/blogStore.js';
	import H2 from './../../stylingComponents/H2.svelte';
	import H4 from './../../stylingComponents/H4.svelte';
	import P from '../../stylingComponents/P.svelte';
	import { onMount } from 'svelte';
	import isLoading from '../../stores/globalLoader.js';
	let data = [];
	isLoading.set(true);
	onMount(async () => {
		blogStore.subscribe((value) => {
			data = value;
		});
		setTimeout(() => {
			isLoading.set(false);
		}, 2000);
	});
</script>

<div class="blog">
	<div class="image-container">
		<H2 heading={'Welcome To Our Blog'} />
	</div>

	<div class="container">
		{#each data as item}
			<div class="card">
				<div class="card-image">
					<img src={item.image1} alt="" />
				</div>
				<div class="stamps">
					<div>
						{item.date}
					</div>
					<div>
						{item.writer.Postedby}
					</div>
				</div>
				<div>
					<a href={`blog/${item.id}`}>
						<H4 heading={item.name} />
					</a>
				</div>
				<div class="heading">
					<a href={`blog/${item.id}`}>
						{item.mainTitle}
					</a>
				</div>
				<div>
					<P paragraph={item.intro} />
				</div>
				<div class="read">
					<a href={`blog/${item.id}`}> Read More </a>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	a {
		text-decoration: none;
		color: #dcca87;
	}
	.stamps {
		display: flex;
		justify-content: space-between;
		font-size: calc(0.1em + 1vw);
	}
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 570px));
		justify-content: space-evenly;
		gap: 1rem;
		margin: 4rem 0;
	}
	.heading {
		font-size: calc(0.5em + 1vw);
		font-family: 'Cormorant Upright', serif;
		display: inline;
		font-weight: 600;
		color: #dcca87;
		position: relative;
		z-index: 1;
	}
	.heading::before {
		content: '';
		position: absolute;
		top: 95%;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #dcca87;
		z-index: -1;
		transform: scaleX(0);
		transition: all 0.5s;
		transform-origin: left;
	}
	.heading:hover::before {
		transform: scaleX(1);
	}
	.image-container {
		height: 400px;
		background-image: url(../../lib/images/background/blogbackground.jpg);
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		overflow: hidden;
	}

	.blog {
		color: white;
	}
	.card img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.5s ease-in-out;
	}

	.card-image {
		overflow: hidden;
		height: 350px;
	}
	.card img:hover {
		transform: scale(1.1);
	}
	.read {
		font-size: calc(1vw);
		font-family: 'Cormorant Upright', serif;
		display: flex;
		font-weight: 600;
		color: #dcca87;
		align-items: center;
	}
	.read::before {
		content: '';
		width: 0px;
		height: 2.5px;
		background-color: #dcca87;
		transform-origin: left;
		transition: all 0.5s ease-in-out;
		margin-right: 4px;
	}
	.read:hover::before {
		width: 20px;
	}
</style>
