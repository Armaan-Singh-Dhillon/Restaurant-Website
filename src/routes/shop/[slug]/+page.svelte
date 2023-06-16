<script>
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
	let yes = false;
	let user = {
		name: 'Tiago Vilas Boas',
		phone: '11 972393003',
		email: 'tcarvalhovb@gmail.com'
	};
</script>

<div class="container">
	<div class="image-container">
		<img src={cusine} alt="" srcset="" />
	</div>
	<div class="info">
		<div class="title section">
			<H2 heading={'Butter Chicken'} />
		</div>
		<div class="star-container section">
			<Star starData={4.5} />
		</div>
		<div class="price section">
			<H3 heading={'Price : $14'} />
		</div>
		<div class="description section">
			<P
				paragraph={'Introducing the Butter Chicken - a delicious and flavorful dish made with tender chicken cooked in a rich and creamy tomato-based sauce. It is seasoned with a blend of aromatic spices and served with fragrant basmati rice. Indulge in this classic Indian dish that is sure to satisfy your taste buds.'}
			/>
		</div>
		<div class="type section">
			<H3 heading={'Type: Main Course'} />
		</div>
		<div class="tag-section section">
			<InnerH3 heading={'Tags'} />
			<div class="tags-container">
				<div class="tags">Continental</div>
				<div class="tags">Low Sugar</div>
				<div class="tags">Aroma</div>
				<div class="tags">High Protein</div>
			</div>
		</div>
		<div class="deliverycook section">
			<div class="content">
				<P paragraph={'Delievery Time : 30 min'} />
				<P paragraph={'Avergae Time To Cook : 15 min'} />
				<P paragraph={'Fat Content : 14 g'} />
				<P paragraph={'Protein Content : 20 g'} />
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
				<div class="topping">
					<InnerH3 heading={'Sauce'} />
					<div class="checkBoxes">
						<div class="check">
							<P paragraph={'Extra Vegies'} />
							<input type="checkbox" checked={yes} />
						</div>
						<div class="check">
							<P paragraph={'Extra Vegies'} />
							<input type="checkbox" checked={yes} />
						</div>
						<div class="check">
							<P paragraph={'Extra Vegies'} />
							<input type="checkbox" checked={yes} />
						</div>
					</div>
				</div>
				<div class="topping">
					<InnerH3 heading={'Sauce'} />
					<div class="checkBoxes">
						<div class="check">
							<P paragraph={'Extra Vegies'} />
							<input type="checkbox" checked={yes} />
						</div>
					</div>
				</div>
				<div class="topping">
					<InnerH3 heading={'Sauce'} />
					<div class="checkBoxes">
						<div class="check">
							<P paragraph={'Extra Vegies'} />
							<input type="checkbox" checked={yes} />
						</div>
					</div>
				</div>
				<Button text={'Add To Cart'} />
				<Button text={'Checkout Cart'} />
			</div>
		</div>
	</div>
	<div class="ingredients">
		<H2 heading={'Ingredients'} />
		<div class="ingredient-container">
			<div class="item">
				<InnerH3 heading={'Herbs'} />
				<div class="herbs">
					<div>
						<H4 heading={'Khmeli Suneli'} />
					</div>
					<div class=" ing">
						This fragrant Georgian spice is mixed with fenugreek, marigold petals, coriander, black
						pepper, dill, mint, and bay leaf. It has warm, bitter, nutty, and grassy flavors.
					</div>
					<div class="uses">
						<H4 heading={'Uses'} />
						<P paragraph={'Used in stews and meat dishes'} />
						<P paragraph={'Adds flavor to roasted vegetables and bean soups'} />
					</div>
				</div>
			</div>
			<div class="item">
				<InnerH3 heading={'Cheese'} />
				<div class="cheese">
					<div>
						<H4 heading={'Khmeli Suneli'} />
					</div>
					<div class=" ing">
						This fragrant Georgian spice is mixed with fenugreek, marigold petals, coriander, black
						pepper, dill, mint, and bay leaf. It has warm, bitter, nutty, and grassy flavors.
					</div>
					<div class="uses">
						<H4 heading={'Uses'} />
						<P paragraph={'Used in stews and meat dishes'} />
						<P paragraph={'Adds flavor to roasted vegetables and bean soups'} />
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="supplements">
		<div class="item-card">
			<H2 heading={'Beverages'} />

			<div class="beverages">
				<div class="item">
					<H4 heading={'Lemonade'} />
					<P
						paragraph={'A refreshing citrus drink made with freshly squeezed lemons and a hint of sweetness. Perfect for quenching your thirst.'}
					/>
				</div>
				<div class="item">
					<H4 heading={'Iced Tea'} />
					<P
						paragraph={'A refreshing citrus drink made with freshly squeezed lemons and a hint of sweetness. Perfect for quenching your thirst.'}
					/>
				</div>
			</div>
		</div>
		<div class="item-card">
			<H2 heading={'Food Drinks'} />

			<div class="beverages">
				<div class="item">
					<H4 heading={'Lemonade'} />
					<P
						paragraph={'A refreshing citrus drink made with freshly squeezed lemons and a hint of sweetness. Perfect for quenching your thirst.'}
					/>
				</div>

				<div class="item">
					<H4 heading={'Iced Tea'} />
					<P
						paragraph={'A refreshing citrus drink made with freshly squeezed lemons and a hint of sweetness. Perfect for quenching your thirst.'}
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="reviews">
		<!-- https://randomuser.me/api/portraits/men/75.jpg -->
		<div class="review-section">
			<H2 heading={'Customer Reviews'} />

			<div class="quote">
				<div class="quote-container">
					<div>
						<Star starData="4" />
					</div>
					<div class="quote-content">
						Absolutely delicious! The perfect balance of flavors. The chicken was tender, and the
						spiciness was just right.
					</div>

					<div class="quote-auth"><P paragraph={'Date -19 june'} /></div>
					<div class="quote-auth">-John Doe</div>
				</div>
				<div class="person-container">
					<img src={random} alt="" srcset="" />
				</div>
			</div>
		</div>
	</div>
	<div class="sale">
		<div class="sale-outer">
			<img src={sale} alt="" srcset="" />
		</div>
		<div class="sale-title">
			<H2 heading={'Happy Hour Special'} />
			<div class="sale-decription">
				<P paragraph={'Enjoy Discounted Price moterfuKSANfk'} />
			</div>
			<div class="date-info-sale">
				<div class="Start">
					<P paragraph={'Start 123kl'} />
				</div>
				<div class="end">
					<P paragraph={'Start 123kl'} />
				</div>
			</div>
		</div>
	</div>
	<!-- svelte-ignore a11y-label-has-associated-control -->

	<div class="addreview">
		<H2 heading={'Add Your Reviews'} />
		<form class="content">
			<label>
				<InnerH3 heading={'Name'} />
			</label>
			<div class="search">
				<input type="text" bind:value={user.name} />
			</div>
			<label><InnerH3 heading={'Email'} /></label>
			<div class="search">
				<input type="text" bind:value={user.email} />
			</div>
			<label><InnerH3 heading={'Mobile'} /></label>
			<div class="search">
				<input type="text" bind:value={user.phone} />
			</div>
		</form>
	</div>
</div>

<style>
	input[type='text'] {
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
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		gap: 1rem;
	}

	.check {
		display: flex;
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
		height: 100%;
		object-fit: cover;
	}
	.person-container {
		grid-column: auto/ auto;
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
		background-color: #000;
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
	@media (max-width: 768px){
		.container{
			display: flex;
			flex-direction: column;
		}
		.topping-container{
			display: flex;
		}
	}
</style>
