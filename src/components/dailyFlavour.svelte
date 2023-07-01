<script>
	import InnerH3 from './../stylingComponents/inner/innerH3.svelte';
	import InnerH1 from './../stylingComponents/inner/innerH1.svelte';
	import H4 from './../stylingComponents/H4.svelte';

	import image1 from '../lib/images/menu/dailyExplosion/1.jpg';
	import image2 from '../lib/images/menu/dailyExplosion/2.jpg';
	import image3 from '../lib/images/menu/dailyExplosion/3.jpg';
	import image4 from '../lib/images/menu/dailyExplosion/4.jpg';
	import image5 from '../lib/images/menu/dailyExplosion/5.jpg';
	import image6 from '../lib/images/menu/dailyExplosion/6.jpg';
	import Carousel from './Carousel.svelte';
	let weekday = 'monday';
	const data = {
		monday: {
			name: 'Meatless Madness',
			content: 'peach puree, ginger ale, splash of lemon juice.',
			price: 25.16
		},
		tuesday: {
			name: 'Tropical Delight',
			content: 'mango puree, pineapple juice, coconut milk.',
			price: 28.5
		},
		wednesday: {
			name: 'Berry Blast',
			content: 'strawberry puree, blueberry syrup, lemonade.',
			price: 22.8
		},
		thursday: {
			name: 'Citrus Splash',
			content: 'orange juice, grapefruit juice, lime slices.',
			price: 19.99
		},
		friday: {
			name: 'Minty Mojito',
			content: 'muddled mint leaves, lime juice, soda water.',
			price: 24.75
		},
		saturday: {
			name: 'Sunset Sangria',
			content: 'red wine, orange slices, brandy, soda water.',
			price: 32.4
		},
		sunday: {
			name: 'Creamy Cappuccino',
			content: 'espresso, steamed milk, frothed milk.',
			price: 18.6
		}
	};

	const handleClick = (e) => {
		const value = e.target.getAttribute('value');
		weekday = value;
	};
</script>

<div class="container">
	<div class="one">
		<H4 heading={'Special Dishes'} />
		<InnerH1 heading={'Daily Flavor Explosion'} />
	</div>
	<div class="two">
		Our Daily Flavor Explosion is a section dedicated to showcasing the vibrant and diverse flavors
		that our talented team has curated. Each day, our chefs select the finest seasonal ingredients,
		sourced locally whenever possible, to craft a menu that surprises and delights.
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="three">
		<div class="tags" value="monday" on:click={(e) => handleClick(e)}>Monday</div>
		<div class="tags" value="tuesday" on:click={(e) => handleClick(e)}>Tuesday</div>
		<div class="tags" value="wednesday" on:click={(e) => handleClick(e)}>Wednesday</div>
		<div class="tags" value="thursday" on:click={(e) => handleClick(e)}>Thursday</div>
		<div class="tags" value="friday" on:click={(e) => handleClick(e)}>Friday</div>
		<div class="tags" value="saturday" on:click={(e) => handleClick(e)}>Saturday</div>
		<div class="tags" value="sunday" on:click={(e) => handleClick(e)}>Sunday</div>
	</div>

	<div class="four">
		<div class="card">
			<div class="card-upper">
				<div class="info">
					<div class="title">{data[weekday].name}</div>
					<div class="text">{data[weekday].content}</div>
				</div>
				<div class="price">
					<InnerH3 heading={`$${data[weekday].price}`} />
				</div>
			</div>
			<div class="image-container">
				<Carousel autoplay="2000" perPage="1" controls="false" duration="600">
					<img src={image1} alt="" />
					<img src={image2} alt="" />
					<img src={image3} alt="" />
				</Carousel>
			</div>
		</div>
	</div>
	<div class="five">
		<div class="image-container">
			<Carousel autoplay="5000" perPage="1" controls="false" duration="600">
				<img src={image4} alt="" />
				<img src={image5} alt="" />
				<img src={image6} alt="" />
			</Carousel>
		</div>
	</div>
</div>

<style>
	img {
		width: 100%;
		height: 40vw;
		min-height: 300px;
		object-fit: cover;
		animation: scale 1s ease-in;
	}

	.price {
		margin: 10px;
	}
	.card {
		position: relative;
	}
	.card-upper {
		width: 100%;
		display: flex;
		padding: 2rem;
		background-color: black;
		position: absolute;
		z-index: 1;
	}

	.text {
		color: #aaa;
		font-family: 'Poppins', sans-serif;
		font-size: calc(0.4em + 1vw);
	}
	.card-upper .title {
		font-family: 'Noto Serif Georgian', serif;
		font-weight: 300;
		color: white;
		font-size: calc(1.5em + 1vw);
	}
	.tags {
		font-family: 'Poppins', sans-serif;
		font-weight: 300;
		color: #aaa;
		font-size: calc(1em + 1vw);
		padding: 10px 0;
		display: flex;
	}
	.tags::before {
		content: '';
		width: 2px;
		background-color: black;
		transform: scaleX(0);
		margin: 2px;
		transition: all 0.4s ease-in;
		background-color: #dcca87;
	}
	.tags:hover {
		color: #dcca87;
		cursor: pointer;
	}
	.tags:hover::before {
		transform: scaleX(1);

		margin-right: 20px;
	}
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

		gap: 1rem;
		background-color: black;
	}
	.one {
		grid-column: span 8 / auto;
	}
	.two {
		grid-column: span 8 / auto;
		font-family: 'Sacramento', cursive;
		font-size: calc(2.5em + 1.5vw);
		word-spacing: 4px;
		color: #dcca87;
	}
	.three {
		grid-column: span 4 / auto;
		color: white;
	}
	.four {
		grid-column: span 6 / auto;
	}
	.five {
		grid-column: span 6 / auto;
	}
</style>
