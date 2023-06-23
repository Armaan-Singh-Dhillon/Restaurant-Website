<script>
	import HIstoryBar from './../../../components/HIstoryBar.svelte';
	import { slide } from 'svelte/transition';
	import InnerH3 from './../../../stylingComponents/inner/innerH3.svelte';
	import InnerH1 from './../../../stylingComponents/inner/innerH1.svelte';
	import H1 from './../../../stylingComponents/H1.svelte';
	import back from '../../../lib/images/background/01-min-scaled.jpg';
	import shake from '../../../lib/images/faq/shake.jfif';
	import P from '../../../stylingComponents/P.svelte';

	const data = [
		{
			question: "What are the restaurant's opening hours?",
			answer: 'We are open from 12:00 PM to 10:00 PM, Monday to Sunday.',
			show: false
		},
		{
			question: 'Do I need to make a reservation?',
			show: false,

			answer:
				'While walk-ins are welcome, we highly recommend making a reservation, especially during busy hours, to ensure a table is available for you.'
		},
		{
			show: false,
			question: 'Does the restaurant have vegetarian/vegan options?',
			answer:
				'Yes, we offer a variety of vegetarian and vegan dishes. Our menu is designed to cater to different dietary preferences and restrictions.'
		},
		{
			show: false,
			question: 'Is there a dress code?',
			answer:
				'We encourage smart casual attire. While formal attire is not mandatory, we appreciate guests dressing up to enhance the dining experience.'
		},
		{
			show: false,
			question: 'Can I bring my own wine?',
			answer:
				'We have an extensive wine selection available, and we kindly ask that you do not bring your own wine. Our sommelier will be happy to assist you in choosing the perfect wine to accompany your meal.'
		}
	];
	function showHandle(index) {
    
       
		data[index].show = !data[index].show;
	}
</script> 

<HIstoryBar/>

<div class="faq">
	<div class="image-container">
		<div class="title">
			<InnerH1 heading={'FAQ'} />
		</div>
		<img src={back} alt="" srcset="" />
	</div>

	<div class="hero">
		<div class="shake">
			<img src={shake} alt="" srcset="" />
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->

		<div class="card-container">
			{#each data as item, i}
				<div class={`card ${item.show ? 'show' : ''}`} on:click={() => showHandle(i)}>
					<InnerH3 heading={item.question} />
					{#if item.show}
						<div transition:slide={{ duration: 500, axis: 'y' }} class="para">
							<P
								paragraph={item.answer}
							/>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
    .para{
        margin: 1rem 0;
    }
	.card-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

	}
	.card {
		padding: 1rem;
	}
	.show {
		background-color: #242424;
		border: 1px solid #dcca87;
	}
	.faq {
		background-color: black;
	}
	.hero {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
        margin: 6rem 0;

	}
	.title {
		position: absolute;
		z-index: 2;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.image-container {
		height: 400px;
		position: relative;
	}
	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.7;
	}
	.hero img {
		width: 100%;
        height: 45vw;
		object-fit: cover;
	}
</style>
