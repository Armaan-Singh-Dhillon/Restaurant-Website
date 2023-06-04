<script>
	import Menu from './../components/Menu.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Hero from '../components/Hero.svelte';
	import Laurel from '../components/Laurel.svelte';

</script>

<div class="container">
	<Navbar />
	<div class="main">
		<!-- <Hero /> -->
		<Menu/>
		<Laurel />
		<Footer />
	</div>
</div>

<style>
    .container{
        background-image: radial-gradient(rgba(0, 0, 0, 0.4) ,#000),
			url(../lib/images/background/background.jpg);
    }
	.main {
		padding: 2rem;
		
	}
</style>
