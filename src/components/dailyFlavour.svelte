<script>
	import InnerH3 from './../stylingComponents/inner/innerH3.svelte';
	import InnerH1 from './../stylingComponents/inner/innerH1.svelte';
	import H4 from './../stylingComponents/H4.svelte';
	import P from '../stylingComponents/P.svelte';
	import data from '../localData/dailyExplosive.js';
	import { fade, fly, blur } from 'svelte/transition';

	let weekday = 'monday';
	const handleClick = (e) => {
		const value = e.target.getAttribute('value');
		weekday = value;
	};
</script>

<div class="container">
	<div class="one">
		<H4 heading={'Special Dishes'} />
		<InnerH1 heading={'Daily Flavor Explosion'} />
	</div>
	<div class="two">
		Our Daily Flavor Explosion is a section dedicated to showcasing the vibrant and diverse flavors
		that our talented team has curated. Each day, our chefs select the finest seasonal ingredients,
		sourced locally whenever possible, to craft a menu that surprises and delights.
	</div>
	<div class="three">
		<div class="tags" value="monday" on:click={(e) => handleClick(e)} on:keyup>Monday</div>
		<div class="tags" value="tuesday" on:click={(e) => handleClick(e)} on:keyup>Tuesday</div>
		<div class="tags" value="wednesday" on:click={(e) => handleClick(e)} on:keyup>Wednesday</div>
		<div class="tags" value="thursday" on:click={(e) => handleClick(e)} on:keyup>Thursday</div>
		<div class="tags" value="friday" on:click={(e) => handleClick(e)} on:keyup>Friday</div>
		<div class="tags" value="saturday" on:click={(e) => handleClick(e)} on:keyup>Saturday</div>
		<div class="tags" value="sunday" on:click={(e) => handleClick(e)} on:keyup>Sunday</div>
	</div>
	{#if weekday == 'monday'}
		<div class="four" transition:fade={{ duration: 300 }}>
			<div class="card">
				<div class="card-upper">
					<div class="info">
						<div class="title">{data[weekday].name}</div>
						<div class="text">{data[weekday].content}</div>
					</div>
					<div class="price">
						<InnerH3 heading={`$${data[weekday].price}`} />
					</div>
				</div>
				<div class="image-container">
					<img
						src={`src/lib/images/menu/dailyExplosion/${data[weekday].image1}`}
						alt=""
						srcset=""
					/>
				</div>
			</div>
		</div>
		<div class="five" transition:fade={{ duration: 400 }}>
			<div class="image-container">
				<img src={`src/lib/images/menu/dailyExplosion/${data[weekday].image2}`} alt="" srcset="" />
			</div>
		</div>
	{/if}
	{#if weekday == 'tuesday'}
		<div class="four" transition:fade={{ duration: 300 }}>
			<div class="card">
				<div class="card-upper">
					<div class="info">
						<div class="title">{data[weekday].name}</div>
						<div class="text">{data[weekday].content}</div>
					</div>
					<div class="price">
						<InnerH3 heading={`$${data[weekday].price}`} />
					</div>
				</div>
				<div class="image-container">
					<img
						src={`src/lib/images/menu/dailyExplosion/${data[weekday].image1}`}
						alt=""
						srcset=""
					/>
				</div>
			</div>
		</div>
		<div class="five" transition:fade={{ duration: 400 }}>
			<div class="image-container">
				<img src={`src/lib/images/menu/dailyExplosion/${data[weekday].image2}`} alt="" srcset="" />
			</div>
		</div>
	{/if}
	{#if weekday == 'wednesday'}
		<div class="four" transition:fade={{ duration: 300 }}>
			<div class="card">
				<div class="card-upper">
					<div class="info">
						<div class="title">{data[weekday].name}</div>
						<div class="text">{data[weekday].content}</div>
					</div>
					<div class="price">
						<InnerH3 heading={`$${data[weekday].price}`} />
					</div>
				</div>
				<div class="image-container">
					<img
						src={`src/lib/images/menu/dailyExplosion/${data[weekday].image1}`}
						alt=""
						srcset=""
					/>
				</div>
			</div>
		</div>
		<div class="five" transition:fade={{ duration: 400 }}>
			<div class="image-container">
				<img src={`src/lib/images/menu/dailyExplosion/${data[weekday].image2}`} alt="" srcset="" />
			</div>
		</div>
	{/if}
	{#if weekday == 'thursday'}
		<div class="four" transition:fade={{ duration: 300 }}>
			<div class="card">
				<div class="card-upper">
					<div class="info">
						<div class="title">{data[weekday].name}</div>
						<div class="text">{data[weekday].content}</div>
					</div>
					<div class="price">
						<InnerH3 heading={`$${data[weekday].price}`} />
					</div>
				</div>
				<div class="image-container">
					<img
						src={`src/lib/images/menu/dailyExplosion/${data[weekday].image1}`}
						alt=""
						srcset=""
					/>
				</div>
			</div>
		</div>
		<div class="five" transition:fade={{ duration: 400 }}>
			<div class="image-container">
				<img src={`src/lib/images/menu/dailyExplosion/${data[weekday].image2}`} alt="" srcset="" />
			</div>
		</div>
	{/if}
	{#if weekday == 'friday'}
		<div class="four" transition:fade={{ duration: 300 }}>
			<div class="card">
				<div class="card-upper">
					<div class="info">
						<div class="title">{data[weekday].name}</div>
						<div class="text">{data[weekday].content}</div>
					</div>
					<div class="price">
						<InnerH3 heading={`$${data[weekday].price}`} />
					</div>
				</div>
				<div class="image-container">
					<img
						src={`src/lib/images/menu/dailyExplosion/${data[weekday].image1}`}
						alt=""
						srcset=""
					/>
				</div>
			</div>
		</div>
		<div class="five" transition:fade={{ duration: 400 }}>
			<div class="image-container">
				<img src={`src/lib/images/menu/dailyExplosion/${data[weekday].image2}`} alt="" srcset="" />
			</div>
		</div>
	{/if}
	{#if weekday == 'saturday'}
		<div class="four" transition:fade={{ duration: 300 }}>
			<div class="card">
				<div class="card-upper">
					<div class="info">
						<div class="title">{data[weekday].name}</div>
						<div class="text">{data[weekday].content}</div>
					</div>
					<div class="price">
						<InnerH3 heading={`$${data[weekday].price}`} />
					</div>
				</div>
				<div class="image-container">
					<img
						src={`src/lib/images/menu/dailyExplosion/${data[weekday].image1}`}
						alt=""
						srcset=""
					/>
				</div>
			</div>
		</div>
		<div class="five" transition:fade={{ duration: 400 }}>
			<div class="image-container">
				<img src={`src/lib/images/menu/dailyExplosion/${data[weekday].image2}`} alt="" srcset="" />
			</div>
		</div>
	{/if}
	{#if weekday == 'sunday'}
		<div class="four" transition:fade={{ duration: 300 }}>
			<div class="card">
				<div class="card-upper">
					<div class="info">
						<div class="title">{data[weekday].name}</div>
						<div class="text">{data[weekday].content}</div>
					</div>
					<div class="price">
						<InnerH3 heading={`$${data[weekday].price}`} />
					</div>
				</div>
				<div class="image-container">
					<img
						src={`src/lib/images/menu/dailyExplosion/${data[weekday].image1}`}
						alt=""
						srcset=""
					/>
				</div>
			</div>
		</div>
		<div class="five" transition:fade={{ duration: 400 }}>
			<div class="image-container">
				<img src={`src/lib/images/menu/dailyExplosion/${data[weekday].image2}`} alt="" srcset="" />
			</div>
		</div>
	{/if}
</div>

<style>
	img {
		width: 100%;
		height: 600px;
		object-fit: cover;
		animation: scale 1s ease-in;
	}

	.price {
		margin: 10px;
	}
	.card {
		position: relative;
	}
	.card-upper {
		width: 100%;
		display: flex;
		padding: 2rem;
		background-color: black;
		position: absolute;
	}

	.text {
		color: #aaa;
		font-family: 'Poppins', sans-serif;
		font-size: calc(0.4em + 1vw);
	}
	.card-upper .title {
		font-family: 'Noto Serif Georgian', serif;
		font-weight: 300;
		color: white;
		font-size: calc(1.5em + 1vw);
	}
	.tags {
		font-family: 'Poppins', sans-serif;
		font-weight: 300;
		color: #aaa;
		font-size: 20px;
		padding: 10px 0;
		display: flex;
	}
	.tags::before {
		content: '';
		width: 2px;
		background-color: black;
		transform: scaleX(0);
		margin: 2px;
		transition: all 0.4s ease-in;
		background-color: #dcca87;
	}
	.tags:hover {
		color: #dcca87;
		cursor: pointer;
	}
	.tags:hover::before {
		transform: scaleX(1);

		margin-right: 20px;
	}
	.container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

		gap: 1rem;
		background-color: black;
	}
	.one {
		grid-column: span 8 / auto;
	}
	.two {
		grid-column: span 8 / auto;
		font-family: 'Sacramento', cursive;
		font-size: calc(3.5em + 1vw);
		word-spacing: 4px;
		color: #dcca87;
	}
	.three {
		grid-column: span 4 / auto;
		color: white;
	}
	.four {
		grid-column: span 6 / auto;
	}
	.five {
		grid-column: span 6 / auto;
	}
</style>
