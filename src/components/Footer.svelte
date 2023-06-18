<script>
	import H2 from './../stylingComponents/H2.svelte';
	import H4 from '../stylingComponents/H4.svelte';
	import P from '../stylingComponents/P.svelte';
	import Button from '../stylingComponents/Button.svelte';
	import H5 from '../stylingComponents/H5.svelte';
	import scissor from '../lib/images/logos/scissors.svg';
</script>

<div class="footer">
	<div class="subscribe">
		<div class="sticker">
			<img src={scissor} alt="" />
		</div>
		<div class="modifier" />
		<div class="subscription">
			<div>
				<H4 heading={'Newsletter'} />
			</div>
			<div>
				<H2 heading={'Subscribe To Our Newsletter'} />
			</div>
			<div>
				<P paragraph={'and never miss updates'} />
			</div>
			<div class="inbox">
				<div class="text-box">
					<input type="text" placeholder="Enter Your Email" />
				</div>
				<Button text={'Subscribe'} />
			</div>
		</div>
	</div>
	<div class="middle">
		<div class="section">
			<div class="items">
				<H5 heading={'Contact Us'} />

				<div>
					<P paragraph={'9 W53rd St New York, NY 10019'} />
					<P paragraph={'USA +1212-344-1230 '} />
					<P paragraph={'+1212-555-1230'} />
				</div>
			</div>
			<div class="items">
				<H2 heading={'Wine And Dine'} />
			</div>
			<div class="items">
				<H5 heading={'Working Hours'} />
				<div>
					<P paragraph={'Monday-Friday:'} />
					<P paragraph={'08:00 am -12:00 am'} />
					<P paragraph={'Saturday-Sunday:'} />
					<P paragraph={'07:00am -11:00 pm'} />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.inbox {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.text-box{
		width: 50%;
		position: relative;

	}
	input {
		width: 100%;
		height: 100%;
		padding: 8px;
		background-color: #242424;
		border: none;
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
	.section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		gap: 1rem;
		justify-items: center;
	}

	.footer {
		background-color: #000;
	}
	.subscription {
		grid-area: 3/1/-1/-1;
		z-index: 8;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
	.modifier {
		border: 2px solid #dcca87;
		grid-area: 2/1/-1/-1;
	}
	.subscribe {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(8, minmax(20px, 80px));
	}
	.sticker {
		grid-area: 1/2/3/2;
	}
	img {
		width: 100%;
		height: 100%;
	}
	@media (max-width: 325px) {
		.sticker {
			grid-area: 1/2/3/5;
		}
	}
</style>
