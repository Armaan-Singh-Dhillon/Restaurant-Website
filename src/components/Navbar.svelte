<script>
	import Search from '../lib/images/logos/search.svg';
	import bars from '../lib/images/logos/bars.svg';

	let toggleState = false;

	const toggle = () => {
		toggleState = !toggleState;
		console.log(toggleState);
	};
</script>

<div class={`overlay ${toggleState ? '' : 'none'}`}>
	<div class="middle">
		<div>Home</div>
		<div>Pages</div>
		
		<div>Contact Us</div>
		<div>Blog</div>
	</div>
	<img src={bars} alt="" on:click={toggle} />
</div>

<div class="navbar">
	<div class="left">
		<h1>Wine And Dine</h1>
	</div>
	<div class="middle-container">
		<div class="middle">
			<div>Home</div>
			<a href="/menu">
				<div>Menu</div>
			</a>
			<div>Contact Us</div>
			<div>
				<a href="/blog">Blog</a>
			</div>
		</div>
	</div>

	<div class="right">
		<input type="text" placeholder="search website" class="search" />
		<div class="stickers">
			<img src={Search} alt="" />

			<!-- <img src={bars} alt="" on:click={toggle} /> -->
		</div>
	</div>
</div>

<style>
	.navbar {
		color: #dcca87;
		display: grid;
		grid-template-columns: 0.1fr 0.4fr 1fr 0.4fr 0.1fr;
		gap: 2rem;
		font-size: calc(0.4em + 1vw);
		align-items: center;
		font-family: 'Poppins', sans-serif;
	}
	.middle {
		display: flex;
		width: 60%;
		justify-content: space-evenly;
	}
	.left {
		grid-column: 2/3;
		font-family: 'Cormorant Upright', serif;
		color: white;
	}
	.left h1 {
		margin: 0;
		padding: 0;
	}
	.search {
		background: transparent;
		border: none;
		width: 80%;
		padding: 0.6rem;
		background-color: black;
		color: #e4e0e0;
		font-size: calc(0.2em + 1vw);
	}
	.middle-container {
		display: flex;
		justify-content: space-evenly;
	}
	.right {
		display: flex;
		align-items: center;
	}
	.stickers {
		width: calc(2em + 1vw);
	}

	.stickers img {
		width: 40%;
	}

	@media only screen and (max-width: 1100px) {
		.navbar {
			grid-template-columns: 0.2fr 0.8fr 0.8fr 0.2fr;
			gap: 1rem;
			justify-items: center;
		}
		.right {
			grid-area: 1/3/-1/-1;
			display: flex;
		}
		.right input {
			width: 50%;
		}
		.middle {
			display: none;
		}
	}
	.none {
		display: none;
	}
	.overlay {
		position: absolute;
		width: 90vw;
		height: 100vh;
		border: 2px solid white;
		left: 50%;
		transform: translateX(-50%);
		color: #dcca87;
		background-color: black;
	}
    a{
        text-decoration: none;
        color: #dcca87;
    }
</style>
