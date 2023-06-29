<script>
	import { showLoginModal } from '../stores/loginModal';
	import P from '../stylingComponents/P.svelte';
	let dialog; // HTMLDialogElement
	import fadeScale from '../stylingComponents/fadescale';

	$: {
		if (dialog && $showLoginModal) {
			dialog.showModal();
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => showLoginModal.set(false)}
	on:click|self|capture={() => {
		dialog.close();
	}}
	transition:fadeScale
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot />
		<!-- svelte-ignore a11y-autofocus -->
		<div autofocus on:click={() => dialog.close()} class="para">
			<P paragraph={'Close'} />
		</div>
	</div>
</dialog>

<style>
	dialog {
		width: 50%;
		position: fixed;
		margin: auto;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		background-color: #242424;
		border: 2px dotted #aaa;
		padding: 1rem;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	.para {
		cursor: pointer;
	}
	dialog > div {
		padding: 1em;
	}
</style>
