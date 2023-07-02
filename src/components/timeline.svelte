<script>
	import InnerH3 from './../stylingComponents/inner/innerH3.svelte';
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';
	import H2 from '../stylingComponents/H2.svelte';
	import hex from '../lib/images/logos/hex.svg';
	import InnerH1 from '../stylingComponents/inner/innerH1.svelte';
	import interior from '../lib/images/timeline/restaurant-interior.jpg';
	import cusines from '../lib/images/timeline/cusines.jpg';
	import renovation from '../lib/images/timeline/renovation.jpg';
	import increaseChef from '../lib/images/timeline/increase-chef.jpg';
	import michelin from '../lib/images/timeline/michelin.png';
	import signature from '../lib/images/timeline/signature.jpg';
	import international from '../lib/images/timeline/international.jpg';
	import james from '../lib/images/timeline/james.jpg';

	let showComponent = true;

	const handleResize = () => {
		showComponent = window.innerWidth >= 1000;
	};
	const timelineData = [
		{
			time: '1930',
			title: 'Restaurant Inauguration',
			image: interior,
			description: 'The luxury restaurant opens its doors for the first time.'
		},
		{
			time: '1940',
			title: 'Expansion of Cuisines',
			image: cusines,

			description: 'Introduction of French and Italian cuisines to the menu.'
		},
		{
			time: '1955',
			title: 'Renovation and Redesign',
			image: renovation,

			description: 'The restaurant undergoes a major renovation and revamps its interior design.'
		},
		{
			time: '1962',
			title: 'Increase in Staff',
			image: increaseChef,

			description: "Expansion of the restaurant's team to cater to growing demand."
		},
		{
			time: '1975',
			title: 'Receiving Michelin Star',
			image: michelin,

			description: 'The restaurant is awarded a prestigious Michelin star for culinary excellence.'
		},
		{
			time: '1988',
			title: 'Launch of Signature Dish',
			image: signature,

			description:
				'The restaurant introduces its iconic signature dish, becoming a customer favorite.'
		},
		{
			time: '2005',
			title: 'Expansion to International Locations',
			image: international,

			description: 'The restaurant opens branches in major cities around the world.'
		},
		{
			time: '2020',
			title: 'Receiving James Beard Award',
			image: james,

			description: 'The restaurant is honored with a prestigious James Beard Award.'
		}
	];
</script>

<div class="container">
	<div>
		<H2 heading={'Timeline'} />
	</div>
	{#if showComponent}
		<Timeline position="alternate">
			{#each timelineData as option, i}
				<TimelineItem>
					<TimelineSeparator>
						<img src={hex} alt="" srcset="" class="points" />
						<TimelineConnector style={'width: 1px;'} />
					</TimelineSeparator>
					<TimelineContent>
						<div class="card">
							<div class={`${(i + 1) % 2 != 0 ? 'stickerleft' : 'stickerright'}`}>
								<InnerH3 heading={option.title} />
								<div class="para">
									{option.description}
								</div>
							</div>
							<img
								src={option.image}
								alt=""
								srcset=""
								class={`${(i + 1) % 2 == 0 ? 'cardimgleft' : 'cardimgright'}`}
							/>
							<div class={`${(i + 1) % 2 != 0 ? 'yearleft' : 'yearright'}`}>
								<InnerH1 heading={option.time} />
							</div>
						</div>
					</TimelineContent>
				</TimelineItem>
			{/each}
		</Timeline>
	{:else}
		<Timeline>
			{#each timelineData as option, i}
				<TimelineItem>
					<TimelineOppositeContent slot="opposite-content">
						<div class="para">
							{option.description}
						</div>
					</TimelineOppositeContent>

					<TimelineSeparator>
						<img src={hex} alt="" srcset="" class="points" />
						<TimelineConnector style={'width: 1px;'} />
					</TimelineSeparator>
					<TimelineContent>
						<div class="heading">
							{option.title}
						</div>
					</TimelineContent>
				</TimelineItem>
			{/each}
		</Timeline>
	{/if}
</div>
<svelte:window on:resize={handleResize} />

<style>
	.para {
		font-size: calc(0.4em + 1vw);
		color: #aaa;
	}
	.heading {
		font-family: 'Noto Serif Georgian', serif;
		font-weight: 300;
		color: #dcca87;
		font-size: calc(0.4em + 1vw);
	}
	.yearleft {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 10;
	}
	.yearright {
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 10;
	}
	.stickerleft {
		position: absolute;
		width: 80%;
		top: 20%;
		left: 0;
		transform: translateY(-50%);
		z-index: 8;
		padding: 1rem;
		border: 2px dotted #aaa;
		background-color: #242424;
	}
	.stickerright {
		position: absolute;
		width: 80%;
		top: 20%;
		right: 0;
		transform: translateY(-50%);
		background-color: #242424;
		padding: 1rem;
		border: 1px dotted #aaa;

		z-index: 8;
	}
	.card {
		height: 400px;
		position: relative;
	}
	.cardimgleft {
		width: 50%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		left: 0;
		z-index: 1;
	}
	.cardimgright {
		width: 50%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		right: 0;
		z-index: 1;
	}
	.points {
		width: 12px;
	}
</style>
