<script>
	
    import P from './P.svelte';
    export let price=0
    export let item=''
    export let text=''
</script>

<div class="card">
	<div class="upper-card">
		<div class="item">{item}</div>
		<div class="u-line" />
		<div class="price">${price}</div>
	</div>
    <div>
        <P paragraph={text}/>
    </div>
</div>

<style>
	.card {
		width: 100%;
        margin: 1rem;
	}
	.upper-card {
		width: 100%;
		display: flex;
		justify-content: space-between;
		color: white;
		align-items: center;
	}
	.u-line {
		flex: 1;
		align-self: flex-end;
		margin: 4px;
		padding: 2px;
		border-bottom: 1px solid #ebebeb;
	}
	.item {
		font-size: calc(0.5em + 1vw);
		font-family: 'Cormorant Upright', serif;
		font-weight: 600;
		color: #dcca87;
	}
	.price {
		font-size: calc(0.3em + 1vw);
	}
</style>
