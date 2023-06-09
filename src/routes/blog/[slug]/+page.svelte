<script>
	import H1 from './../../../stylingComponents/H1.svelte';
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
	import { doc, getDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import db from '../../../firebaseConfig.js';

	export let data;
	let blogdata = {};
	onMount(async () => {
		const docRef = doc(db, 'Blog', data.slug);
		const docSnap = await getDoc(docRef);
		blogdata = { id: docSnap.id, ...docSnap.data() };
	});
</script>

{#if !blogdata.id}
	<H1 heading={'Loading'} />
{:else}
	<div class="header">
		<div class="heading">
			<InnerH1 heading={blogdata.name} />
		</div>
		<img src={header} alt="" />
	</div>
	<div class="container">
		<div class="content">
			<div class="image-container">
				<img src={`../${blogdata.image1}`} alt="" />
			</div>
			<div class="nameline">
				<div class="nameline-element">
					<div class="inner-container">
						<img src={user} alt="" />
					</div>

					{blogdata.writer.Postedby}
				</div>
				<div class="nameline-element separator">
					<div class="inner-container">
						<img src={calendar} alt="" />
					</div>
					{blogdata.date}
				</div>
			</div>

			<div class="main-heading">{blogdata.mainTitle}</div>
			<P paragraph={blogdata.intro} />
			<P paragraph={blogdata.subpara} />

			<div class="main-heading">{blogdata.subtitle1}</div>
			<div class="point-container">
				<div class="point-image">
					<img src={hex} alt="" />
				</div>
				<div class="point-content">
					<P paragraph={blogdata.pointsintro.point1} />
				</div>
			</div>
			<div class="point-container">
				<div class="point-image">
					<img src={hex} alt="" />
				</div>
				<div class="point-content">
					<P paragraph={blogdata.pointsintro.point2} />
				</div>
			</div>
			<div class="point-container">
				<div class="point-image">
					<img src={hex} alt="" />
				</div>
				<div class="point-content">
					<P paragraph={blogdata.pointsintro.point3} />
				</div>
			</div>
			<div class="video-container">
				<video autoplay loop controls>
					<source src={blogdata.video} type="video/mp4" />
					<track kind="captions" src="" label="English" srclang="en" default />
					Your browser does not support the video tag.
				</video>
			</div>
			<P paragraph={blogdata.videopara}/>

			<div class="quote">
				<div class="quote-image-container">
					<img src={quote} class="quote-image" alt="" />
				</div>
				<div class="quote-container glow">
					<div class="quote-content">
						{blogdata.quote}
					</div>
					<div class="quote-auth">-{blogdata.writer.Postedby}</div>
				</div>
			</div>
			<P
				paragraph={blogdata.outropara}
			/>
			
			<div class="main-heading">{blogdata.outroTitle}</div>
			<div class="points">
				<div class="point-container">
					<div class="point-image">
						<img src={hex} alt="" />
					</div>
					<div class="point-content">
						<P
							paragraph={blogdata.pointsoutro.point1}
						/>
					</div>
				</div>
				<div class="point-container">
					<div class="point-image">
						<img src={hex} alt="" />
					</div>
					<div class="point-content">
						<P
							paragraph={blogdata.pointsoutro.point2}
						/>
					</div>
				</div>

				<div class="point-container">
					<div class="point-image">
						<img src={hex} alt="" />
					</div>
					<div class="point-content">
						<P
							paragraph={blogdata.pointsoutro.point3}
						/>
					</div>
				</div>
			</div>
			<div class="quote">
				<div class="quote-image-container">
					<img src={quote} class="quote-image" alt="" />
				</div>
				<div class="quote-container glow">
					<div class="quote-content">
						{blogdata.finalWords}
					</div>
				</div>
			</div>
		
		</div>

		<div class="sidebar">
			<Sidebar />
		</div>
	</div>
{/if}

<style>
	.video-container video {
		width: 100%;
	}
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
		grid-template-rows: 20px repeat(4, 1fr);
		grid-template-columns: repeat(4, 1fr);
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
		grid-column: span 4 / auto;
	}
	.sidebar {
		grid-column: span 2 / auto;
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
