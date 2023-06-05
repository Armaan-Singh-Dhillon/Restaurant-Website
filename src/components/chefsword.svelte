<script>
	import H1 from './../stylingComponents/H1.svelte';
	import sign from '../lib/images/background/chefs/Kevin-Luo.png';
	import H4 from '../stylingComponents/H4.svelte';
	import P from '../stylingComponents/P.svelte';
	import chef from '../lib/images/background/chefs/founderchef.jpg';
	import Button from '../stylingComponents/Button.svelte';
	import H3 from '../stylingComponents/H3.svelte';
	import scissor from '../lib/images/logos/scissors.svg';
</script>

<div class="container">
	<div class="hero">
		<div class="image-container">
			<img src={chef} alt="" class="image" />
			<div class="modifier1" />
			<div class="modifier2" />
		</div>
		<div class="intro">
			<div class="heading-container">
				<H4 heading={"Chef's Word"} />
			</div>
			<H1 heading={'What We Believe In '} />
			<P
				paragraph={'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus'}
			/>
			<H3 heading={'Kevin Luo'} />
			<P paragraph={'Chef & Founder'} />
			<div class="sign-container">
				<img src={sign} alt="" srcset="" />
			</div>
			<div />
		</div>
	</div>
	<div class="svg-container">
		<img src={scissor} alt="" />
	</div>
</div>

<style>
	.sign-container {
		width: 40%;
	}
	.heading-container {
		width: 50%;
	}
	.intro {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.container {
		display: flex;
		justify-content: space-evenly;
		padding-top: 8rem;
		padding-bottom: 16rem;
		position: relative;
		background-color: black;
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
	}
	.image {
		grid-area: 2/2/-2/-2;
		z-index: 1;
	}
	.svg-container {
		width: 10%;
		margin: 2rem;
		position: absolute;
		left: 85%;
		bottom: 0;
	}
</style>
