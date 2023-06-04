<script>
	import aw1 from '../lib/images/logos/aw1.svg';
	import aw2 from '../lib/images/logos/aw2.svg';
	import aw3 from '../lib/images/logos/aw3.svg';
	import aw4 from '../lib/images/logos/aw4.svg';
	import H4 from '../stylingComponents/H4.svelte';
	import H1 from '../stylingComponents/H1.svelte';
	import H3 from '../stylingComponents/H3.svelte';
	import P from '../stylingComponents/P.svelte';
	import pancakes from '../lib/images/background/cusines/pancakes.jpg';
	import W from '../lib/images/logos/W.svg';
</script>

<div class="laurel">
	<div class="award">
		<div>
			<H4 heading={'Awards & Recognition'} />
			<H1 heading={'Our Laurels'} />
			<div class="badges">
				<div class="card">
					<div class="image-container">
						<img src={aw1} alt="" />
					</div>
					<div class="paragraph">
						<H3 heading={'Rising Star'} />
						<P paragraph={'Lorem ipsum dolor sitamet, consectetur.'} />
					</div>
				</div>
				<div class="card">
					<div class="image-container">
						<img src={aw2} alt="" />
					</div>
					<div class="paragraph">
						<H3 heading={'AA Hospitality'} />
						<P paragraph={'Lorem ipsum dolor sitamet, consectetur.'} />
					</div>
				</div>
				<div class="card">
					<div class="image-container">
						<img src={aw3} alt="" />
					</div>
					<div class="paragraph">
						<H3 heading={'Outstanding Chef'} />
						<P paragraph={'Lorem ipsum dolor sitamet, consectetur.'} />
					</div>
				</div>
				<div class="card">
					<div class="image-container">
						<img src={aw4} alt="" />
					</div>
					<div class="paragraph">
						<H3 heading={'Bib Gourmond'} />
						<P paragraph={'Lorem ipsum dolor sitamet, consectetur.'} />
					</div>
				</div>
			</div>
		</div>
		<div class="img-section">
			<img src={pancakes} class="main-img" alt="" />

			<img src={W} class="alphabet" alt="" />
		</div>
	</div>
</div>

<style>
	.badges {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		gap: 8rem;
	}
	.laurel {
		padding: 2rem;
	}
	.award {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	}

	.card {
		width: 100%;
		display: grid;
		grid-template-columns: 0.2fr 1fr;
		align-items: center;
		gap: 1rem;
	}
	.image-container img {
		object-fit: contain;
		width: 80px;
		grid-column: 1/-1;
	}
	.image-container {
		position: relative;
	}

	.img-section {
		display: grid;
		grid-template-columns: 0.4fr 0.2fr 1fr;
		grid-template-rows: 2.8fr 1.6fr;
	}

	.main-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.alphabet {
		z-index: 1;
		grid-area: 2/1/-1/3;
		width: 100%;
		height: 100%;
		object-fit: contain;
		opacity: 0.8;
	}
	.main-img {
		grid-area: 1/2/3/-1;
	}
</style>
