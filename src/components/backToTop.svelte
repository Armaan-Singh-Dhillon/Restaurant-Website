<script>
	import InnerH3 from '../stylingComponents/inner/innerH3.svelte';

	export let showOnPx = 150;
	let hidden = true;

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="back-to-top" on:click={goTop} class:hidden>
	<div class="bar" />
	<InnerH3 heading={'Top'} />
</div>

<style>
	.bar {
		width: 1.5px;
		height: 40px;
		background-image: linear-gradient(#dcc87a 60%, #000);
	}
	.back-to-top {
		opacity: 1;
		transition: opacity 0.5s, visibility 0.5s;
		position: fixed;
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 99;
		right: 20px;
		user-select: none;
		bottom: 20px;
		color: white;
		background-color: black;
		cursor: pointer;
	}

	.back-to-top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
