<script>
	import Menu from './../components/Menu.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import scissor from '../lib/images/logos/loaderscicssors.svg';
	import loader from '../lib/images/logos/loader.svg';
	import isLoading from '../stroes/globalLoader.js';
</script>

<div class="main">
	{#if $isLoading}
		<!-- content here -->
		<div class="center">
			<div class="loader-container">
				<img src={scissor} class="scissor" alt="" />
				<img src={loader} class="loader" alt="" />
			</div>
		</div>
	{/if}
	

	<div class={`container ${$isLoading ?'none':''}`}>
		<Navbar />
		<div class="main">
			<slot />
		</div>
		<Footer />
	</div>
</div>

<style>
	.none{
		display: none;
	}
	.main {
		position: relative;
	}
	.center {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		width: 100%;
		height: 80vh;
		background-color: #000;
	}
	.loader-container img {
		width: 80%;
		object-fit: cover;
	}
	.loader-container {
		width: 20%;
	}
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.loader-container {
		position: relative;
		animation: 2s 1 scale;
	}
	@keyframes scale {
		0% {
			transform: scale(0.5);
		}
		100% {
			transform: scale(1);
		}
	}
	.loader {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		animation: 12s infinite rotate;
	}
	.container {
		background-image: radial-gradient(rgba(0, 0, 0, 0.4), #000),
			url(../lib//images//background/background.jpg);
	}

	.main {
		padding: 2rem;
	}
	::-webkit-scrollbar {
		width: 10px; /* Width of the scrollbar track */
	}
</style>
