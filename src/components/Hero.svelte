<script>
	import HeadingMain from '../stylingComponents/HeadingMain.svelte';
	import H4 from '../stylingComponents/H4.svelte';
	import P from '../stylingComponents/P.svelte';
	import cusine1 from '../lib/images/background/cusines/cusine1.jpg';
	import cusine2 from '../lib/images/background/cusines/cusine2.jpg';
	import cusine3 from '../lib/images/background/cusines/cusine3.jpg';
	import cusine4 from '../lib/images/background/cusines/pancakes.jpg';
	import Button from '../stylingComponents/Button.svelte';
	import arrow from '../lib/images/logos/chevron-right-svgrepo-com.svg';
	import Carousel from './Carousel.svelte';
</script>

<div class="container">
	<div class="hero">
		<div class="rotate">
			<div class="intro">
				<div class="heading-container">
					<H4 heading={'Quality Served Timely'} />
				</div>
				<HeadingMain heading={'Food That Surprise You'} />
				<P
					paragraph={'Whether you prefer a full-bodied red wine to accompany your perfectly cooked steak or a refreshing artisanal cocktail to start your evening, our knowledgeable staff will guide you through the extensive beverage menu, ensuring a seamless pairing with your chosen dishes. '}
				/>
				<Button text={'Explore Menu'} />
			</div>
		</div>

		<div class="image-container">
			<div class="image">
				<Carousel autoplay="5000" perPage="1" dots="false" controls="false" duration="600">
					<div class="carousel-container">
						<img src={cusine1} alt="" srcset="" />
					</div>
					<div class="carousel-container">
						<img src={cusine2} alt="" srcset="" />
					</div>
					<div class="carousel-container">
						<img src={cusine3} alt="" srcset="" />
					</div>

					<div class="carousel-container">
						<img src={cusine4} alt="" srcset="" />
					</div>

					<span class="left-control" slot="left-control"
						><div class="buttons">
							<button class="arrow">
								<img src={arrow} class="left" alt="" />
							</button>
						</div></span
					>
					<span class="right-control" slot="right-control"
						><div class="buttons">
							<button class="arrow">
								<img src={arrow} alt="" />
							</button>
						</div></span
					>
				</Carousel>
			</div>

			<div class="modifier1" />
			<div class="modifier2" />
		</div>
	</div>
</div>

<style>
	.carousel-container {
		height: 750px;
	}
	.left {
		transform: rotate(180deg);
	}
	.arrow {
		background: none;
		color: white;
		border: none;
		width: 45px;
		height: 45px;
		padding: 12px;
		display: inline-block;
		position: relative;
	}
	.arrow::before {
		content: '';
		position: absolute;
		background-color: #dcca87;
		z-index: -1;
		top: 0;
		right: 0;
		bottom: 0;
		width: 0;
		transition: all ease-out 0.4s;
	}
	.arrow:hover::before {
		left: 0;
		right: auto;
		width: 100%;
	}

	.buttons {
		position: absolute;
		z-index: 2;
		bottom: 30%;
		background-color: black;
	}
	.heading-container {
		width: 50%;
	}
	.intro {
		padding: 2rem;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.container {
		display: flex;
		justify-content: space-evenly;
		padding: 4rem 0;
	}

	.hero {
		width: 90%;
		color: white;

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.modifier1 {
		background-color: #dcca87;
		position: absolute;
		width: 70%;
		height: 60%;
		left: 0;
		bottom: 0;
		color: #dcca87;
	}
	.modifier2 {
		background-color: #dcca87;
		position: absolute;
		width: 70%;
		height: 60%;
		right: 0;
		color: #dcca87;
	}
	.image-container {
		height: 800px;
		position: relative;
	}

	.image {
		z-index: 1;
		width: 95%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.right-control,
	.left-control {
		color: white;
	}
	@media (max-width: 768px) {
		.image-container {
			height: 400px;
		}
		.image {
			width: 90%;
		}
		.carousel-container {
			height: 380px;
		}
	}
</style>
