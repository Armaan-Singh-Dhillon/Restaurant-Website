<script>
	import H2 from './../../stylingComponents/H2.svelte';
	import H4 from './../../stylingComponents/H4.svelte';
	import P from '../../stylingComponents/P.svelte';

	import background from '../../lib/images/background/blogbackground.jpg';
	import { onMount } from 'svelte';
	import db from '../../firebaseConfig';
	import { doc, getDocs, collection } from 'firebase/firestore';

	let data=[]
	onMount(async () => {
		const querySnapshot = await getDocs(collection(db, 'Blog'));
		querySnapshot.forEach((doc) => {
			data=[...data,doc.data()]
		});
	
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
				<img src={background} alt="" />
			</div>
			<div>
				<H4 heading={item.name} />
			</div>
			<div class="heading">{item.mainTitle}</div>
			<div>
				<P
					paragraph={item.intro}
				/>
			</div>
			<div class="read">Read More</div>
		</div>
	
		{/each}
			 
		
		
		
	</div>
</div>

<style>
	
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
	img {
		width: 100%;
		object-fit: cover;
		transition: all 0.5s ease-in-out;
	}

	.card {
		width: 30%;
	}
	.card-image {
		overflow: hidden;
	}
	img:hover {
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
