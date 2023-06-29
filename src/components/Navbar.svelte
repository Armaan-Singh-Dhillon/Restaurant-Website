<script>
	import { showLoginModal } from './../stores/loginModal.js';
	import InnerH3 from './../stylingComponents/inner/innerH3.svelte';
	import Button from './../stylingComponents/Button.svelte';
	import fadeScale from '../stylingComponents/fadescale';
	import user from '../lib/images/logos/user.svg';
	import cross from '../lib/images/logos/cross.svg';
	import bars from '../lib/images/logos/bars.svg';
	import search from '../lib/images/logos/search.svg';
	import cart from '../lib/images/logos/cart.svg';
	import { slide } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { linear } from 'svelte/easing';
	import userFire from '../stores/user.js';
	import { onMount } from 'svelte';
	import { getAuth, signOut } from 'firebase/auth';

	let show = false;
	let visibility = false;
	let sideVisibility = false;
	let loggedin = false;
	const auth = getAuth();

	const modalChanger = () => {
		showLoginModal.set(true);
	};

	onMount(() => {
		userFire.subscribe((value) => {
			loggedin = value;
		});
	});

	let options = { duration: 500, easing: linear };
	const stateChanger = () => {
		show = !show;
	};
	const visibilitychanger = () => {
		visibility = !visibility;
	};
	const sidevisibilitychanger = () => {
		sideVisibility = !sideVisibility;
	};
	const logout = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.log(error);
		}
	};
</script>

<div class="navbar">
	<div class="section-1">
		<a href="/">
			<div class="heading">Wine And Dine</div>
		</a>
	</div>

	<div class="section-2">
		<div class="tags">
			<a href="/"> Home </a>
		</div>
		<div
			on:mouseenter={visibilitychanger}
			on:mouseleave={visibilitychanger}
			class="drop-container tags"
		>
			Pages

			{#if visibility}
				<div
					class="dropdowns"
					transition:fadeScale={{
						duration: 1000,
						easing: cubicInOut,
						baseScale: 0.5
					}}
				>
					<div class="tags">
						<a href="/more/faq"> FAQ </a>
					</div>
					<div class="tags">
						<a href="/more/history"> History </a>
					</div>
					<div class="tags">
						<a href="/shop">Shop</a>
					</div>
					<div class="tags">
						<a href="/blog"> Blog </a>
					</div>
				</div>
			{/if}
		</div>
		<div class="tags">
			<a href="/menu"> Menu </a>
		</div>
		<div class="tags">
			<a href="/shop">Shop</a>
		</div>
		<div class="tags">
			<a href="/blog"> Blog </a>
		</div>
	</div>
	{#if show}
		<div
			class=" side"
			transition:fadeScale={{
				duration: 1000,
				easing: cubicInOut,
				baseScale: 0.5
			}}
		>
			<div class="st-containers cross">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img src={cross} alt="" on:click={stateChanger} />
			</div>
			<div class="tags">Home</div>
			<div
				on:mouseenter={sidevisibilitychanger}
				on:mouseleave={sidevisibilitychanger}
				class="side-drop-container"
			>
				<div class="page-arrow">Pages</div>

				{#if sideVisibility}
					<div class="sidedowns" transition:slide={{ ...options }}>
						<div class="tags">
							<a href="/menu"> Menu </a>
						</div>
						<div class="tags">
							<a href="/shop">Shop</a>
						</div>
						<div class="tags">
							<a href="/blog"> Blog </a>
						</div>
					</div>
				{/if}
			</div>
			<div class="tags">
				<a href="/menu"> Menu </a>
			</div>
			<div class="tags">
				<a href="/shop">Shop</a>
			</div>
			<div class="tags">
				<a href="/blog"> Blog </a>
			</div>
		</div>
	{/if}

	<div class="section-3">
		<div class="stickers">
			<div class="st-containers">
				<img src={search} alt="" srcset="" />
			</div>

			{#if loggedin}
				<div class="login" on:click={logout}>Logout</div>
			{/if}

			<div class="st-containers bars">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img src={bars} alt="" srcset="" on:click={stateChanger} />
			</div>
		</div>
		<div class="st-containers">
			{#if loggedin}
				<img src={user} alt="" srcset="" />
			{:else}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="login" on:click={modalChanger}>Login</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.login {
		font-size: calc(0.25em + 1vw);
		font-family: 'Open Sans', sans-serif;
		cursor: pointer;
	}
	a {
		text-decoration: none;
		color: white;
	}
	.page-arrow {
		display: flex;
	}
	.sidedowns {
		padding: 1rem;
		border: 2px dotted #aaa;
		background-color: #242424;
	}

	.tags {
		position: relative;
		cursor: pointer;
	}
	.tags::before {
		content: '';
		position: absolute;
		background-color: #dcca87;
		top: 99%;
		left: 0;
		right: 0;
		bottom: 0;
		transform: scaleX(0);
		transition: all 0.5s ease-in-out;
		transform-origin: left;
	}
	.tags:hover::before {
		transform: scaleX(1);
	}

	.drop-container {
		position: relative;
		display: flex;
	}

	.dropdowns {
		position: absolute;
		left: 0;
		top: 150%;
		width: 500%;
		display: grid;
		border: 2px solid #dcca87;

		gap: 2rem;
		background-color: #000;
		z-index: 10;
		padding: 1rem;
	}
	.cross {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 20;
	}
	.bars {
		cursor: pointer;
	}
	.navbar {
		color: #fff;
		justify-content: space-between;
		display: flex;
		position: relative;
	}
	.side {
		position: absolute;
		top: 0;
		left: 0;
		background-color: #000;
		right: 50%;
		z-index: 10;
		background-color: black;
		display: grid;
		gap: 2rem;
		font-family: 'Open Sans', sans-serif;
		font-size: calc(0.8em + 1vw);
	}

	.heading {
		font-family: 'Cormorant Upright', serif;
		font-size: calc(1.5em + 1vw);
		display: flex;
		align-items: center;
		flex: 0.35;
	}
	.st-containers img {
		width: 100%;
	}
	.st-containers {
		width: calc(0.5em + 1vw);
	}

	.section-2 {
		flex: 1;
		font-family: 'Open Sans', sans-serif;
		font-size: calc(0.25em + 1vw);
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.stickers {
		display: flex;
		flex: 1;
		justify-content: space-evenly;
		align-items: center;
	}

	.bars {
		display: none;
	}
	.section-3 {
		flex: 0.3;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media (max-width: 1000px) {
		.section-3 {
			flex: 0.1;
		}
	}
	@media (max-width: 600px) {
		.bars {
			display: block;
		}
		.section-3 {
			flex: 0.4;
		}
		.section-1 {
			flex: 0.6;
		}
		.section-2 {
			display: none;
			flex: 0;
		}
	}
</style>
