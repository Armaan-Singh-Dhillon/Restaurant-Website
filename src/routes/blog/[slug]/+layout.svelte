<script>
	import H2 from './../../../stylingComponents/H2.svelte';
	import Sidebar from './../../../components/Sidebar.svelte';
	import InnerH3 from './../../../stylingComponents/inner/innerH3.svelte';
	import InnerH1 from './../../../stylingComponents/inner/innerH1.svelte';
	import test from '../../../lib/images/blogs/blog-test.jpg';
	import header from '../../../lib/images/background/blog-inner.avif';
	import user from '../../../lib/images/logos/user.svg';
	import calendar from '../../../lib/images/logos/calendar.svg';
	import P from '../../../stylingComponents/P.svelte';
	import quote from '../../../lib/images/logos/quote.svg';
	import hex from '../../../lib/images/logos/hex.svg';
	
</script>

<div class="header">
	<div class="heading">
		<InnerH1 heading={'Tips For Prepping And Caring For Your Grill'} />
	</div>
	<img src={header} alt="" />
</div>
<div class="container">
	<div class="content">
		<div class="image-container">
			<img src={test} alt="" />
		</div>
		<div class="nameline">
			<div class="nameline-element">
				<div class="inner-container">
					<img src={user} alt="" />
				</div>

				Annalisa
			</div>
			<div class="nameline-element separator">
				<div class="inner-container">
					<img src={calendar} alt="" />
				</div>
				september 4,2021
			</div>
			<div class="nameline-element separator">baking, cooking tips, Photography</div>
		</div>

		<div class="main-heading">Uncovering Hidden Gems In The Restaurant Scene</div>
		<P
			paragraph={'The process of uncovering hidden gems can involve several steps. First, food critics and bloggers may conduct research to find out about lesser-known restaurants in the area. This can involve visiting local neighborhoods or checking out online reviews to find hidden treasures that are off the beaten path. Once potential hidden gems are identified, food critics and bloggers may visit these restaurants to try out the'}
		/>
		<P
			paragraph={'After visiting a hidden gem, food critics and bloggers may write about their experience in reviews, blog posts, or social media posts. They may also recommend the restaurant to others through word of mouth or by featuring it in articles or on their website.'}
		/>
		<div class="quote ">
			<div class="quote-image-container">
				<img src={quote} class="quote-image" alt="" />
			</div>
			<div class="quote-container glow">
				<div class="quote-content">
					hole-in-wall eateries to hidden gems, join us on a journey to find the hidden treasures
					that will tantalize your taste buds and leave you hungry.”
				</div>
				<div class="quote-auth">- LEENA ALEX</div>
			</div>
		</div>
		<P
			paragraph={'After visiting a hidden gem, food critics and bloggers may write about their experience in reviews, blog posts, or social media posts. They may also recommend the restaurant to others through word of mouth or by featuring it in articles or on their website.'}
		/>
		<P
			paragraph={'After visiting a hidden gem, food critics and bloggers may write about their experience in reviews, blog posts, or social media posts. They may also recommend the restaurant to others through word of mouth or by featuring it in articles or on their website.'}
		/>
		<div class="main-heading">The Best Under-The-Radar Restaurants</div>
		<div class="points">
			<div class="point-container">
				<div class="point-image">
					<img src={hex} alt="" />
				</div>
				<div class="point-content">
					<P
						paragraph={"Look beyond popular areas: While popular areas may have a lot of great restaurants, it's worth exploring lesser-known"}
					/>
				</div>
			</div>
			<div class="point-container">
				<div class="point-image">
					<img src={hex} alt="" />
				</div>
				<div class="point-content">
					<P
						paragraph={"Look beyond popular areas: While popular areas may have a lot of great restaurants, it's worth exploring lesser-known"}
					/>
				</div>
			</div>
			<div class="point-container">
				<div class="point-image">
					<img src={hex} alt="" />
				</div>
				<div class="point-content">
					<P
						paragraph={"Look beyond popular areas: While popular areas may have a lot of great restaurants, it's worth exploring lesser-known"}
					/>
				</div>
			</div>
		</div>
	</div>

	<div class="sidebar">
		<Sidebar />
	</div>

</div>

<style>
	.point-container {
		display: flex;
		align-items: center;
	}
	.point-image img {
		width: 100%;
	}
	.point-image {
		width: 15px;
		margin-right: 8px;
	}
    
	.quote {
		display: grid;
		grid-template-rows: 20px repeat(4,1fr);
		grid-template-columns: repeat(4,1fr);

	}
	.quote-image-container {
	 grid-area: 1/2;
	 z-index: 1;

	}
	.quote-container {
		padding: 2rem;
		 grid-area: 2/1/-1/-1;
		
	}
	.quote-auth {
		font-family: 'Poppins', sans-serif;
		font-size: calc(0.5em + 1vw);
	}

	.quote-content {
		font-family: 'Sacramento', cursive;
		font-size: calc(2.5em + 1vw);
		word-spacing: 4px;
	}

	.main-heading {
		font-family: 'Noto Serif Georgian', serif;

		font-weight: 300;
		color: #dcca87;
		font-size: calc(2em + 1vw);
	}
	.inner-container {
		margin-right: 10px;
		display: flex;
		align-items: center;
	}

	.nameline-element {
		font-family: 'Poppins', sans-serif;
		font-size: 14px;
		display: flex;
		align-items: center;
	}
	.separator::before {
		content: '';
		background-color: #aaa;
		width: 5px;
		height: 5px;
		margin: auto 1rem;
		border-radius: 50%;
	}
	.nameline {
		display: flex;
		margin: 20px 0;
		text-transform: capitalize;
	}
	.image-container {
		height: 500px;
	}
	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.container {
		color: white;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		gap: 1rem;
		padding: 0 4rem;
		background-color: #000;
		margin: 8rem 0;
	}
	.content {
		grid-column: span 4/auto;
	}
	.sidebar{
		grid-column: span 2/auto;
	}

	.glow {
		border-top: 2px solid #dcca87;
		border-bottom: 2px solid #dcca87;
	}
	.header {
		position: relative;
		height: 400px;
	}
	.heading {
		width: 80%;
		position: absolute;
		z-index: 1;
		position: absolute;
		top: 50%;
		left: 50%;
		font-family: 'Noto Serif Georgian', serif;
		transform: translate(-50%, -50%);
		text-align: center;
	}
	.header img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.5;
	}
	
</style>
