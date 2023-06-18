<script>
	export let heading = '';
</script>

<div class="heading">
	{heading}
</div>

<style>
	.heading {
		font-size: calc(2.5em + 1vw);
		font-family: 'Cormorant Upright', serif;
		font-weight: 600;
		color: #dcca87;
        text-align: center;
	}
	@media (max-width: 768px) {
		.heading {
			font-size: calc(1.5em + 1vw);
		}
	}
</style>
