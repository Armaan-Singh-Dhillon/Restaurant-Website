<script>
	import Carousel from './Carousel.svelte';
	import img1 from '../lib/images/menu/slider/1.jpg';
	import img2 from '../lib/images/menu/slider/2.jpg';
	import img3 from '../lib/images/menu/slider/3.jpg';
	import img4 from '../lib/images/menu/slider/4.jpg';
	import img5 from '../lib/images/menu/slider/5.jpg';
</script>

<div class="container">
	<Carousel autoplay="2000" controls="false" duration="600">
		<img src={img1} alt="" srcset="" />
		<img src={img2} alt="" srcset="" />
		<img src={img3} alt="" srcset="" />
		<img src={img4} alt="" srcset="" />
		<img src={img5} alt="" srcset="" />
	</Carousel>
</div>

<style>
	img {
		height: 40vw;
	}
</style>
