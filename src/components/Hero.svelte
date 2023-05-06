<script>
    import HeadingMain from '../stylingComponents/HeadingMain.svelte';
    import H4 from '../stylingComponents/H4.svelte';
    import P from '../stylingComponents/P.svelte';
	import cusine from '../lib/images/background/cusines/cusine1.jpg';
    import Button from '../stylingComponents/Button.svelte';
</script>

<div class="container">
	<div class="hero">
		<div class="intro">
            <div class="heading-container">

                <H4 heading={'Chase The New Flavour'}/>
            </div>
			<HeadingMain heading={'Love The Original Taste'} />
            <P paragraph={'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus'}/>
            <Button text={'Explore Menu'}/>


		</div>
		<div class="image-container">
			<img src={cusine} alt="" class="image" />
			<div class="modifier1">hi</div>
			<div class="modifier2">hi</div>
		</div>
	</div>
</div>

<style>
    .heading-container{
        width: 50%;
    }
	.intro {
		padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
	}
	.container {
		display: flex;
		justify-content: space-evenly;
		padding: 2rem;
		height: 38rem;
        background-image: radial-gradient(rgba(82, 71, 71, 0.2),#000),
			url(../lib/images/background/background.jpg);
	}

	.hero {
		width: 90%;
		color: white;

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.image-container {
		display: grid;
		grid-template-columns: repeat(34, 1fr);
		grid-template-rows: repeat(32, 1fr);
	}
	.modifier1 {
		background-color: #dcca87;
		grid-area: 1/12/7/-1;
	}
	.modifier2 {
		background-color: #dcca87;
		grid-area: 7/1/-1/-12;
	}
	.image {
		grid-area: 2/2/-2/-2;
		z-index: 1;
	}
</style>
