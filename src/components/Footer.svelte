<script>
	import H1 from '../stylingComponents/H1.svelte';
	import H2 from '../stylingComponents/H2.svelte';
	import H4 from '../stylingComponents/H4.svelte';
	import P from '../stylingComponents/P.svelte';
	import Button from '../stylingComponents/Button.svelte';
	import H5 from '../stylingComponents/H5.svelte';
	import scissor from '../lib/images/logos/scissors.svg'
</script>

<div class="footer">
	<div class="subscribe">
		<div class="sticker">
			<img src={scissor} alt="">

		</div>
		<div>
			<H4 heading={'Newsletter'} />
		</div>
		<div>
			<H1 heading={'Subscribe To Our Newsletter'} />
		</div>
		<div>
			<P paragraph={'and never miss updates'} />
		</div>
		<div class="inbox">
			<input type="text" />
			<Button text={'Subscribe'} />
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
	.sticker{
		position: absolute;
		top: -20%;
		left: 10%;
	}
	.footer {
		display: grid;
		grid-template-columns: 0.1fr 0.1fr 2fr 0.1fr 0.1fr;
		grid-template-rows: repeat(8, 100px);
        padding-top:8rem ;
		background-repeat: no-repeat;
		background-position: cover;
	}
	.subscribe {
		grid-area: 1/3/5/-3;
		z-index: 1;
		border: 1px solid #dcca87;
		background-color: black;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		position: relative;
	}
	.middle {
		grid-area: 4/2/-1/-2;

		color: white;
		

		display: grid;
		grid-template-rows: repeat(4, 1fr);
		justify-items: center;
	}
	.section {
		width: 80%;
		grid-row: 2/-1;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		justify-items: center;
	}
	.inbox {
		width: 60%;
		display: grid;
		grid-template-columns: 0.8fr 0.2fr;
		gap: 1rem;
	}
	input {
		width: 100%;
		background-color: #000;
		border: 1px solid whitesmoke;
	}
</style>
