<script>
	import HeadingMain from '../stylingComponents/HeadingMain.svelte';
	import H4 from '../stylingComponents/H4.svelte';
	import P from '../stylingComponents/P.svelte';
	import cusine from '../lib/images/background/cusines/cusine1.jpg';
	import white from '../lib/images/background/cusines/white.png';
	import black from '../lib/images/background/cusines/black.jfif';
	import Button from '../stylingComponents/Button.svelte';
	import arrow from '../lib/images/logos/chevron-right-svgrepo-com.svg';
	import chef from '../lib/images/background/chefs/founderchef.jpg';


</script>

<div class="container">
	<div class="hero">
		<div class="rotate">
		
			<div class="intro inner-rotate">
				<div class="heading-container">
					<H4 heading={'Chase The New Flavour'} />
				</div>
				<HeadingMain heading={'Food That Surprise You'} />
				<P
					paragraph={'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus'}
				/>
				<Button text={'Explore Menu'} />
			</div>
		</div>

		<div class="image-container">
			<div class="white-rect" />
			<div class="buttons">
				<button class="arrow">
					<img src={arrow} class="left" alt="" />
				</button>
				<button class="arrow">
					<img src={arrow} alt="" />
				</button>
			</div>
			<div class="image">
				
				<img src={cusine} alt="" srcset="" />
			</div>

			<div class="modifier1" />
			<div class="modifier2" />
		</div>
	</div>
</div>

<style>

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
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.modifier1 {
		background-color: #dcca87;
		color: #dcca87;
		grid-area: 1/3/-3/-1;
	}
	.modifier2 {
		background-color: #dcca87;
		color: #dcca87;
		grid-area: 3/1/-1/-3;
	}
	.image-container {
		display: grid;
		grid-template-columns: 15px 2fr 4fr 2fr 15px;

		grid-template-rows: 20px 2fr 4fr 2fr 20px;
		position: relative;
	}

	.image {
		grid-area: 2/2/-2/-2;
		z-index: 1;
	}
</style>
