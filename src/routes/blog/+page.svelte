<script>
	import H1 from './../../stylingComponents/H1.svelte';
	import H2 from './../../stylingComponents/H2.svelte';
	import H4 from './../../stylingComponents/H4.svelte';
	import P from '../../stylingComponents/P.svelte';
	import loader from '../../lib/images/logos/loader.svg';
	import scissor from '../../lib/images/logos/loaderscicssors.svg';
	import background from '../../lib/images/background/blogbackground.jpg';
	import { onMount } from 'svelte';
	import db from '../../firebaseConfig';
	import { getDocs, collection } from 'firebase/firestore';
	

	let data = [];
	onMount(async () => {
		const querySnapshot = await getDocs(collection(db, 'Blog'));
		querySnapshot.forEach((doc) => {
		data=[...data,{id:doc.id,...doc.data()}]
			
		});
	});
</script>

{#if data.length == 0}
	<div class="loader-container">
		<img src={scissor} class="scissor" alt="" />
		<img src={loader} class="loader" alt="" />
	</div>
{:else}
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
{/if}

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
		grid-template-columns: repeat(auto-fit, minmax(25vw, 1fr));
		gap: 2rem;
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
	.loader-container img {
		width: 100%;
		object-fit: cover;
	}
	.loader-container {
		width: 20%;
	}
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.loader-container {
		position: relative;
		animation: 2s 1 scale;
	}
	@keyframes scale {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	.loader {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		animation: 12s infinite rotate;
	}
</style>
