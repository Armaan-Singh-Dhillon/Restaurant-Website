<script>
	import InnerH3 from '../stylingComponents/inner/innerH3.svelte';
	import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
	import { doc, setDoc } from 'firebase/firestore';
	import Button from '../stylingComponents/Button.svelte';
	import db from '../firebaseConfig';
	import P from '../stylingComponents/P.svelte';
	import H4 from '../stylingComponents/H4.svelte';
	import { haveAccount } from '../stores/haveAccount';
	import { showLoginModal } from '../stores/loginModal';
	const userData = {
		name: '',
		email: '',
		address: '',
		phoneNumber: '',
		password: '',
		cart: {},
		orders: {}
	};
	const auth = getAuth();
	const changeAccount = () => {
		haveAccount.set(true);
	};

	async function handleRegister() {
		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				userData.email,
				userData.password
			);
			await setDoc(doc(db, 'user', user.uid), {
				id: userData.id,
				email: userData.email,
				address: userData.address,
				phoneNumber: userData.phoneNumber
			});
			showLoginModal.set(false);
			goto('/user');
		} catch (error) {
			console.log(error);
		}
	}
</script>

<div class="cnbtn">
	<H4 heading={'Sign Up'} />
</div>
<main>
	<form on:submit={handleRegister}>
		<label>
			<InnerH3 heading={'Name:'} />

			<div class="text-box">
				<input type="text" bind:value={userData.name} required />
			</div>
		</label>
		<label>
			<InnerH3 heading={'Email:'} />

			<div class="text-box">
				<input type="email" bind:value={userData.email} required />
			</div>
		</label>

		<label>
			<InnerH3 heading={'Password:'} />

			<div class="text-box">
				<input type="password" bind:value={userData.password} />
			</div>
		</label>
		<label>
			<InnerH3 heading={'Address:'} />

			<div class="text-box">
				<input type="text" bind:value={userData.address} />
			</div>
		</label>
		<label>
			<InnerH3 heading={'Phone:'} />

			<div class="text-box">
				<input type="tel" bind:value={userData.phoneNumber} />
			</div>
		</label>
	</form>
</main>
<div class="cnbtn">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click={changeAccount} class="pointer">
		<P paragraph={'Already Have An Account ?'} />
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click={handleRegister}>
		<Button text={'Submit'} />
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
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
