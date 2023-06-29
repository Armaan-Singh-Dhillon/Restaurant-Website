<script>
	import { haveAccount } from './../stores/haveAccount.js';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import scissor from '../lib/images/logos/loaderscicssors.svg';
	import loader from '../lib/images/logos/loader.svg';
	import isLoading from '../stores/globalLoader.js';
	import { getDocs, collection, getDoc, doc } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import db from '../firebaseConfig.js';
	import blogStore from '../stores/blogStore.js';
	import dishStore from '../stores/dishes.js';
	import BackToTop from '../components/backToTop.svelte';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import setUser from '../stores/user.js';
	import Modal from '../components/modal.svelte';
	import H1 from '../stylingComponents/H1.svelte';
	import Button from '../stylingComponents/Button.svelte';
	import Register from '../components/register.svelte';
	import Login from '../components/login.svelte';
	import { showLoginModal } from '../stores/loginModal.js';

	isLoading.set(true);

	const auth = getAuth();

	onMount(async () => {
		let blogData = [];
		let productData = [];
		const querySnapshot1 = await getDocs(collection(db, 'Blog'));
		querySnapshot1.forEach((doc) => {
			blogData = [...blogData, { id: doc.id, ...doc.data() }];
		});
		blogStore.set(blogData);
		const querySnapshot2 = await getDocs(collection(db, 'dishes'));
		querySnapshot2.forEach((doc) => {
			productData = [...productData, { id: doc.id, show: false, ...doc.data() }];
		});
		dishStore.set(productData);

		onAuthStateChanged(auth, async (user) => {
			if (user) {
				const res = await getDoc(doc(db, 'user', user.uid));

				setUser.set({ ...res.data(), id: user.uid });
			} else {
				setUser.set(false);
			}

			setTimeout(() => {
				isLoading.set(false);
			}, 1000);
		});
	});
</script>

<div class="main">
	{#if $isLoading}
		<div class="center">
			<div class="loader-container">
				<img src={scissor} class="scissor" alt="" />
				<img src={loader} class="loader" alt="" />
			</div>
		</div>
	{/if}

	<div class={`container ${$isLoading ? 'none' : ''}`}>
		<Navbar />

		{#if $showLoginModal}
			<Modal>
				{#if $haveAccount}
					<Login />
				{:else}
					<Register />
				{/if}
			</Modal>
		{/if}

		<div class="main">
			<slot />
		</div>
		<BackToTop />
		<Footer />
	</div>
</div>

<style>
	.none {
		visibility: hidden;
	}
	.main {
		position: relative;
	}
	.center {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		width: 100%;
		height: 100vh;
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
			transform: scale(0.2);
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
