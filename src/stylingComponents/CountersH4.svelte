<script>
	import spoon from '../lib/images/logos/spoon-svgrepo-com.svg';
	import Countup from 'svelte-countup';

	export let value;
	export let description;
</script>

<div class="heading">
	<div class="title">
		<Countup {value} />+
	</div>

	<div class="image-container">
		<img src={spoon} alt="" />
	</div>
	<div class="description">
		{description}
	</div>
</div>

<style>
	.image-container {
		width: 30px;
	}
	img {
		width: 100%;
		transform: rotate(90deg);
	}
	.description {
		color: white;
		font-size: calc(0.2rem + 1vw);
	}
	.title {
		font-family: 'Noto Serif Georgian', serif;
		color: #dcca87;
		font-size: calc(3.5em + 1vw);
		font-weight: 400;
	}
	.heading {
		display: flex;
		border-image: linear-gradient(#000, #fff, #000) 1;
		border-right: 1px solid;
		border-left: 1px solid;
		flex-direction: column;
		align-items: center;
	}
</style>
