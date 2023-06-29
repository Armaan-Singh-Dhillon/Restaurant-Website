<script>
	import H1 from './../../../stylingComponents/H1.svelte';
	import Sidebar from './../../../components/Sidebar.svelte';
	import InnerH1 from './../../../stylingComponents/inner/innerH1.svelte';
	import header from '../../../lib/images/background/blog-inner.avif';
	import calendar from '../../../lib/images/logos/calendar.svg';
	import P from '../../../stylingComponents/P.svelte';
	import quote from '../../../lib/images/logos/quote.svg';
	import hex from '../../../lib/images/logos/hex.svg';
	import { doc, getDoc, updateDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import db from '../../../firebaseConfig.js';
	import isLoading from '../../../stores/globalLoader.js';
	import H2 from '../../../stylingComponents/H2.svelte';
	import InnerH3 from '../../../stylingComponents/inner/innerH3.svelte';
	import Button from '../../../stylingComponents/Button.svelte';
	import { showLoginModal } from '../../../stores/loginModal';
	import { getAuth } from 'firebase/auth';
	import userStore from '../../../stores/user';
	import H4 from '../../../stylingComponents/H4.svelte';

	export let data;

	let blogdata = {};
	let comments = [];
	isLoading.set(true);
	let comment = '';
	let userData = {};
	const submitHandler = async (blogid) => {
		if ($userStore) {
			userData = $userStore;
			comments = [
				...comments,
				{ id: userData.id, name: userData.name, review: comment, email: userData.email }
			];
			const docRef = doc(db, 'Blog', blogid);
			await updateDoc(docRef, { comments: comments });
		} else {
			console.log('no user');

			showLoginModal.set(true);
		}
	};
	onMount(async () => {
		const docRef = doc(db, 'Blog', data.slug);
		const docSnap = await getDoc(docRef);
		blogdata = { id: docSnap.id, ...docSnap.data() };
		userStore.subscribe((value) => {
			userData = value;
		});
		comments = [...blogdata.comments];
		isLoading.set(false);
	});
</script>

{#if $isLoading}
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
				<img src={blogdata.image1} alt="" />
			</div>
			<div class="nameline">
				<div class="nameline-element">
					<div class="inner-container">
						<!-- <img src={user} alt="" /> -->
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
				<video loop controls>
					<source src={blogdata.video} type="video/mp4" />
					<track kind="captions" src="" label="English" srclang="en" default />
					Your browser does not support the video tag.
				</video>
			</div>
			<P paragraph={blogdata.videopara} />

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
			<P paragraph={blogdata.outropara} />

			<div class="main-heading">{blogdata.outroTitle}</div>
			<div class="points">
				<div class="point-container">
					<div class="point-image">
						<img src={hex} alt="" />
					</div>
					<div class="point-content">
						<P paragraph={blogdata.pointsoutro.point1} />
					</div>
				</div>
				<div class="point-container">
					<div class="point-image">
						<img src={hex} alt="" />
					</div>
					<div class="point-content">
						<P paragraph={blogdata.pointsoutro.point2} />
					</div>
				</div>

				<div class="point-container">
					<div class="point-image">
						<img src={hex} alt="" />
					</div>
					<div class="point-content">
						<P paragraph={blogdata.pointsoutro.point3} />
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
	{#if comments.length != 0}
		<div>
			<H4 heading={'Comments'} />
			{#each comments as item}
				<div class="comment">
					<div>
						<InnerH3 heading={item.name} />
					</div>
					<P paragraph={item.review} />
				</div>
			{/each}
		</div>
	{/if}

	<div class="addreview">
		<H2 heading={'Add Your Reviews'} />
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<form class="content">
			<label><InnerH3 heading={'Comment'} /></label>
			<div class="search">
				<textarea rows="4" cols="50" bind:value={comment} />
			</div>
		</form>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click={() => submitHandler(blogdata.id)}>
		<Button text={'submit'} />
	</div>
{/if}

<style>
	.addreview {
		width: 50%;
	}

	.search {
		position: relative;
	}
	.search::before {
		content: '';
		position: absolute;
		top: 98%;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #dcca87;
		transform: scaleX(0);
		transform-origin: left;
		transition: all 0.5s ease-in-out;
	}
	.search:hover::before {
		transform: scaleX(1);
	}

	textarea {
		resize: none;
		width: 100%;
		padding: 1rem;
		background-color: #000;
		border: 1px solid #aaa;
		color: #aaa;
		font-size: calc(0.5em + 1vw);
	}

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
