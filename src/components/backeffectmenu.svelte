<script>
	import H4 from './../stylingComponents/H4.svelte';
	import InnerH1 from './../stylingComponents/inner/innerH1.svelte';
	import P from '../stylingComponents/P.svelte';
	import H1 from './../stylingComponents/H1.svelte';
	import InnerH3 from '../stylingComponents/inner/innerH3.svelte';
	let selector = 'back1';
	const changer = (e) => {
		const value = e.target.getAttribute('value');
		selector = value;
	};
</script>

<div class={`container ${selector} `}>
	<div class="one" value="back1" on:mouseenter={(e) => changer(e)}>
		<InnerH1 heading={'Mocktail Menu'} />
		<div class="show">
			<P
				paragraph={'Quench your thirst with our delightful mocktail menu, offering a refreshing array of non-alcoholic beverages crafted to perfection.'}
			/>
		</div>
		<div class="read">Read More</div>
	</div>
	<div class="two" value="back2" on:mouseenter={(e) => changer(e)}>
		<InnerH1 heading={'Main Cousrse'} />
		<div class="show">
			<P
				paragraph={"Indulge in our chef's culinary artistry with our main course menu, where expertly crafted dishes showcase a symphony of flavors, carefully selected ingredients, and exquisite presentation."}
			/>
		</div>
		<div class="read">Read More</div>
	</div>
	<div class="three" value="back3" on:mouseenter={(e) => changer(e)}>
		<InnerH1 heading={'Best Dessert'} />
		<div class="show">
			<P
				paragraph={'Experience a symphony of flavors with our award-winning dessert, skillfully crafted using premium ingredients and innovative techniques to create a memorable culinary experience.'}
			/>
		</div>
		<div class="read">Read More</div>
	</div>
</div>

<style>
	.container {
		display: grid;
		height: 800px;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		position: relative;
	}
	.back1 {
		background-image: url(../lib/images/background/02-min-scaled.jpg);
		background-size: cover;
	}

	.back2 {
		background-image: url(../lib/images/background/01-min-scaled.jpg);
		background-size: cover;
	}
	.back3 {
		background-image: url(../lib/images/background/03-min-scaled.jpg);
		background-size: cover;
	}
	.one {
		transition: all 0.4s ease-in-out;
		display: flex;
		flex-direction: column;
		justify-content: end;
		padding: 1rem;
	}
	.two {
		transition: all 0.4s ease-in-out;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		justify-content: end;
	}
	.three {
		transition: all 0.4s ease-in-out;
		padding: 1rem;

		display: flex;
		flex-direction: column;
		justify-content: end;
	}
	.show {
		margin: 0;
		transform: scaleY(0);
		transition: all 0.4s;
		transform-origin: bottom;
	}

	.one:hover {
		backdrop-filter: blur(10px);
	}
	.one:hover .show {
		transform: scaleY(1);
		margin: 20px 0 10px 0;
	}
	.two:hover .show {
		transform: scaleY(1);
		margin: 20px 0 10px 0;
	}
	.three:hover .show {
		transform: scaleY(1);
		margin: 20px 0 10px 0;
	}
	.two:hover {
		backdrop-filter: blur(10px);
	}
	.three:hover {
		backdrop-filter: blur(10px);
	}
	.read {
		font-size: calc(1em + 1vw);

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
