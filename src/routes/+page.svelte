<script>
	import Menu from './../components/Menu.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Hero from '../components/Hero.svelte';
	import Laurel from '../components/Laurel.svelte';
	import Chefsword from '../components/chefsword.svelte';
	import { onMount } from 'svelte';
	import db from '../firebaseConfig.js';
	import { doc, getDocs, collection } from 'firebase/firestore';

	onMount(async () => {
		const colRef = collection(db, 'Food Menu');
		const docsSnap = await getDocs(colRef);
		docsSnap.forEach((doc) => {
			console.log(doc.data());
		});
	});
</script>


		<Hero />
		<Menu />
		<Chefsword />
		<Laurel />
		<Footer />

<style>

</style>
