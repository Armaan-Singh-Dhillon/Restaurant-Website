<script>
	import cocktail from '../lib/images/background/cusines/cocktail.jpg';
	import H3 from '../stylingComponents/H3.svelte';
	import H4 from '../stylingComponents/H4.svelte';
	import H1 from '../stylingComponents/H1.svelte';
	import MenuCard from '../stylingComponents/MenuCard.svelte';
</script>

<div class="container">
    <div>
            <H4 heading={'Menu That Fits You Palatte'} />
            <H1 heading={"Today's Special"} />

            
        </div>
	<div class="menu">
        
		<div class="columns">
			<H3 heading={'Wine & Beer'} />
			<MenuCard item={'Chapel Hill Shiraz'} price={56} text={'AU | Bottle'} />
			<MenuCard item={'Vineyard Reserve Chardonnay'} price={42} text={'US | Bottle'} />
			<MenuCard item={'La Rioja Tempranillo'} price={38} text={'ES | Bottle'} />
			<MenuCard item={'Craft IPA'} price={8} text={'USD | Pint'} />
			<MenuCard item={'Belgian Witbier'} price={9} text={'USD | Pint'} />
			<MenuCard item={'German Hefeweizen'} price={10} text={'USD | Pint'} />
            <MenuCard item={'Irish Stout'} price={11} text={'USD | Pint'} />

		</div>
		<div>
			<img src={cocktail} alt="" />
		</div>
		<div class="columns">
			<H3 heading={'Cocktails'} />
			<MenuCard item={'Chapel Hill Shiraz'} price={56} text={'AU | Bottle'} />
			<MenuCard item={'Sapphire Martini'} price={18} text={'USD | Bottle'} />
			<MenuCard item={'Golden Margarita'} price={25} text={'USD | Bottle'} />
			<MenuCard item={'Diamond Fizz'} price={32} text={'USD | Bottle'} />
			<MenuCard item={'Platinum Cosmopolitan'} price={20} text={'USD | Bottle'} />
			<MenuCard item={'Emerald Martini'} price={22} text={'USD | Bottle'} />
			<MenuCard item={'Royal Manhattan'} price={28} text={'USD | Bottle'} />
		</div>
	</div>
</div>

<style>
	.columns {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
	}
	.container {
		display: flex;
        flex-direction: column;
		align-items: center;
		color: white;
	}
	.menu {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}
	img {
		width: 100%;
        height: 100%;
		object-fit: cover;
	}
</style>
