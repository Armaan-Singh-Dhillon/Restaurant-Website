<script>
	import aw1 from '../lib/images/logos/aw1.svg';
	import aw2 from '../lib/images/logos/aw2.svg';
	import aw3 from '../lib/images/logos/aw3.svg';
	import aw4 from '../lib/images/logos/aw4.svg';
	import H4 from '../stylingComponents/H4.svelte';
	import H1 from '../stylingComponents/H1.svelte';
	import H3 from '../stylingComponents/H3.svelte';
	import P from '../stylingComponents/P.svelte';
	import pancakes from '../lib/images/background/cusines/pexels-ash-376464.jpg';
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
						<P
							paragraph={' We are thrilled to be recognized as a Rising Star in the culinary world. This prestigious award celebrates our dedication to innovation, creativity, and pushing the boundaries of gastronomy. Join us on a journey of culinary discovery as our talented team '}
						/>
					</div>
				</div>
				<div class="card">
					<div class="image-container">
						<img src={aw2} alt="" />
					</div>
					<div class="paragraph">
						<H3 heading={'AA Hospitality'} />
						<P
							paragraph={'We are honored to have received the AA Hospitality award, a symbol of excellence in the industry. With meticulous attention to detail and a passion for delivering impeccable service, we strive to create unforgettable dining experiences for our guests. Visit us and savor the finest flavors, complemented by an ambiance that reflects our commitment to hospitality.'}
						/>
					</div>
				</div>
				<div class="card">
					<div class="image-container">
						<img src={aw3} alt="" />
					</div>
					<div class="paragraph">
						<H3 heading={'Outstanding Chef'} />
						<P
							paragraph={' Our chef has been recognized as an Outstanding Chef, an accolade that acknowledges their exceptional culinary skills and visionary approach to gastronomy. With their expertise and creativity, they craft extraordinary dishes that showcase the finest ingredients and innovative techniques. Join us for a dining experience curated by an extraordinary talent that will redefine your perception of food.'}
						/>
					</div>
				</div>
				<div class="card">
					<div class="image-container">
						<img src={aw4} alt="" />
					</div>
					<div class="paragraph">
						<H3 heading={'Bib Gourmond'} />
						<P
							paragraph={'Our restaurant is proud to have been awarded the prestigious Bib Gourmand recognition. This esteemed accolade is a testament to our commitment to providing exceptional dining experiences at an affordable price. Come and indulge in our culinary delights, where quality and value go hand in hand.'}
						/>
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
		grid-template-columns: 1fr;
	}
	.laurel {
		padding: 8rem 2rem;
	}
	.award {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}

	.card {
		display: flex;
		flex-direction: column;
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
