<script>
	import Carousel from './../../../components/Carousel.svelte';
	import Button from './../../../stylingComponents/Button.svelte';
	import H2 from './../../../stylingComponents/H2.svelte';
	import InnerH3 from './../../../stylingComponents/inner/innerH3.svelte';
	import H3 from './../../../stylingComponents/H3.svelte';
	import H4 from './../../../stylingComponents/H4.svelte';
	import Star from './../../../stylingComponents/Star.svelte';
	import cusine from '../../../lib/images/background/cusines/cusine3.jpg';
	import P from '../../../stylingComponents/P.svelte';
	import cook from '../../../lib/images/logos/cook.svg';
	import sale from '../../../lib/images/logos/discount.svg';
	import random from '../../../lib/images/random.jpg';
	import { doc, getDoc, updateDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import db from '../../../firebaseConfig.js';
	import isLoading from '../../../stores/globalLoader.js';
	import { getAuth } from 'firebase/auth';
	import userStore from '../../../stores/user';
	import { showLoginModal } from '../../../stores/loginModal';

	let yes = false;
	export let data;
	isLoading.set(true);
	let notAvailable = [];
	let dishData = {};
	let userData = {};
	let comment = '';
	let comments = [];

	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const day = String(currentDate.getDate()).padStart(2, '0');
	const formattedDate = `${year}-${month}-${day}`;
	$: console.log($userStore);

	const submitHandler = async (dishid) => {
		if ($userStore) {
			userData = $userStore;
			comments = [
				...comments,
				{
					id: userData.id,
					name: userData.name,
					review: comment,
					email: userData.email,
					date: formattedDate
				}
			];
			const docRef = doc(db, 'dishes', dishid);
			await updateDoc(docRef, {
				'reviews.customerReviews': comments,
				'reviews.totalReviews': comments.length
			});
		} else {
			console.log('no user');

			showLoginModal.set(true);
		}
	};
	onMount(async () => {
		const docRef = doc(db, 'dishes', data.slug);
		const docSnap = await getDoc(docRef);
		dishData = { id: docSnap.id, ...docSnap.data() };

		comments = dishData.reviews.customerReviews;
		setTimeout(() => {
			isLoading.set(false);
		}, 1000);
	});
</script>

{#if $isLoading}
	hi
{:else}
	<div class="container">
		<div class="image-container">
			<img src={dishData.image} alt="" srcset="" />
		</div>
		<div class="info">
			<div class="title section">
				<H2 heading={dishData.name} />
			</div>
			<div class="star-container section">
				<Star starData={dishData.reviews.averageRating} />
			</div>
			<div class="price section">
				<H3 heading={`Price : $${dishData.price}`} />
			</div>
			<div class="description section">
				<P paragraph={dishData.description} />
			</div>
			<div class="type section">
				<H3 heading={`Type: ${dishData.type}`} />
			</div>
			<div class="tag-section section">
				<InnerH3 heading={'Tags'} />
				<div class="tags-container">
					{#each dishData.tags as item}
						<div class="tags">{item}</div>
					{/each}
				</div>
			</div>
			<div class="deliverycook section">
				<div class="content">
					<P paragraph={`Delievery Time : ${dishData.deliveryTime} min`} />
					<P paragraph={`Avergae Time To Cook : ${dishData.averageTimeToCook} min`} />
					<P paragraph={`Fat Content : ${dishData.fatContent} g`} />
					<P paragraph={`Protein Content : ${dishData.protein} g`} />
				</div>
				<div class="cook">
					<img src={cook} alt="" />
				</div>
			</div>
		</div>
		<div class="options">
			<H2 heading={'Toppings And Add-Ons'} />

			<div class="topping-name">
				<div class="topping-container">
					{#each Object.entries(dishData.options) as [key, value]}
						<div class="topping">
							<InnerH3 heading={key} />
							{#if value.length != 0}
								<div class="checkBoxes">
									{#each value as item}
										<div class="check">
											<P paragraph={item} />
											<input type="checkbox" checked={yes} />
										</div>
									{/each}
								</div>
							{:else}
								<P paragraph={`Sorry Extra ${key} Might Not Be Available !`} />
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="ingredients">
			<H2 heading={'Ingredients'} />
			<div class="ingredient-container">
				{#each Object.entries(dishData.ingredients) as [key, value]}
					{#if value.length != 0}
						<div class="item">
							<InnerH3 heading={key} />

							<!-- content here -->

							{#each value as item}
								<div class="herbs">
									<div>
										<H4 heading={item.name} />
									</div>
									<div class=" ing">
										{item.description}
									</div>

									<div class="uses">
										{#if item.uses}
											{#each item.uses as use}
												<P paragraph={use} />
											{/each}
										{/if}
									</div>
								</div>
							{/each}
						</div>
					{/if}
				{/each}
			</div>
		</div>
		<div class="supplements">
			{#if dishData.supplements != null}
				<div class="item-card">
					<H2 heading={'Beverages'} />

					<div class="beverages">
						{#if dishData.supplements.beverages.length != 0}
							{#each dishData.supplements.beverages as item}
								<div class="item">
									<H4 heading={item.name} />
									<P paragraph={item.description} />
								</div>
							{/each}
						{/if}
					</div>
				</div>
				<div class="item-card">
					<H2 heading={'Food Drinks'} />

					<div class="beverages">
						{#if dishData.supplements.foodDrinks.length != 0}
							{#each dishData.supplements.foodDrinks as item}
								<div class="item">
									<H4 heading={item.name} />
									<P paragraph={item.description} />
								</div>
							{/each}
						{:else}
							<H4 heading={'No Food Drinks Available With This Item'} />
						{/if}
					</div>
				</div>
			{/if}
		</div>
		<div class="reviews">
			<!-- https://randomuser.me/api/portraits/men/75.jpg -->
			<div class="review-section">
				<H2 heading={'Customer Reviews'} />

				<Carousel perPage="1" autoplay="5000" dots="false" controls="false" duration="2000">
					{#each dishData.reviews.customerReviews as item}
						<div class="quote">
							<div class="quote-container">
								<div>
									<Star starData={item.rating} />
								</div>
								<div class="quote-content">
									{item.review}
								</div>

								<div class="quote-auth"><P paragraph={item.date} /></div>
								<div class="quote-auth">-{item.name}</div>
							</div>
						</div>
					{/each}
				</Carousel>
			</div>
		</div>
		<div class="sale">
			<div class="sale-outer">
				<img src={sale} alt="" srcset="" />
			</div>
			{#if dishData.salesAndOffers.length != 0}
				<Carousel perPage="1" autoplay="5000" dots="false" controls="false" duration="1000">
					{#each dishData.salesAndOffers as item}
						<div class="sale-title">
							<H2 heading={item.title} />
							<div class="sale-decription">
								<P paragraph={item.description} />
							</div>
							<div class="date-info-sale">
								<div class="Start">
									<P paragraph={item.startDate} />
								</div>
								<div class="end">
									<P paragraph={item.endDate} />
								</div>
							</div>
						</div>
					{/each}
				</Carousel>
			{:else}
				<H4 heading={'No Current Offer On This Dish '} />
			{/if}
		</div>
		<!-- svelte-ignore a11y-label-has-associated-control -->

		<div class="addreview">
			<H2 heading={'Add Your Reviews'} />
			<form class="content">
				<label><InnerH3 heading={'Comment'} /></label>
				<div class="search">
					<textarea type="text" bind:value={comment} />
				</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div on:click={() => submitHandler(dishData.id)}>
					<Button text={'Submit'} />
				</div>
			</form>
		</div>
	</div>
{/if}

<style>
	textarea {
		resize: none;
		width: 100%;
		padding: 1rem;
		background-color: #000;
		border: 1px solid #aaa;
		color: #aaa;
		font-size: calc(0.5em + 1vw);
	}
	.search {
		position: relative;
	}

	.search::before {
		content: '';
		position: absolute;
		top: 92%;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #dcca87;
		transform: scaleX(0);
		transform-origin: left;
		transition: all 0.5s ease-in-out;
	}
	.search:hover::before {
		transform: scaleX(1);
	}
	input:focus {
		outline: none;
	}
	.sale {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}
	.sale img {
		width: 100%;

		object-fit: contain;
	}
	.topping-name {
		display: flex;
		justify-content: space-between;
	}
	.topping-container {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}

	.check {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.ingredient-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		gap: 1rem;
	}
	.ing {
		color: whitesmoke;
		font-size: calc(0.2em + 1vw);
		font-family: 'Open Sans', sans-serif;
	}
	.person-container img {
		width: 100%;
		height: 300px;
		object-fit: cover;
	}

	.quote {
		display: grid;
		border-top: 2px solid #dcca87;
		border-bottom: 2px solid #dcca87;

		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		color: white;
	}

	.quote-container {
		padding: 2rem;
		grid-area: 2/1/-1/4;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.quote-auth {
		font-family: 'Poppins', sans-serif;
		font-size: calc(0.5em + 1vw);
	}

	.quote-content {
		font-family: 'Open Sans', sans-serif;

		font-size: calc(0.5em + 1vw);
		word-spacing: 4px;
		color: white;
	}
	.supplements {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		background-color: black;
		gap: 1rem;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	.cook {
		width: 50%;
		padding: 10px;
	}
	.deliverycook {
		background-color: #242424;
		border: 2px dotted #aaa;
		display: flex;
		flex-wrap: wrap;
		padding: 10px;
		justify-content: space-between;
	}
	.section {
		margin-bottom: calc(1em + 1vw);
	}
	.tags-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		align-items: flex-start;
	}
	.tags {
		color: #aaa;
		font-size: calc(0.3em + 1vw);
		margin: 10px 10px;
		padding: 8px;
		background-color: #242424;
		transition: all 0.5s ease-in-out;
	}
	.tags:hover {
		cursor: pointer;
		scale: 1.1;
		color: #dcca87;
	}
	.container {
		display: grid;

		grid-template-columns: repeat(8, 1fr);
		gap: 1rem;
	}
	.image-container {
		grid-area: 1/1/3/5;
	}
	.image-container img {
		width: 100%;
		height: 50vw;
		object-fit: cover;
	}
	.info {
		grid-area: 1/5/3/-1;
	}

	.options {
		grid-area: 3/5/3/-1;
	}
	.ingredients {
		grid-area: 4/1/4/-1;
		background-color: #242424;
		border: 2px dotted #aaa;
		padding: 1rem;
	}
	.supplements {
		grid-column: span 8 / auto;
	}
	.reviews {
		grid-area: 5/5/5/-1;
	}
	.sale {
		grid-area: 3/1/3/5;

		background-color: #242424;
		border: 2px dotted #aaa;
	}
	.addreview {
		grid-area: 5/1/5/5;
		background-color: #000;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media (max-width: 768px) {
		.container {
			display: flex;
			flex-direction: column;
		}
		.topping-container {
			display: flex;
			justify-content: space-between;
		}
		.person-container {
			grid-column: span 3 / auto;
		}
	}
</style>
