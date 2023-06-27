<script>
	import H1 from './../stylingComponents/H1.svelte';
	import sign from '../lib/images/background/chefs/Kevin-Luo.png';
	import H4 from '../stylingComponents/H4.svelte';
	import P from '../stylingComponents/P.svelte';
	import chef from '../lib/images/background/chefs/chef-kevin.png';
	import Button from '../stylingComponents/Button.svelte';
	import H3 from '../stylingComponents/H3.svelte';
	import scissor from '../lib/images/logos/scissors.svg';
</script>

<div class="container">
	<div class="hero">
		<div>
			<img src={chef} alt="" class="image" />
		</div>

		<div class="intro">
			<div class="heading-container">
				<H4 heading={"Chef's Word"} />
			</div>
			<H1 heading={'What We Believe In '} />
			<P
				paragraph={'Within these walls, we weave culinary dreams, creating dishes that tantalize the palate and transport you to a world of indulgence and refinement.'}
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
