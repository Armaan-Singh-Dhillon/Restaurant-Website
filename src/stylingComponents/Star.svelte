<script>
	export let starData = 0; // The star data, ranging from 0 to 5

	function getStarType(index) {
		const roundedRating = Math.round(starData * 2) / 2;
		if (index <= roundedRating) {
			if (index === Math.floor(roundedRating) && roundedRating % 1 !== 0) {
				return 'half';
			}
			return 'full';
		}
		return 'empty';
	}
</script>

<div class="star-container">
	{#each Array.from({ length: 5 }, (_, index) => index + 1) as star}
		<div class="star {getStarType(star)}" />
	{/each}
</div>

<style>
    .star-container{
        display: flex;
    }
	.star {
		width: 5%;
		height: 25px;  
		background-repeat: no-repeat;
        background-size: contain;
	}

	.full {
		background-image: url(../lib/images/logos/full-star.svg);
	}

	.half {
		background-image: url(../lib/images/logos/half-star.svg);
	}

	.empty {
		background-image: url(../lib/images/logos/zero-star.svg);
	}
</style>
