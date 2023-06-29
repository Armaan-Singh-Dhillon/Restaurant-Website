<script>
	export let text = '';
</script>

<div class="heading">
	<button class="btn">{text}</button>
</div>

<style>
	.btn {
		background-color: black;
		border: none;
		padding: 0.8rem;
		font-family: 'Cormorant Upright', serif;
		font-size: calc(0.2em + 1vw);
		cursor: pointer;
		color: white;
		z-index: 2;
		position: relative;
		border-top: 2px solid #dcca87;
		border-bottom: 2px solid #dcca87;
	}
	.btn::before {
		content: '';
		position: absolute;
		background-color: #dcca87;
		z-index: -1;
		top: 0;
		right: 0;
		bottom: 0;
		width: 0;
		transition: all ease-in-out 0.5s;
	}
	.btn:hover::before {
		left: 0;
		right: auto;
		width: 100%;
	}
</style>
