<script>
	import CountersH4 from '../stylingComponents/CountersH4.svelte';
</script>

<div class="history-bar">
	<CountersH4 value={30} description={'Breakfast Options'} />
	<CountersH4 value={50} description={'Dinner Options'} />
	<CountersH4 value={52} description={'Tables Available'} />
	<CountersH4 value={20} description={'Years Of Experience'} />
</div>

<style>
	.history-bar {
		padding: 8rem 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		background-color: black;
	}
</style>
