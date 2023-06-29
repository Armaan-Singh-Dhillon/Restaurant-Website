<script>
	import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
	import P from '../stylingComponents/P.svelte';
	let email = '';
	let password = '';
	import { haveAccount } from '../stores/haveAccount';
	import Button from '../stylingComponents/Button.svelte';
	import InnerH3 from '../stylingComponents/inner/innerH3.svelte';
	import H4 from '../stylingComponents/H4.svelte';
	import { showLoginModal } from '../stores/loginModal';
	import { goto } from '$app/navigation';
	const auth = getAuth();
	const changeAccount = () => {
		haveAccount.set(false);
	};
	async function handleLogin() {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			showLoginModal.set(false);
		} catch (error) {
			console.log(error);
		}
	}
</script>

<div class="cnbtn">
	<H4 heading={'Login'} />
</div>
<main>
	<form on:submit={handleLogin}>
		<label>
			<InnerH3 heading={'Email:'} />

			<div class="text-box">
				<input type="email" bind:value={email} required />
			</div>
		</label>
		<br />
		<label>
			<InnerH3 heading={'Password:'} />

			<div class="text-box">
				<input type="password" bind:value={password} required />
			</div>
		</label>
		<br />
	</form>
</main>
<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="cnbtn">
	<div on:click={changeAccount} class="pointer">
		<P paragraph={'Dont have an account ?'} />
	</div>
	<div on:click={handleLogin}>
		<Button text="Submit" />
	</div>
</div>

<style>
	.pointer {
		cursor: pointer;
	}
	.cnbtn {
		display: flex;
		justify-content: space-evenly;
		flex-direction: column;
		align-items: center;
	}
	.text-box {
		width: 100%;
		position: relative;
	}
	input {
		width: 100%;
		height: 100%;
		padding: 8px;
		color: #dcca87;
		background-color: #000;
		border: none;
		font-size: calc(0.4em + 1vw);
	}

	.text-box::before {
		content: '';
		position: absolute;
		background-color: #dcca87;
		top: 95%;
		left: 0;
		right: 0;
		bottom: 0;
		transform: scaleX(0);
		transform-origin: left;
		transition: 0.4s all;
	}
	.text-box:hover::before {
		transform: scaleX(1);
	}
	input:focus {
		outline: none;
	}
	form {
		display: grid;
		grid-template-columns: 0.5fr;
		justify-content: space-evenly;
		gap: 2rem;
	}
	label {
		display: flex;
		flex-direction: column;
	}
	main {
		color: white;
	}
</style>
